import { Link } from "react-router-dom";
import {
  ArrowRight, Home, Building, Building2, Castle, List, Settings,
  Phone, Mail, MapPin, Shield, DollarSign, MapPinned,
  ThumbsUp, Star, ChevronLeft, ChevronRight
} from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-logo.png";
import { useState, useCallback, useEffect } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import HeroCarousel from "@/components/HeroCarousel";
import singleRoom from "@/assets/single-room.jpg";
import chamberHall from "@/assets/chamber-hall.jpg";
import oneBedroom from "@/assets/one-bedroom.jpg";
import twoBedroom from "@/assets/two-bedroom.jpg";

const categories = [
  { label: "Single Room", icon: Home, desc: "Affordable rooms for individuals", image: singleRoom },
  { label: "Chamber & Hall", icon: Building, desc: "Spacious self-contained units", image: chamberHall },
  { label: "One Bedroom", icon: Building2, desc: "Perfect for couples", image: oneBedroom },
  { label: "Two Bedroom", icon: Castle, desc: "Ideal for families", image: twoBedroom },
];

const whyChoose = [
  { icon: DollarSign, title: "Affordable Rental Homes", desc: "We offer some of the most competitively priced rental properties across Ghana, making quality housing accessible to everyone." },
  { icon: Shield, title: "Trusted Real Estate Service", desc: "With years of experience in the Ghanaian market, we've built a reputation for honesty, transparency, and reliability." },
  { icon: ThumbsUp, title: "Flexible Housing Options", desc: "From single rooms to two-bedroom apartments, we have options that suit every lifestyle, budget, and family size." },
  { icon: MapPinned, title: "Prime Locations", desc: "Our properties are situated in sought-after neighborhoods with easy access to transport, markets, schools, and hospitals." },
];

const testimonials = [
  { name: "Kwame Asante", text: "Meshbee Estates helped me find a beautiful chamber and hall in Kasoa at a price I could afford. The process was smooth and transparent!", rating: 5 },
  { name: "Ama Serwah", text: "I was looking for a single room near my workplace. Within two days, they found me the perfect place. Highly recommend their service!", rating: 5 },
  { name: "Yaw Mensah", text: "The team at Meshbee is professional and caring. They managed my property and found reliable tenants quickly. Great experience overall.", rating: 4 },
  { name: "Abena Osei", text: "Moving to Accra was stressful until I found Meshbee Estates. They made the house-hunting process effortless. Thank you!", rating: 5 },
];

const services = [
  { icon: Home, title: "Rental Housing", desc: "We provide a wide range of affordable rental homes across Ghana — from single rooms to multi-bedroom apartments." },
  { icon: List, title: "Property Listing", desc: "Own a property? List it with us and reach thousands of potential tenants. We handle marketing and tenant screening." },
  { icon: Settings, title: "Property Management", desc: "Let us manage your rental properties professionally — maintenance, rent collection, and tenant relations." },
];

export default function Index() {
  const featured = properties.filter(p => p.featured);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setTestimonialIndex(i => (i + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setTestimonialIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Rental Categories
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Choose from our range of affordable rental options tailored to your needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link
                key={cat.label}
                to={`/properties?type=${encodeURIComponent(cat.label)}`}
                className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group border"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <cat.icon className="w-12 h-12 text-accent-foreground drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display font-semibold text-lg mb-1 text-card-foreground">{cat.label}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                    View Listings <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Featured Listings
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Handpicked rental properties available right now
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy text-accent-foreground font-semibold hover:bg-navy-light transition-colors"
            >
              View All Properties <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Why Choose Meshbee Estates
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We go above and beyond to ensure you find the perfect home at the right price
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map(item => (
              <div
                key={item.title}
                className="bg-card border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold-light flex items-center justify-center group-hover:bg-gold transition-colors">
                  <item.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive rental housing services for tenants and property owners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(s => (
              <div
                key={s.title}
                className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
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

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Hear from satisfied tenants and property owners
          </p>
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-card border rounded-2xl p-8 md:p-12 text-center min-h-[280px] flex flex-col justify-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[testimonialIndex].rating
                        ? "text-gold fill-gold"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-lg text-card-foreground italic leading-relaxed mb-6">
                "{testimonials[testimonialIndex].text}"
              </p>
              <p className="font-display font-semibold text-gold">
                {testimonials[testimonialIndex].name}
              </p>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === testimonialIndex ? "w-8 bg-gold" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Looking for a New Home?
          </h2>
          <p className="text-accent-foreground/70 mb-8 max-w-lg mx-auto">
            Get in touch today and let us help you find the perfect rental property in Ghana.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/233542839287"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-accent-foreground font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Contact Meshbee Estates
            </a>
            <Link
              to="/properties"
              className="px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Contact Us
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            We'd love to hear from you. Reach out through any of the channels below.
          </p>

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
    </div>
  );
}
