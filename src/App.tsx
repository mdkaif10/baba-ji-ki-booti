import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Guitar as Hospital, Calendar, Pill, Building2, Ambulance, Apple, PlayCircle, Facebook, Twitter, Instagram, Mail, ChevronRight, Star, Shield, Clock, Users, Stethoscope, ChevronFirst as FirstAid, Microscope, Activity, UserPlus, GraduationCap, Award, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [joinFormData, setJoinFormData] = useState({
    name: '',
    email: '',
    specialty: '',
    experience: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('patients');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', feedback: '' });
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSubmitted(true);
    setJoinFormData({
      name: '',
      email: '',
      specialty: '',
      experience: '',
      phone: '',
      message: ''
    });
  };

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

  const benefits = [
    {
      icon: <UserPlus className="w-8 h-8 text-blue-600" />,
      title: "Growing Patient Base",
      description: "Access to a large and growing network of patients seeking quality healthcare."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Professional Development",
      description: "Regular training and development opportunities to enhance your skills."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Recognition & Growth",
      description: "Recognition programs and career advancement opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Yukkta</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Features</a>
              <a href="#services" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Services</a>
              <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
              <a href="#join" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Join Us</a>
              <a href="#feedback" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <button className={`px-6 py-2 rounded-full border-2 ${isScrolled ? 'border-blue-600 text-blue-600' : 'border-white text-white'} font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300`}>
                Sign In
              </button>
              <button className={`px-6 py-2 rounded-full ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} font-medium hover:shadow-lg transition-all duration-300`}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

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
      <div id="join" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a revolutionary healthcare platform and help shape the future of medical care delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join Yukkta?</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Healthcare?</h3>
                <p className="mb-6">Join thousands of healthcare professionals who are already part of our network.</p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((_, i) => (
                      <img
                        key={i}
                        src={`https://images.unsplash.com/photo-158${i}091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80`}
                        alt="Doctor"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span>Join 1000+ doctors</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              {joinSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-900 mb-2">Application Received!</h3>
                  <p className="text-green-700">Thank you for your interest in joining Yukkta. Our team will review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="join-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="join-name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={joinFormData.name}
                        onChange={(e) => setJoinFormData({...joinFormData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="join-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="join-email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={joinFormData.email}
                        onChange={(e) => setJoinFormData({...joinFormData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                      <input
                        type="text"
                        id="specialty"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={joinFormData.specialty}
                        onChange={(e) => setJoinFormData({...joinFormData, specialty: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                      <input
                        type="number"
                        id="experience"
                        required
                        min="0"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={joinFormData.experience}
                        onChange={(e) => setJoinFormData({...joinFormData, experience: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={joinFormData.phone}
                      onChange={(e) => setJoinFormData({...joinFormData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="join-message" className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join Yukkta?</label>
                    <textarea
                      id="join-message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={joinFormData.message}
                      onChange={(e) => setJoinFormData({...joinFormData, message: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

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
      <div id="feedback" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              We value your feedback and are always looking to improve our services.
            </p>
          </div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-green-900 mb-2">Thank You!</h3>
              <p className="text-green-700">Your feedback has been received. We appreciate your input!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="feedback"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue -500 focus:border-blue-500 transition-all duration-300"
                    value={formData.feedback}
                    onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

       {/* Footer */}
       <footer className="bg-gray-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
            <div className="md:col-span-4 space-y-8">
              <div className="flex items-center space-x-3">
                <Heart className="w-10 h-10 text-primary" />
                <span className="text-3xl font-bold text-white">Yukkta</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolutionizing healthcare through innovative technology and accessibility. Join us in our mission to make quality healthcare available to everyone, everywhere.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="footer-social-link" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="footer-social-link" aria-label="Twitter">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="footer-social-link" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="footer-social-link" aria-label="Email">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#careers" className="footer-link">Careers</a></li>
                <li><a href="#press" className="footer-link">Press Kit</a></li>
                <li><a href="#blog" className="footer-link">Blog</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="#help" className="footer-link">Help Center</a></li>
                <li><a href="#safety" className="footer-link">Safety Center</a></li>
                <li><a href="#community" className="footer-link">Community</a></li>
                <li><a href="#feedback" className="footer-link">Feedback</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                <li><a href="#terms" className="footer-link">Terms of Service</a></li>
                <li><a href="#cookie" className="footer-link">Cookie Policy</a></li>
                <li><a href="#licensing" className="footer-link">Licensing</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Download</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <Apple className="w-6 h-6 text-gray-900" />
                    <div className="ml-3">
                      <div className="text-xs text-gray-600">Download on the</div>
                      <div className="text-sm font-semibold text-gray-900">App Store</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <PlayCircle className="w-6 h-6 text-gray-900" />
                    <div className="ml-3">
                      <div className="text-xs text-gray-600">Get it on</div>
                      <div className="text-sm font-semibold text-gray-900">Google Play</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                <form className="max-w-md mx-auto flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer-newsletter-input"
                  />
                  <button type="submit" className="footer-newsletter-button">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="mb-4">&copy; {new Date().getFullYear()} Yukkta Healthcare Technologies. All rights reserved.</p>
                <p>Made with dedication for better healthcare 🌟</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;