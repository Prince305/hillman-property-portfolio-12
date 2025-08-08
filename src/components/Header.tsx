
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Rentals", href: "/rentals" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-sm shadow-xl border-b border-gray-100/50' 
        : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group relative py-3">
              {/* Clean logo container with subtle depth */}
              <div className="relative p-4 lg:p-5 transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src="/lovable-uploads/448f349b-8d88-42ca-8ca1-42170191cdbc.png"
                  alt="Hillman Property"
                  className="h-12 md:h-14 lg:h-16 w-auto transition-all duration-300"
                  style={{ 
                    filter: 'drop-shadow(0 2px 8px rgba(13, 26, 59, 0.08)) drop-shadow(0 1px 3px rgba(13, 26, 59, 0.06))',
                  }}
                />
                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(13, 26, 59, 0.02) 0%, rgba(13, 26, 59, 0.04) 100%)',
                     }}></div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium font-montserrat transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-luxury-navy font-semibold"
                    : "text-luxury-navy/80 hover:text-luxury-navy"
                } group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-luxury-navy transform transition-all duration-300 ${
                  location.pathname === item.href 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild className="btn-luxury-primary font-montserrat font-medium">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-luxury-navy"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-gray-100/50 rounded-b-xl shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium font-montserrat transition-all duration-300 rounded-lg ${
                    location.pathname === item.href
                      ? "text-luxury-navy bg-luxury-navy/5 font-semibold"
                      : "text-luxury-navy/80 hover:text-luxury-navy hover:bg-gray-50/60"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full btn-luxury-primary font-montserrat font-medium">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
