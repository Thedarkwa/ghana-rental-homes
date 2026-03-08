import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">Contact Us</h1>
        <p className="text-muted-foreground mb-12">We'd love to hear from you. Reach out through any of the channels below.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Kwame Mensah"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+233 24 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="kwame@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="I'm looking for a 2-bedroom apartment in Accra..."
              />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl gold-gradient text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-card border rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-card-foreground">Phone</h3>
                  <p className="text-muted-foreground">+233 24 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-card-foreground">Email</h3>
                  <p className="text-muted-foreground">info@ghanarentals.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-card-foreground">Office</h3>
                  <p className="text-muted-foreground">No. 15, Ring Road East, Osu, Accra</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/233240000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-500 text-accent-foreground font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </a>

            {/* Map */}
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
      </div>
    </div>
  );
}
