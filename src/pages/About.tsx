
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Hillman Property</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Since 2016, we've been transforming visions into reality through exceptional construction and luxury property development in Johannesburg.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2016 and headquartered in the heart of Sandton, Hillman Property has established itself as a premier construction and luxury property development company in Johannesburg.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple yet powerful vision: to create exceptional spaces that not only meet but exceed our clients' expectations. Today, we're proud to offer both world-class construction services and a curated portfolio of luxury rental properties.
              </p>
              <p className="text-lg text-gray-600">
                Located at 1 Maxwell Drive, Sunninghill, Sandton, we're perfectly positioned to serve the greater Johannesburg area with our comprehensive range of services.
              </p>
            </div>
            <div className="bg-gray-200 h-64 lg:h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              "Your Vision, Our Expertise" - This motto drives everything we do at Hillman Property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Luxury</h3>
                <p className="text-gray-600">
                  We believe in creating spaces that embody elegance, sophistication, and premium quality in every detail.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Precision</h3>
                <p className="text-gray-600">
                  Our meticulous attention to detail ensures every project meets the highest standards of craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmentally responsible construction practices and sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients to ensure their vision is realized through expert execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in two core areas that complement each other perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Construction Services
                </h3>
                <p className="text-gray-600 mb-6">
                  From luxury residential homes to commercial buildings, we deliver exceptional construction services with an emphasis on quality, craftsmanship, and client satisfaction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Luxury Residential Construction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Residential Renovations & Extensions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Commercial Buildings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Turnkey Design & Build</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Luxury Property Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Our portfolio of luxury rental properties represents the pinnacle of our construction expertise, offering premium living spaces in Johannesburg's most desirable locations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Thoughtfully Designed Spaces</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Impeccable Finishes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Prime Johannesburg Locations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span>Professional Property Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
