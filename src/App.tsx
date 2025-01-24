import { useState, useEffect } from 'react';
import { Guitar as Hospital, Building2, Ambulance, Apple, PlayCircle, ChevronRight, Star, Shield, Clock, Users, Stethoscope, ChevronFirst as FirstAid, Microscope, Activity, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinUsForm from './components/forms/JoinUsForm';
import FeedbackForm from './components/forms/FeedbackForm';

function App() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Reveal animations on scroll
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const features = [
    {
      icon: <Hospital className="w-12 h-12 text-blue-600" />,
      title: "24/7 Doctor Consultations",
      description: "Access to qualified healthcare professionals anytime, anywhere. Direct video consultations and home visits available.",
      stats: "10,000+ Consultations"
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Smart Hostel Care",
      description: "Comprehensive healthcare plans for hostels with regular check-ups, emergency support, and health monitoring.",
      stats: "500+ Hostels"
    },
    {
      icon: <Ambulance className="w-12 h-12 text-blue-600" />,
      title: "Emergency Response",
      description: "Swift and reliable emergency services with real-time tracking and specialized medical transport.",
      stats: "15 Min Response Time"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50,000+", label: "Active Users" },
    { icon: <Hospital className="w-8 h-8" />, value: "1,000+", label: "Healthcare Partners" },
    { icon: <Star className="w-8 h-8" />, value: "4.9/5", label: "User Rating" },
    { icon: <Shield className="w-8 h-8" />, value: "100%", label: "Secure" }
  ];

  const services = [
    {
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Primary Care",
      description: "Comprehensive primary healthcare services with experienced physicians."
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FirstAid className="w-8 h-8" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams."
    },
    {
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Microscope className="w-8 h-8" />,
      title: "Diagnostic Services",
      description: "Advanced diagnostic facilities with quick result delivery."
    },
    {
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Activity className="w-8 h-8" />,
      title: "Specialized Care",
      description: "Expert specialists for comprehensive medical treatment."
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-400/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Healthcare Reimagined for the Digital Age
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Experience seamless healthcare delivery with cutting-edge technology and personalized care, right at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  <Apple className="w-6 h-6 mr-2" />
                  App Store
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all duration-300">
                  <PlayCircle className="w-6 h-6 mr-2" />
                  Play Store
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Healthcare Professional" 
                className="rounded-2xl shadow-2xl float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card scroll-reveal">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="service-content">
                  <div className="flex items-center space-x-3 mb-2">
                    {service.icon}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-200">{service.description}</p>
                  <button className="mt-4 inline-flex items-center text-white hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare that's designed around your needs, with innovative features that make accessing medical care simpler and more efficient.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card bg-white rounded-xl p-8 shadow-lg scroll-reveal">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-blue-600 font-medium">{feature.stats}</span>
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <JoinUsForm/>

      {/* About Section */}
      <div id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Medical Team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Revolutionizing Healthcare Access</h2>
              <p className="text-xl text-gray-600 mb-8">
                At Yukkta, we're bridging the gap between healthcare providers and students through innovative technology. Our platform ensures that quality healthcare is accessible, affordable, and efficient for everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">24/7 Availability</h3>
                    <p className="text-gray-600">Round-the-clock access to healthcare professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Secure Platform</h3>
                    <p className="text-gray-600">End-to-end encrypted consultations and data protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <FeedbackForm/>

      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;