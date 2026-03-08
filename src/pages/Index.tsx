import { Link } from "react-router-dom";
import { ArrowRight, Home, Building, Building2, Castle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

const categories = [
  { label: "Single Room", icon: Home, desc: "Affordable rooms for individuals" },
  { label: "Chamber & Hall", icon: Building, desc: "Spacious self-contained units" },
  { label: "One Bedroom", icon: Building2, desc: "Perfect for couples" },
  { label: "Two Bedroom", icon: Castle, desc: "Ideal for families" },
];

export default function Index() {
  const featured = properties.filter(p => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center">
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
              <Link to="/contact" className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
                Contact Us
              </Link>
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

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Find Your New Home?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Get in touch today and let us help you find the perfect rental property in Ghana.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/233240000000" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-green-500 text-accent-foreground font-semibold hover:bg-green-600 transition-colors">
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
