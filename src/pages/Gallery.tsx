import { useState } from "react";
import { X } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import singleRoom from "@/assets/single-room.jpg";
import chamberHall from "@/assets/chamber-hall.jpg";
import oneBedroom from "@/assets/one-bedroom.jpg";
import twoBedroom from "@/assets/two-bedroom.jpg";

const categories = ["All", "Exteriors", "Interiors", "Apartments"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const images: GalleryImage[] = [
  { src: hero1, alt: "Modern apartments in Accra", category: "Exteriors" },
  { src: hero2, alt: "Contemporary living spaces", category: "Interiors" },
  { src: hero3, alt: "Residential estate in Ghana", category: "Exteriors" },
  { src: hero4, alt: "Luxury villa at twilight", category: "Exteriors" },
  { src: hero5, alt: "Premium bedroom with city view", category: "Interiors" },
  { src: hero6, alt: "Luxury apartment complex with pool", category: "Exteriors" },
  { src: hero7, alt: "Modern townhouse estate", category: "Exteriors" },
  { src: hero8, alt: "Spacious contemporary living room", category: "Interiors" },
  { src: singleRoom, alt: "Cozy single room apartment", category: "Apartments" },
  { src: chamberHall, alt: "Chamber and hall self-contained", category: "Apartments" },
  { src: oneBedroom, alt: "One bedroom apartment", category: "Apartments" },
  { src: twoBedroom, alt: "Two bedroom apartment", category: "Apartments" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-light text-gold text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Property Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of premium properties and living spaces across Ghana.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "gold-gradient text-accent-foreground shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <div
              key={img.alt}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent-foreground font-medium text-sm">{img.alt}</p>
                  <span className="text-accent-foreground/70 text-xs">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
