import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +233 24 000 0000</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@meshbeeestates.com</span>
          </div>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Accra, Ghana</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-display text-accent-foreground font-bold text-lg">ME</div>
            <span className="font-display text-xl font-bold text-navy">Meshbee<span className="text-gold"> Estates</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium transition-colors hover:text-gold ${location.pathname === link.path ? "text-gold" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admin" className="ml-2 px-4 py-2 rounded-lg bg-navy text-primary-foreground font-medium text-sm hover:bg-navy-light transition-colors">
              Admin
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t bg-background px-4 pb-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 font-medium border-b border-border last:border-0 ${location.pathname === link.path ? "text-gold" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admin" onClick={() => setMenuOpen(false)} className="block py-3 font-medium text-gold">
              Admin Dashboard
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Meshbee<span className="text-gold"> Estates</span></h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for affordable rental housing across Ghana. We help individuals and families find the perfect home.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} className="hover:text-gold transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +233 24 000 0000</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@meshbeeestates.com</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Accra, Greater Accra Region</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 text-center py-4 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} GhanaRentals. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
