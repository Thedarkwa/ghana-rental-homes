import { Home, List, Settings } from "lucide-react";
import { Link } from "react-router-dom";

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

export default function Services() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">Our Services</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">We offer comprehensive rental housing services to help tenants find homes and property owners manage their investments.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        <div className="navy-gradient rounded-2xl p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Need Our Help?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Whether you're looking for a home or want to list your property, we're here to assist you every step of the way.</p>
          <Link to="/contact" className="inline-block px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
