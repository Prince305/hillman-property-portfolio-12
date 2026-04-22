
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Star, Award, Users, Building2, Hammer, Wrench, Tv, Archive, ChefHat, Ruler } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-luxury-navy via-luxury-navy-light to-luxury-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M30%2030c0-16.569%2013.431-30%2030-30v60c-16.569%200-30-13.431-30-30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in-up text-shadow letter-spacing-luxury">
              Mastering Construction.
              <span className="block text-luxury-gold">Perfecting Cabinetry.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
              Premium renovations and workshop-direct luxury furniture. Specializing in custom TV units, pedestals, and full kitchen transformations in Johannesburg since 2016.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay">
              <Button asChild className="btn-luxury-primary text-lg py-4 px-8">
                <Link to="/shop">
                  Browse Our Furniture
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-luxury-outline text-lg py-4 px-8 border-white text-white hover:bg-white hover:text-luxury-navy">
                <Link to="/contact">Start a Renovation</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full h-20 fill-white">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-navy rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-luxury-navy mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-navy rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-luxury-navy mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-navy rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-luxury-navy mb-2">8+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-luxury-platinum/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-navy mb-6 letter-spacing-luxury">
              Build & Furnish — Under One Roof
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From structural renovations to precision-crafted cabinetry, Hillman Property delivers a unified service — designed, built and installed by our own team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Group A — Bespoke Furniture */}
            <div className="rounded-3xl bg-white border-2 border-luxury-gold/30 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase">Group A</span>
                <span className="h-px flex-1 bg-luxury-gold/30"></span>
              </div>
              <h3 className="text-3xl font-bold text-luxury-navy mb-3">Bespoke Furniture</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Factory-direct, precision-crafted cabinetry with a luxury finish — built in our workshop and installed by our team.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-navy flex items-center justify-center flex-shrink-0">
                    <Tv className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-luxury-navy">Custom TV Units</h4>
                    <p className="text-sm text-gray-600">Wall-to-wall entertainment cabinetry, precision-engineered.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-navy flex items-center justify-center flex-shrink-0">
                    <Archive className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-luxury-navy">Pedestals & Built-ins</h4>
                    <p className="text-sm text-gray-600">Bedroom pedestals and storage units with luxury finishes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-navy flex items-center justify-center flex-shrink-0">
                    <ChefHat className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-luxury-navy">Full Kitchens</h4>
                    <p className="text-sm text-gray-600">Complete kitchen transformations, workshop-direct pricing.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="btn-luxury-primary mt-8 w-full">
                <Link to="/shop">Browse Our Furniture <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Group B — Construction */}
            <div className="rounded-3xl bg-luxury-navy text-white p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase">Group B</span>
                <span className="h-px flex-1 bg-luxury-gold/30"></span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Construction</h3>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Renovations, structural work and ongoing property maintenance — delivered with the same precision as our cabinetry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Renovations</h4>
                    <p className="text-sm text-gray-300">Premium home and commercial renovations across Johannesburg.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Property Maintenance</h4>
                    <p className="text-sm text-gray-300">Reliable upkeep for residential and commercial properties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Ruler className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Structural Work</h4>
                    <p className="text-sm text-gray-300">Extensions, alterations and bespoke structural builds.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8 w-full bg-luxury-gold text-luxury-navy hover:bg-luxury-gold/90 font-semibold">
                <Link to="/contact">Start a Renovation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-navy mb-6 letter-spacing-luxury">
                Our Construction Portfolio
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From luxury residential homes to commercial buildings, explore our completed projects that showcase our commitment to excellence and innovation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-luxury-navy rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg text-gray-700 group-hover:text-luxury-navy transition-colors duration-300">Luxury Residential Developments</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-luxury-navy rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg text-gray-700 group-hover:text-luxury-navy transition-colors duration-300">Commercial Buildings & Fit-Outs</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-luxury-navy rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg text-gray-700 group-hover:text-luxury-navy transition-colors duration-300">Premium Renovations & Extensions</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-luxury-navy rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg text-gray-700 group-hover:text-luxury-navy transition-colors duration-300">Luxury Rental Properties</span>
                </li>
              </ul>
              <Button asChild className="btn-luxury-primary text-lg py-4 px-8">
                <Link to="/portfolio">View Complete Portfolio</Link>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy to-luxury-navy-light rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
                  alt="Hillman Property Construction Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-luxury-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M30%2030c0-16.569%2013.431-30%2030-30v60c-16.569%200-30-13.431-30-30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 letter-spacing-luxury">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can bring your vision to life with our expertise and craftsmanship.
          </p>
          <Button asChild className="btn-luxury bg-white text-luxury-navy hover:bg-gray-100 text-lg py-4 px-8">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
