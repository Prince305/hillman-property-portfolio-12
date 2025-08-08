
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Luxury Residential Construction",
      description: "Custom homes that reflect your unique style and exceed your expectations.",
      features: [
        "Custom architectural design",
        "Premium materials and finishes",
        "Smart home integration",
        "Energy-efficient systems",
        "Landscaping and outdoor spaces"
      ]
    },
    {
      title: "Residential Renovations & Extensions",
      description: "Transform your existing space with our expert renovation services.",
      features: [
        "Kitchen and bathroom renovations",
        "Room additions and extensions",
        "Structural modifications",
        "Interior design consultation",
        "Heritage property restoration"
      ]
    },
    {
      title: "Commercial Buildings",
      description: "Professional commercial construction for businesses of all sizes.",
      features: [
        "Office buildings",
        "Retail spaces",
        "Warehouses and industrial facilities",
        "Mixed-use developments",
        "Sustainable building practices"
      ]
    },
    {
      title: "Commercial Renovations & Fit-Outs",
      description: "Complete office and retail space transformations.",
      features: [
        "Office fit-outs and redesigns",
        "Retail store renovations",
        "Restaurant and hospitality spaces",
        "Medical and healthcare facilities",
        "Tenant improvements"
      ]
    },
    {
      title: "Turnkey Design & Build Services",
      description: "Complete project management from concept to completion.",
      features: [
        "Architectural design services",
        "Planning and permit assistance",
        "Project management",
        "Quality control and inspections",
        "Post-construction support"
      ]
    },
    {
      title: "Project Management Excellence",
      description: "Professional oversight ensuring projects are delivered on time and within budget.",
      features: [
        "Detailed project planning",
        "Timeline and budget management",
        "Quality assurance",
        "Regular progress reporting",
        "Risk management"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Construction Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive construction solutions delivering exceptional craftsmanship, quality, and premium finishes for residential and commercial projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is delivered to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We start with understanding your vision, requirements, and budget."
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Our team creates detailed plans and handles all necessary permits."
              },
              {
                step: "03",
                title: "Construction",
                description: "Expert craftsmen bring your project to life with quality materials."
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspections and handover of your completed project."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Hillman Property?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Premium Quality Materials</h4>
                    <p className="text-gray-600">We source only the finest materials to ensure lasting quality and beauty.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Experienced Craftsmen</h4>
                    <p className="text-gray-600">Our skilled team brings years of expertise to every project.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Timely Delivery</h4>
                    <p className="text-gray-600">We pride ourselves on completing projects on time and within budget.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Comprehensive Warranty</h4>
                    <p className="text-gray-600">All our work is backed by comprehensive warranties for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 lg:h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Construction Quality Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can bring your vision to life with our expert construction services.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
