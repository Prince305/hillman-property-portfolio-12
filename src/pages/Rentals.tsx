
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Star, ArrowRight, Construction, Mail } from "lucide-react";

const Rentals = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse - Sandton",
      location: "Sandton City, Johannesburg",
      type: "Penthouse",
      bedrooms: 3,
      bathrooms: 2,
      features: ["City Views", "Private Balcony", "Parking", "Security"],
      price: "R25,000",
      period: "per month",
      description: "Stunning penthouse with panoramic city views, premium finishes, and world-class amenities."
    },
    {
      id: 2,
      title: "Modern Apartment - Rosebank",
      location: "Rosebank, Johannesburg",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      features: ["Garden View", "Pool Access", "Gym", "Concierge"],
      price: "R18,500",
      period: "per month",
      description: "Contemporary apartment in the heart of Rosebank with access to premium building amenities."
    },
    {
      id: 3,
      title: "Executive Townhouse - Sunninghill",
      location: "Sunninghill, Sandton",
      type: "Townhouse",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Private Garden", "Double Garage", "Pet Friendly", "Fireplace"],
      price: "R32,000",
      period: "per month",
      description: "Spacious townhouse perfect for families, featuring a private garden and premium finishes throughout."
    },
    {
      id: 4,
      title: "Luxury Loft - Maboneng",
      location: "Maboneng, Johannesburg",
      type: "Loft",
      bedrooms: 1,
      bathrooms: 1,
      features: ["Exposed Brick", "High Ceilings", "Rooftop Access", "Modern Kitchen"],
      price: "R15,000",
      period: "per month",
      description: "Industrial-chic loft in Johannesburg's cultural hub with unique architectural features."
    },
    {
      id: 5,
      title: "Garden Apartment - Melrose",
      location: "Melrose, Johannesburg",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      features: ["Garden Access", "Parking", "24hr Security", "Pool"],
      price: "R22,000",
      period: "per month",
      description: "Elegant apartment with direct garden access in one of Johannesburg's most prestigious areas."
    },
    {
      id: 6,
      title: "Executive Suite - Bryanston",
      location: "Bryanston, Sandton",
      type: "Suite",
      bedrooms: 1,
      bathrooms: 1,
      features: ["Furnished", "Utilities Included", "Cleaning Service", "Business Center"],
      price: "R28,000",
      period: "per month",
      description: "Fully furnished executive suite perfect for business travelers and professionals."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Luxury Rental Properties</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our exclusive rental properties — thoughtfully designed, impeccably finished, and available now in Johannesburg's most desirable locations.
          </p>
        </div>
      </section>

      {/* Under Construction Notice */}
      <section className="py-16 bg-orange-50 border-l-4 border-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Construction className="h-8 w-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rental Listings Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're currently updating our rental property listings with the latest availability and pricing. 
              Get notified when new luxury properties become available.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-900 mr-2" />
                  <h3 className="text-xl font-semibold">Stay Updated</h3>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferences">Property Preferences</Label>
                    <Textarea 
                      id="preferences" 
                      placeholder="Tell us about your ideal property (location, size, budget, etc.)"
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    Notify Me When Available
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preview: Our Luxury Properties
            </h2>
            <p className="text-lg text-gray-600">
              Here's a glimpse of the premium properties in our portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden opacity-75">
                <div className="bg-gray-200 h-48 flex items-center justify-center relative">
                  <span className="text-gray-500">Property Image</span>
                  <Badge className="absolute top-2 right-2 bg-orange-500">
                    Coming Soon
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{property.type}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">Premium</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {property.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span className="mr-4">{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-900">{property.price}</span>
                      <span className="text-gray-600 text-sm ml-1">{property.period}</span>
                    </div>
                    <Button size="sm" disabled className="bg-gray-400 cursor-not-allowed">
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Rental Properties?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our rental properties represent the pinnacle of luxury living in Johannesburg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Finishes</h3>
              <p className="text-gray-600">
                Every property features high-end finishes and luxury amenities throughout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600">
                Strategically located in Johannesburg's most desirable neighborhoods.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Management</h3>
              <p className="text-gray-600">
                24/7 support and professional property management services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Our Luxury Rentals?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to arrange viewings or learn more about our upcoming properties.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Contact Us for Availability
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rentals;
