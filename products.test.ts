import { describe, it, expect, beforeAll, afterAll } from "vitest";
import * as db from "./db";
import type { InsertProduct, InsertOrder, InsertOrderItem } from "../drizzle/schema";

describe("Products Database", () => {
  let testProductId: number;

  it("should create a product", async () => {
    const product: InsertProduct = {
      name: "Test Beef",
      description: "Premium test beef",
      price: "95.00",
      unit: "kg",
      category: "individual",
      imageUrl: "https://example.com/test.jpg",
      imageKey: "test-beef.jpg",
      isAvailable: true,
    };

    const created = await db.createProduct(product);
    expect(created).not.toBeNull();
    expect(created?.name).toBe("Test Beef");
    expect(created?.price).toBe("95.00");
    
    if (created) {
      testProductId = created.id;
    }
  });

  it("should retrieve all products", async () => {
    const products = await db.getAllProducts();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it("should retrieve a product by ID", async () => {
    if (!testProductId) {
      throw new Error("Test product ID not set");
    }
    
    const product = await db.getProductById(testProductId);
    expect(product).not.toBeNull();
    expect(product?.name).toBe("Test Beef");
  });

  it("should retrieve products by category", async () => {
    const products = await db.getProductsByCategory("individual");
    expect(Array.isArray(products)).toBe(true);
  });

  it("should update a product", async () => {
    if (!testProductId) {
      throw new Error("Test product ID not set");
    }

    const updated = await db.updateProduct(testProductId, {
      price: "99.00",
      description: "Updated test beef",
    });

    expect(updated).not.toBeNull();
    expect(updated?.price).toBe("99.00");
    expect(updated?.description).toBe("Updated test beef");
  });
});

describe("Orders Database", () => {
  let testOrderId: number;
  let testProductId: number;

  beforeAll(async () => {
    // Create a test product for order items
    const product = await db.createProduct({
      name: "Test Product for Order",
      price: "50.00",
      unit: "kg",
      category: "individual",
      isAvailable: true,
    });
    if (product) {
      testProductId = product.id;
    }
  });

  it("should create an order", async () => {
    const order: InsertOrder = {
      customerName: "Test Customer",
      customerEmail: "test@example.com",
      customerPhone: "+27123456789",
      totalPrice: "150.00",
      status: "pending",
      paymentMethod: "eft",
      deliveryAddress: "123 Test Street, Arcadia",
    };

    const created = await db.createOrder(order);
    expect(created).not.toBeNull();
    expect(created?.customerName).toBe("Test Customer");
    expect(created?.status).toBe("pending");

    if (created) {
      testOrderId = created.id;
    }
  });

  it("should retrieve all orders", async () => {
    const orders = await db.getAllOrders();
    expect(Array.isArray(orders)).toBe(true);
    expect(orders.length).toBeGreaterThan(0);
  });

  it("should retrieve an order by ID", async () => {
    if (!testOrderId) {
      throw new Error("Test order ID not set");
    }

    const order = await db.getOrderById(testOrderId);
    expect(order).not.toBeNull();
    expect(order?.customerName).toBe("Test Customer");
  });

  it("should create order items", async () => {
    if (!testOrderId || !testProductId) {
      throw new Error("Test IDs not set");
    }

    const item: InsertOrderItem = {
      orderId: testOrderId,
      productId: testProductId,
      quantity: "2.00",
      unitPrice: "50.00",
      subtotal: "100.00",
    };

    const created = await db.createOrderItem(item);
    expect(created).not.toBeNull();
    expect(created?.quantity).toBe("2.00");
  });

  it("should retrieve order items", async () => {
    if (!testOrderId) {
      throw new Error("Test order ID not set");
    }

    const items = await db.getOrderItems(testOrderId);
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
  });

  it("should update order status", async () => {
    if (!testOrderId) {
      throw new Error("Test order ID not set");
    }

    const updated = await db.updateOrder(testOrderId, {
      status: "confirmed",
    });

    expect(updated).not.toBeNull();
    expect(updated?.status).toBe("confirmed");
  });

  it("should create order with items", async () => {
    if (!testProductId) {
      throw new Error("Test product ID not set");
    }

    const order: InsertOrder = {
      customerName: "Bulk Customer",
      customerEmail: "bulk@example.com",
      customerPhone: "+27987654321",
      totalPrice: "500.00",
      status: "pending",
      paymentMethod: "cash",
      deliveryAddress: "456 Bulk Street, Pretoria",
    };

    const items: InsertOrderItem[] = [
      {
        orderId: 0,
        productId: testProductId,
        quantity: "5.00",
        unitPrice: "50.00",
        subtotal: "250.00",
      },
      {
        orderId: 0,
        productId: testProductId,
        quantity: "5.00",
        unitPrice: "50.00",
        subtotal: "250.00",
      },
    ];

    const created = await db.createOrderWithItems(order, items);
    expect(created).not.toBeNull();
    expect(created?.customerName).toBe("Bulk Customer");

    if (created) {
      const retrievedItems = await db.getOrderItems(created.id);
      expect(retrievedItems.length).toBe(2);
    }
  });
});
