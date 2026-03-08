import { useState } from "react";
import { properties as initialProperties, type Property, type PropertyType } from "@/data/properties";
import { Pencil, Trash2, Plus, X } from "lucide-react";
import { toast } from "sonner";

const types: PropertyType[] = ["Single Room", "Chamber & Hall", "One Bedroom", "Two Bedroom"];

const emptyProperty: Omit<Property, "id"> = {
  title: "",
  type: "Single Room",
  location: "",
  price: 0,
  description: "",
  images: [],
  amenities: [],
  featured: false,
};

export default function Admin() {
  const [propertyList, setPropertyList] = useState<Property[]>([...initialProperties]);
  const [editing, setEditing] = useState<Property | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => {
    setEditing({ ...emptyProperty, id: Date.now().toString() });
    setIsNew(true);
  };

  const openEdit = (p: Property) => {
    setEditing({ ...p });
    setIsNew(false);
  };

  const save = () => {
    if (!editing) return;
    if (!editing.title || !editing.location || !editing.price) {
      toast.error("Please fill in title, location, and price.");
      return;
    }
    if (isNew) {
      setPropertyList(prev => [...prev, editing]);
      toast.success("Property added!");
    } else {
      setPropertyList(prev => prev.map(p => p.id === editing.id ? editing : p));
      toast.success("Property updated!");
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    setPropertyList(prev => prev.filter(p => p.id !== id));
    toast.success("Property deleted.");
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your property listings</p>
          </div>
          <button onClick={openNew} className="flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
            <Plus className="w-5 h-5" /> Add Property
          </button>
        </div>

        {/* Table */}
        <div className="bg-card border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Title</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground hidden md:table-cell">Type</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground hidden md:table-cell">Location</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Price</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {propertyList.map(p => (
                  <tr key={p.id} className="border-t hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-card-foreground">{p.title}</td>
                    <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{p.type}</td>
                    <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{p.location}</td>
                    <td className="px-6 py-4 font-semibold text-gold">GH₵{p.price}</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => openEdit(p)} className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"><Pencil className="w-4 h-4" /></button>
                      <button onClick={() => remove(p.id)} className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-destructive ml-1"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal */}
        {editing && (
          <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold text-card-foreground">{isNew ? "Add Property" : "Edit Property"}</h2>
                <button onClick={() => setEditing(null)} className="p-2 hover:bg-secondary rounded-lg transition-colors"><X className="w-5 h-5" /></button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Title</label>
                  <input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Type</label>
                  <select value={editing.type} onChange={e => setEditing({ ...editing, type: e.target.value as PropertyType })} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    {types.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Location</label>
                  <input value={editing.location} onChange={e => setEditing({ ...editing, location: e.target.value })} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Price (GH₵/month)</label>
                  <input type="number" value={editing.price} onChange={e => setEditing({ ...editing, price: Number(e.target.value) })} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Description</label>
                  <textarea rows={3} value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Amenities (comma separated)</label>
                  <input value={editing.amenities.join(", ")} onChange={e => setEditing({ ...editing, amenities: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Water, Electricity, Parking" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={editing.featured} onChange={e => setEditing({ ...editing, featured: e.target.checked })} id="featured" className="rounded" />
                  <label htmlFor="featured" className="text-sm text-foreground">Featured listing</label>
                </div>
                <button onClick={save} className="w-full py-4 rounded-xl gold-gradient text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity mt-4">
                  {isNew ? "Add Property" : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
