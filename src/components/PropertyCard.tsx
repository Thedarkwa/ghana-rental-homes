import { Link } from "react-router-dom";
import { MapPin, MessageCircle } from "lucide-react";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in: ${property.title} at ${property.location} (GH₵${property.price}/month)`);

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border group">
      <div className="relative overflow-hidden h-52">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-gold text-accent-foreground">
          {property.type}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-1 text-card-foreground">{property.title}</h3>
        <p className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="w-3.5 h-3.5" /> {property.location}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{property.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-xl text-gold">GH₵{property.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
          <div className="flex gap-2">
            <a
              href={`https://wa.me/233240000000?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-green-500 text-accent-foreground hover:bg-green-600 transition-colors"
              title="WhatsApp Inquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <Link
              to={`/properties/${property.id}`}
              className="px-4 py-2 rounded-lg bg-navy text-primary-foreground text-sm font-medium hover:bg-navy-light transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
