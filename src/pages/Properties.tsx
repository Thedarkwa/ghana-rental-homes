import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { properties, type PropertyType } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

const types: PropertyType[] = ["Single Room", "Chamber & Hall", "One Bedroom", "Two Bedroom"];

export default function Properties() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") as PropertyType | null;

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<PropertyType | "All">(initialType || "All");

  const filtered = useMemo(() => {
    return properties.filter(p => {
      const matchesType = filterType === "All" || p.type === filterType;
      const matchesSearch = search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [search, filterType]);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">Available Properties</h1>
        <p className="text-muted-foreground mb-8">Browse our selection of rental homes across Ghana</p>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by location or name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterType("All")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterType === "All" ? "bg-gold text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-gold-light"}`}
            >
              All
            </button>
            {types.map(t => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterType === t ? "bg-gold text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-gold-light"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No properties found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
