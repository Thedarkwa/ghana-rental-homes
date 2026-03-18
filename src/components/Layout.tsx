import { Link, useLocation, useNavigate } from "react-router-dom";
import meshLogo from "@/assets/meshlogo.png";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/", hash: "" },
  { label: "Properties", path: "/properties", hash: "" },
  { label: "Gallery", path: "/gallery", hash: "" },
  { label: "Services", path: "/", hash: "#services" },
  { label: "Contact", path: "/", hash: "#contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMenuOpen(false);
    if (link.hash) {
      if (location.pathname === "/") {
        // Already on home, just scroll
        document.querySelector(link.hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate home then scroll
        navigate("/");
        setTimeout(() => {
          document.querySelector(link.hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (link.path === "/properties") return location.pathname === "/properties";
    if (link.hash) return false;
    return location.pathname === "/" && !location.hash;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 0551797530 / 0542839287</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@meshbeeestates.com</span>
          </div>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> No. 88 Fertilizer Rd., Century, Accra, Ghana</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={meshLogo} alt="Meshbee Estates" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              link.hash ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`font-body font-medium transition-colors hover:text-gold text-foreground`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`font-body font-medium transition-colors hover:text-gold ${isActive(link) ? "text-gold" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              )
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
              link.hash ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left py-3 font-medium border-b border-border last:border-0 text-foreground"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 font-medium border-b border-border last:border-0 ${isActive(link) ? "text-gold" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              )
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
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={meshLogo} alt="Meshbee Estates" className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for affordable rental housing across Ghana. We help individuals and families find the perfect home.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              {navLinks.map(link => (
                link.hash ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="text-left hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.label} to={link.path} className="hover:text-gold transition-colors">{link.label}</Link>
                )
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Rental Housing</span>
              <span>Property Listing</span>
              <span>Property Management</span>
              <span>Tenant Screening</span>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0551797530 / 0542839287</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@meshbeeestates.com</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> No. 88 Fertilizer Rd., Century, Accra</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 text-center py-4 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Meshbee Estates. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
