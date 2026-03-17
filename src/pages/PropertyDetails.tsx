import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Check } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-logo.png";
import { properties } from "@/data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Property Not Found</h1>
        <Link to="/properties" className="text-gold hover:underline">Back to Properties</Link>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in: ${property.title} at ${property.location} (GH₵${property.price}/month). Please share more details.`);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link to="/properties" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Images */}
          <div className="lg:col-span-2">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
            />
          </div>

          {/* Info */}
          <div className="bg-card border rounded-2xl p-8 h-fit">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold text-accent-foreground mb-4">
              {property.type}
            </span>
            <h1 className="font-display text-2xl font-bold mb-2 text-card-foreground">{property.title}</h1>
            <p className="flex items-center gap-1 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" /> {property.location}
            </p>
            <div className="mb-6">
              <span className="font-display text-4xl font-bold text-gold">GH₵{property.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <a
              href={`https://wa.me/233542839287?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-green-500 text-accent-foreground font-semibold text-lg hover:bg-green-600 transition-colors mb-4"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" /> Inquire on WhatsApp
            </a>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center py-4 rounded-xl bg-navy text-primary-foreground font-semibold hover:bg-navy-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Description & Amenities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground">Amenities</h2>
            <div className="grid grid-cols-2 gap-3">
              {property.amenities.map(a => (
                <div key={a} className="flex items-center gap-2 text-foreground">
                  <Check className="w-4 h-4 text-gold" /> {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
