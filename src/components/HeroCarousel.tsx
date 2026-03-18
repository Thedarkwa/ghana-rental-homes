import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";

const slides = [
  { image: hero1, alt: "Modern apartments in Accra" },
  { image: hero2, alt: "Contemporary living spaces" },
  { image: hero3, alt: "Residential estate in Ghana" },
  { image: hero4, alt: "Luxury villa at twilight" },
  { image: hero5, alt: "Premium bedroom with city view" },
  { image: hero6, alt: "Luxury apartment complex with pool" },
  { image: hero7, alt: "Modern townhouse estate" },
  { image: hero8, alt: "Spacious contemporary living room" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className={`w-full h-full object-cover ${i === current ? "animate-kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6 animate-fade-in-up">
              Trusted Real Estate in Ghana
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-accent-foreground leading-tight mb-6 animate-fade-in-up">
              Find Affordable Homes in <span className="text-gold">Ghana</span>
            </h1>
            <p className="text-accent-foreground/80 text-lg md:text-xl mb-10 font-body leading-relaxed animate-fade-in-up-delay">
              Browse single rooms, chamber and hall, 1-bedroom and 2-bedroom apartments with Meshbee Estates.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
              <Link
                to="/properties"
                className="px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Browse Properties
              </Link>
              <a
                href="https://wa.me/233542839287"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-accent-foreground/30 text-accent-foreground font-semibold text-lg hover:bg-accent-foreground/10 transition-colors"
              >
                Contact Agent
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20 flex items-center justify-center text-accent-foreground hover:bg-accent-foreground/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20 flex items-center justify-center text-accent-foreground hover:bg-accent-foreground/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-10 bg-gold" : "w-2.5 bg-accent-foreground/40 hover:bg-accent-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
