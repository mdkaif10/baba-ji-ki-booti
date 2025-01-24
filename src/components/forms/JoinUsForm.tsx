import React, { useState } from 'react';
import { UserPlus, GraduationCap, Award, CheckCircle } from 'lucide-react';

const JoinUsForm = () => {
  const [joinFormData, setJoinFormData] = useState({
    name: '',
    email: '',
    specialty: '',
    experience: '',
    phone: '',
    message: ''
  });
  const [joinSubmitted, setJoinSubmitted] = useState(false);

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
                  <span>Join other talented doctors</span>
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
  )};

export default JoinUsForm;