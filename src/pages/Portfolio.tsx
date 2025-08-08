
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const constructionProjects = [
    {
      title: "Sandton Executive Residence",
      location: "Sandton, Johannesburg",
      type: "Luxury Residential",
      description: "A stunning 4-bedroom contemporary home featuring premium finishes, smart home technology, and sustainable design elements.",
      features: ["4 Bedrooms", "3 Bathrooms", "Swimming Pool", "Smart Home System"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
    },
    {
      title: "Rosebank Corporate Centre",
      location: "Rosebank, Johannesburg",
      type: "Commercial Building",
      description: "Modern office complex with energy-efficient systems, premium lobby areas, and flexible workspace solutions.",
      features: ["5 Floors", "Premium Lobby", "Energy Efficient", "Flexible Offices"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop"
    },
    {
      title: "Sunninghill Villa Extension",
      location: "Sunninghill, Sandton",
      type: "Residential Extension",
      description: "Comprehensive home extension and renovation featuring luxury kitchen, master suite, and outdoor entertainment area.",
      features: ["New Master Suite", "Luxury Kitchen", "Outdoor Entertainment", "Premium Finishes"],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
    },
    {
      title: "Hyde Park Retail Fitout",
      location: "Hyde Park, Johannesburg",
      type: "Commercial Renovation",
      description: "Complete retail space transformation with modern design elements and premium customer experience areas.",
      features: ["Modern Design", "Customer Experience", "Efficient Layout", "Premium Materials"],
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop"
    }
  ];

  const rentalProperties = [
    {
      title: "The Hillman Penthouse",
      location: "Sandton City, Johannesburg",
      type: "Luxury Apartment",
      bedrooms: 3,
      bathrooms: 2,
      features: ["City Views", "Premium Finishes", "24/7 Security", "Gym & Pool"],
      description: "Stunning penthouse with panoramic city views and luxury appointments throughout.",
      status: "Available",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop"
    },
    {
      title: "Rosebank Executive Suite",
      location: "Rosebank, Johannesburg",
      type: "Executive Apartment",
      bedrooms: 2,
      bathrooms: 2,
      features: ["Modern Design", "Balcony", "Secure Parking", "Close to Transport"],
      description: "Contemporary executive apartment in the heart of Rosebank's business district.",
      status: "Leased",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop"
    },
    {
      title: "Sunninghill Family Home",
      location: "Sunninghill, Sandton",
      type: "Luxury House",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Garden", "Swimming Pool", "Double Garage", "Security System"],
      description: "Beautifully designed family home with spacious living areas and premium outdoor spaces.",
      status: "Available",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects & Properties</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our portfolio of exceptional construction projects and luxury rental properties across Johannesburg's most prestigious locations.
          </p>
        </div>
      </section>

      {/* Construction Projects Portfolio */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Construction Projects Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our commitment to excellence through completed residential and commercial construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constructionProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Rental Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Luxury Rental Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our exclusive rental properties — thoughtfully designed, impeccably finished, and available in Johannesburg's most desirable locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      property.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {property.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex space-x-4 mb-3 text-sm text-gray-600">
                    <span>{property.bedrooms} Bed</span>
                    <span>{property.bathrooms} Bath</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {property.description}
                  </p>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {property.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-900 hover:bg-blue-800"
                      disabled={property.status === 'Leased'}
                    >
                      View on Property24
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      disabled={property.status === 'Leased'}
                    >
                      Private Property
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you need construction services or are interested in our luxury rentals, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/contact">
                Start Your Construction Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/contact">Inquire About Rentals</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
