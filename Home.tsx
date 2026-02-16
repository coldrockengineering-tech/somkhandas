import { Card } from "@/components/ui/card";
import { MessageCircle, ShoppingCart, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium Artisanal Butchery
 * - Deep burgundy (#6B3E3E) as primary color for trust and premium positioning
 * - Warm gold (#D4A574) accents for natural, farm-fresh feel
 * - Asymmetric layouts and high-quality imagery as hero elements
 * - Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body
 */

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const whatsappNumber = "+27688359960";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  const productsWithPhotos = [
    { id: 1, name: "Beef Stew", price: "R89/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/NKJqhWCvwapDQfaq.png" },
    { id: 2, name: "Beef Chuck", price: "R95/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/wmHpaZZElkakEsoU.png" },
    { id: 3, name: "T-bone Steak", price: "R99/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/DnKFZsfaespuJCqu.jpeg" },
    { id: 4, name: "Goat Meat", price: "R149/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/JnofdfeQmCFjmiqN.png" },
    { id: 5, name: "Hard Body Chicken", price: "R89/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/OIeMDZjGjnTjwgeP.jpg" },
    { id: 6, name: "Chicken", price: "R80/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/UPbjtjBBLttfckdI.png" },
    { id: 7, name: "Mince Meat", price: "R95/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/TvdvPoeiPqbhwQCn.png" },
    { id: 8, name: "Eggs (Tray of 30)", price: "R65", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/ZycrrRWeHQwYNROe.jpg" },
    { id: 9, name: "Pork", price: "R70/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/hhQtbZgSKoGElFue.png" },
    { id: 10, name: "Umlimi Wors", price: "R99/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/RMBoghphupFbAoVH.png" },
    { id: 11, name: "Beef Steak", price: "R99/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/TDPbLyDcUODwYhtK.png" },
    { id: 12, name: "Short Ribs", price: "R95/kg", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/gmYpAyiIEiTQUEwQ.png" },
  ];

  const productsWithoutPhotos = [
    { id: 13, name: "Brisket", price: "R95/kg" },
    { id: 14, name: "Meaty Bones", price: "R45/kg" },
    { id: 15, name: "Dry Bones", price: "R30/kg" },
    { id: 16, name: "Mogodu (Cleaned)", price: "R40/kg" },
  ];

  const products = [...productsWithPhotos, ...productsWithoutPhotos];

  const combosWithPhotos = [
    {
      id: 1,
      name: "Combo (1)",
      price: "R500",
      popular: true,
      items: ["1kg - Beef Mince", "1kg - Boerewors", "1kg - Braai Meat", "1kg - Beef Stew", "1kg - Hamburger Patties", "1 x Tray Eggs"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/JNdpaCdTCarygQXC.png",
    },
  ];

  const combosWithoutPhotos = [
    {
      id: 2,
      name: "Combo (2)",
      price: "R850",
      items: ["2kg - Beef Mince", "2kg - Boerewors", "2kg - Braai Meat", "2kg - Beef Stew", "1kg - Hamburger Patties"],
    },
    {
      id: 3,
      name: "Combo (3)",
      price: "R1400",
      items: ["3kg - Beef Mince", "3kg - Boerewors", "3kg - Braai Meat", "3kg - Beef Stew", "2kg - Hamburger Patties", "2 x Tray Eggs"],
    },
    {
      id: 4,
      name: "Combo (4)",
      price: "R1700",
      items: ["4kg - Beef Mince", "4kg - Boerewors", "4kg - Braai Meat", "4kg - Hamburger Patties", "3kg - Beef Stew", "2 x Tray Eggs"],
    },
    {
      id: 5,
      name: "Combo (5)",
      price: "R2000",
      items: ["5kg - Beef Mince", "5kg - Beef Stew", "5kg - Braai Meat", "5kg - Boerewors", "2kg - Hamburger Patties", "2 x Tray Eggs"],
    },
  ];

  const combos = [...combosWithPhotos, ...combosWithoutPhotos];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleWhatsAppCatalog = () => {
    window.open(`${whatsappUrl}?text=Hi! I'd like to request a catalog of your products.`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hover:scale-110 transition-transform"
        title="Chat with us on WhatsApp"
      >
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663289731580/wZUXdcoJzayniRhm.png"
          alt="WhatsApp"
          className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl cursor-pointer"
        />
      </a>

      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Call Button on Far Left */}
          <a href={`tel:+27688359960`} className="flex items-center gap-2 text-primary hover:text-accent transition font-semibold text-sm">
            <Phone size={18} />
            <span className="hidden sm:inline">Call</span>
          </a>
          
          {/* Logo and Text - Centered Left */}
          <div className="flex items-center gap-3 ml-4">
            <img src="/images/somkhanda-logo.png" alt="Somkhanda Farm" className="h-14 w-auto" />
            <div className="flex flex-col">
              <h1 className="text-lg font-black text-black leading-tight font-sans">SOMKHANDA</h1>
              <h2 className="text-sm font-bold text-red-600 leading-tight font-sans">FREE RANGE FARM</h2>
            </div>
          </div>
          
          {/* Navigation Links - Right Side */}
          <div className="flex items-center gap-6 ml-auto">
            <a href="#products" className="text-foreground hover:text-primary transition text-sm hidden sm:inline">Products</a>
            <a href="#quotation" className="text-foreground hover:text-primary transition text-sm hidden sm:inline">Quotation</a>
            <a href="#contact" className="text-foreground hover:text-primary transition text-sm hidden sm:inline">Contact</a>
            <button className="relative">
              <ShoppingCart className="text-primary" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Image */}
            <div className="order-2 md:order-1">
              <img
                src="/images/hero-meat.jpg"
                alt="Premium meat selection"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Hero Text */}
            <div className="order-1 md:order-2 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <div className="text-black font-serif mb-2">Farmerz Market</div>
                <div className="text-red-600 font-black text-6xl md:text-7xl mb-2 tracking-wide">MEAT SUPPLIES</div>
                <div className="text-black italic text-5xl md:text-6xl">& Shisanyama</div>
              </h1>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                We specialize in free-range indigenous chickens, cattle, and goat meat, raised naturally without unnecessary antibiotics. Experience the finest quality, healthy and scrumptious meat that brings authentic South African flavors to your table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#products">
                  <button className="btn-primary w-full sm:w-auto">View Products</button>
                </a>
                <a href="#quotation">
                  <button className="btn-secondary w-full sm:w-auto">Get Quotation</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Somkhanda Free Range Farm
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Located in Cullinan, east of Pretoria, the farm was established in 2010. It is a family-owned business dedicated to ethical, sustainable farming and high-quality meat production.
            </p>
          </div>

          {/* Butchery Section */}
          <div className="max-w-3xl mx-auto text-center mb-12 mt-16 pt-12 border-t border-border">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Butchery
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              We are in Arcadia where we sell and serve high-quality meat products. At our on-site shisanyama, we serve non-basted, fresh, and juicy meat seasoned only with dry spices for an authentic, mouthwatering braai. Enjoy the true taste of South African heritage with fast, reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-4">14+</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Years of Excellence</h3>
              <p className="text-muted-foreground">Trusted by families and businesses across Gauteng</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-4">100%</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Ethical Farming</h3>
              <p className="text-muted-foreground">Natural, sustainable practices without unnecessary antibiotics</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-4">Local</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Community Focus</h3>
              <p className="text-muted-foreground">Supporting local farmers and building lasting relationships</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-foreground">Honest practices and transparent sourcing in everything we do</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-primary mb-3">Community</h3>
              <p className="text-foreground">Supporting local farmers and building lasting relationships</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-foreground">Natural, high-quality flavors from our family to yours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Packages Section */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Premium Combo Packages</h2>
            <p className="text-lg text-muted-foreground">Curated bundles for every occasion</p>
          </div>

          {/* Combos With Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {combosWithPhotos.map((combo) => (
              <Card key={combo.id} className={`overflow-hidden hover:shadow-xl transition-shadow ${combo.popular ? "ring-2 ring-accent" : ""}`}>
                {combo.popular && (
                  <div className="bg-accent text-accent-foreground py-2 text-center font-semibold text-sm">
                    POPULAR
                  </div>
                )}
                <img src={combo.image} alt={combo.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{combo.name}</h3>
                  <p className="text-3xl font-bold text-accent mb-6">{combo.price}</p>
                  <ul className="space-y-2 mb-6">
                    {combo.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary w-full"
                  >
                    Order Now
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Combos Without Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {combosWithoutPhotos.map((combo) => (
              <Card key={combo.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{combo.name}</h3>
                  <p className="text-3xl font-bold text-accent mb-6">{combo.price}</p>
                  <ul className="space-y-2 mb-6">
                    {combo.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary w-full"
                  >
                    Order Now
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Products Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Individual Products</h2>
            <p className="text-lg text-muted-foreground">Premium cuts and selections</p>
          </div>

          {/* Products With Photos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {productsWithPhotos.map((product) => {
              const isHardBodyChicken = product.name === "Hard Body Chicken";
              return (
              <Card key={product.id} className={`overflow-hidden hover:shadow-xl transition-shadow ${isHardBodyChicken ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={product.image} alt={product.name} className={`w-full ${isHardBodyChicken ? "h-96" : "h-64"} object-cover`} />
                <div className="p-4 text-center">
                  <h3 className={`${isHardBodyChicken ? "text-2xl" : "text-lg"} font-bold text-primary mb-2`}>{product.name}</h3>
                  <p className={`${isHardBodyChicken ? "text-3xl" : "text-2xl"} font-bold text-accent mb-4`}>{product.price}</p>
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </Card>
            );
            })}
          </div>

          {/* Products Without Photos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {productsWithoutPhotos.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-4">{product.price}</p>
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Section */}
      <section id="quotation" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-divider mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Request a Quotation</h2>
              <p className="text-lg text-muted-foreground">For bulk orders, events, or custom packages</p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Your Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone</label>
                  <input type="tel" placeholder="+27 68 835 9960" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Event Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Meat Type</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Select meat type</option>
                    <option>Beef</option>
                    <option>Chicken</option>
                    <option>Goat</option>
                    <option>Pork</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Quantity (kg)</label>
                  <input type="number" placeholder="e.g., 50" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Special Requirements</label>
                  <textarea placeholder="Tell us about your event, special requirements, or preferences..." className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" rows={4}></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Request Quotation
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-foreground mb-4">Prefer to chat? Connect with us on WhatsApp:</p>
                <button
                  onClick={handleWhatsAppCatalog}
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Request Catalog on WhatsApp
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Phone size={24} />
                  Phone / WhatsApp
                </h3>
                <a href={`tel:${whatsappNumber}`} className="text-lg hover:text-accent transition">
                  {whatsappNumber}
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Mail size={24} />
                  Email
                </h3>
                <a href="mailto:info@somkhandas.co.za" className="text-lg hover:text-accent transition">
                  info@somkhandas.co.za
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <MapPin size={24} />
                  Location
                </h3>
                <p className="text-lg">
                  Shop 7, Eting Building<br />
                  745 Stanza Bopape (Church) St<br />
                  Arcadia, Pretoria
                </p>
              </div>
            </div>

            {/* Payment & Delivery Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Payment & Delivery</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">EFT Payment</h4>
                  <div className="space-y-2 text-base">
                    <p><strong>Bidvest Bank</strong></p>
                    <p><strong>Account Name:</strong> Somkhanda Farm</p>
                    <p><strong>Account Number:</strong> 34941858401</p>
                    <p><strong>Branch Code:</strong> 462005</p>
                    <p><strong>Reference:</strong> Name and Surname</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Payment at Store</h4>
                  <p className="text-base">Pay when collecting your meat at our store in Arcadia.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Delivery Service</h4>
                  <p className="text-base mb-2">We deliver meat all over Gauteng.</p>
                  <p className="text-base"><strong>Free Delivery:</strong> Orders over R3000</p>
                  <p className="text-base"><strong>Other Deliveries:</strong> Small delivery fee may apply</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
