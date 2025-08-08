
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M30%2030c0-16.569%2013.431-30%2030-30v60c-16.569%200-30-13.431-30-30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/lovable-uploads/deefb2c4-9cef-4fee-999c-cacadbbf98d2.png"
              alt="Hillman Property"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Your Vision, Our Expertise. Crafting luxury properties and spaces in Johannesburg since 2016.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 group">
                <MapPin className="h-5 w-5 mr-3 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">1 Maxwell Drive, Sunninghill, Sandton, Johannesburg</span>
              </div>
              <div className="flex items-center text-gray-300 group">
                <Phone className="h-5 w-5 mr-3 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">074 993 9240</span>
              </div>
              <div className="flex items-center text-gray-300 group">
                <Mail className="h-5 w-5 mr-3 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">contact@hillmanproperty.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-luxury-gold">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Luxury Construction</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Renovations</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Commercial Projects</Link></li>
              <li><Link to="/rentals" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Luxury Rentals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-luxury-gold">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-luxury-gold transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-luxury-gold transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-luxury-gold transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Follow us for the latest updates on our luxury construction projects and property developments.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hillman Property. All rights reserved. | 
            <span className="text-luxury-gold font-medium"> Crafting Excellence Since 2016</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
