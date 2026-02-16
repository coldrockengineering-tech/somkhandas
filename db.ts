import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, products, orders, orderItems, Product, Order, OrderItem, InsertProduct, InsertOrder, InsertOrderItem } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ PRODUCT QUERIES ============

export async function getAllProducts(): Promise<Product[]> {
  const db = await getDb();
  if (!db) return [];
  
  try {
    return await db.select().from(products).where(eq(products.isAvailable, true));
  } catch (error) {
    console.error("[Database] Failed to get products:", error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  
  try {
    const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get product:", error);
    return undefined;
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const db = await getDb();
  if (!db) return [];
  
  try {
    return await db.select().from(products).where(eq(products.category, category));
  } catch (error) {
    console.error("[Database] Failed to get products by category:", error);
    return [];
  }
}

export async function createProduct(product: InsertProduct): Promise<Product | null> {
  const db = await getDb();
  if (!db) return null;
  
  try {
    const result = await db.insert(products).values(product);
    const id = result[0].insertId as number;
    const created = await getProductById(id);
    return created || null;
  } catch (error) {
    console.error("[Database] Failed to create product:", error);
    return null;
  }
}

export async function updateProduct(id: number, updates: Partial<InsertProduct>): Promise<Product | null> {
  const db = await getDb();
  if (!db) return null;
  
  try {
    await db.update(products).set(updates).where(eq(products.id, id));
    const updated = await getProductById(id);
    return updated || null;
  } catch (error) {
    console.error("[Database] Failed to update product:", error);
    return null;
  }
}

// ============ ORDER QUERIES ============

export async function getAllOrders(): Promise<Order[]> {
  const db = await getDb();
  if (!db) return [];
  
  try {
    return await db.select().from(orders).orderBy(desc(orders.createdAt));
  } catch (error) {
    console.error("[Database] Failed to get orders:", error);
    return [];
  }
}

export async function getOrderById(id: number): Promise<Order | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  
  try {
    const result = await db.select().from(orders).where(eq(orders.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get order:", error);
    return undefined;
  }
}

export async function createOrder(order: InsertOrder): Promise<Order | null> {
  const db = await getDb();
  if (!db) return null;
  
  try {
    const result = await db.insert(orders).values(order);
    const id = result[0].insertId as number;
    const created = await getOrderById(id);
    return created || null;
  } catch (error) {
    console.error("[Database] Failed to create order:", error);
    return null;
  }
}

export async function updateOrder(id: number, updates: Partial<InsertOrder>): Promise<Order | null> {
  const db = await getDb();
  if (!db) return null;
  
  try {
    await db.update(orders).set(updates).where(eq(orders.id, id));
    const updated = await getOrderById(id);
    return updated || null;
  } catch (error) {
    console.error("[Database] Failed to update order:", error);
    return null;
  }
}

// ============ ORDER ITEM QUERIES ============

export async function getOrderItems(orderId: number): Promise<OrderItem[]> {
  const db = await getDb();
  if (!db) return [];
  
  try {
    return await db.select().from(orderItems).where(eq(orderItems.orderId, orderId));
  } catch (error) {
    console.error("[Database] Failed to get order items:", error);
    return [];
  }
}

export async function createOrderItem(item: InsertOrderItem): Promise<OrderItem | null> {
  const db = await getDb();
  if (!db) return null;
  
  try {
    const result = await db.insert(orderItems).values(item);
    const id = result[0].insertId as number;
    const created = await db.select().from(orderItems).where(eq(orderItems.id, id)).limit(1);
    return created.length > 0 ? created[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create order item:", error);
    return null;
  }
}

export async function createOrderWithItems(order: InsertOrder, items: InsertOrderItem[]): Promise<Order | null> {
  const db = await getDb();
  if (!db) return null;
  
  try {
    // Create the order first
    const createdOrder = await createOrder(order);
    if (!createdOrder) return null;
    
    // Create order items
    for (const item of items) {
      await createOrderItem({
        ...item,
        orderId: createdOrder.id,
      });
    }
    
    const finalOrder = await getOrderById(createdOrder.id);
    return finalOrder || null;
  } catch (error) {
    console.error("[Database] Failed to create order with items:", error);
    return null;
  }
}
