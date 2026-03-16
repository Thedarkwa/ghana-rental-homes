import { Link } from "react-router-dom";
import { ArrowRight, Home, Building, Building2, Castle, List, Settings, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

const categories = [
  { label: "Single Room", icon: Home, desc: "Affordable rooms for individuals" },
  { label: "Chamber & Hall", icon: Building, desc: "Spacious self-contained units" },
  { label: "One Bedroom", icon: Building2, desc: "Perfect for couples" },
  { label: "Two Bedroom", icon: Castle, desc: "Ideal for families" },
];

const services = [
  {
    icon: Home,
    title: "Rental Housing",
    desc: "We provide a wide range of affordable rental homes across Ghana — from single rooms to multi-bedroom apartments. Our listings are verified and ready for immediate move-in.",
  },
  {
    icon: List,
    title: "Property Listing",
    desc: "Own a property? List it with us and reach thousands of potential tenants. We handle marketing, inquiries, and tenant screening so you don't have to.",
  },
  {
    icon: Settings,
    title: "Property Management",
    desc: "Let us manage your rental properties professionally. We handle maintenance, rent collection, and tenant relations — giving you peace of mind.",
  },
];

export default function Index() {
  const featured = properties.filter(p => p.featured);

  return (
    <div>
      {/* Hero */}
      <section id="home" className="relative h-[85vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Ghana residential estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Affordable Rental Homes in <span className="text-gold">Ghana</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-body leading-relaxed">
              Find your perfect home from our wide selection of quality rental properties across Ghana. Simple, trusted, and affordable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/properties" className="px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                View Available Houses <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#contact" className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Rental Categories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Choose from our range of affordable rental options tailored to your needs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link
                key={cat.label}
                to={`/properties?type=${encodeURIComponent(cat.label)}`}
                className="bg-card p-8 rounded-xl text-center hover:shadow-lg transition-all group border"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-light flex items-center justify-center group-hover:bg-gold transition-colors">
                  <cat.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-card-foreground">{cat.label}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Featured Listings</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Handpicked rental properties available right now</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/properties" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
              View All Properties <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Our Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">We offer comprehensive rental housing services to help tenants find homes and property owners manage their investments.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.title} className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-card-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Contact Us</h2>
          <p className="text-center text-muted-foreground mb-12">We'd love to hear from you. Reach out through any of the channels below.</p>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-card border rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-card-foreground">Phone</h3>
                  <p className="text-muted-foreground">0551797530 / 0542839287</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-card-foreground">Email</h3>
                  <p className="text-muted-foreground">info@meshbeeestates.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-card-foreground">Office</h3>
                  <p className="text-muted-foreground">No. 88 Fertilizer Rd., Century, Accra, Ghana</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/233542839287"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-green-500 text-accent-foreground font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </a>

            <div className="rounded-2xl overflow-hidden border h-64">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9977459547!2d-0.18605368523672!3d5.5600091960173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sOsu%2C%20Accra!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Find Your New Home?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Get in touch today and let us help you find the perfect rental property in Ghana.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/233542839287" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-green-500 text-accent-foreground font-semibold hover:bg-green-600 transition-colors">
              Chat on WhatsApp
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
