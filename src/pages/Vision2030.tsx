// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Vision2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
              <img src="/@LogoMakr-0RjNJq.png" alt="Wizer AI Logo" className="h-8" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 items-center">
              <button onClick={() => {
                const element = document.getElementById('vision');
                element?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} className="text-gray-600 hover:text-gray-900 cursor-pointer">Our Vision</button>
              <button onClick={() => {
                const element = document.getElementById('mission');
                element?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} className="text-gray-600 hover:text-gray-900 cursor-pointer">Our Mission</button>
              <button onClick={() => {
                const element = document.getElementById('values');
                element?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} className="text-gray-600 hover:text-gray-900 cursor-pointer">Our Values</button>
            </nav>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out cursor-pointer !rounded-button whitespace-nowrap">
                Go Home
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('vision');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              >
                Our Vision
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('mission');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              >
                Our Mission
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('values');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              >
                Our Values
              </button>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="block">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out cursor-pointer !rounded-button">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="pt-24 relative overflow-hidden" style={{
          backgroundImage: `url('https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/eae7effbd894a0ce0fa250e843cace1f.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          minHeight: '600px'
        }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="w-full md:w-1/2 bg-white bg-opacity-90 p-10 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Vision 2030: Building Tomorrow's Human-AI Harmony
              </h1>
              <p className="text-xl mb-8">
                Our journey toward a future where technology amplifies human connection, preserves wisdom, and fosters compassion across generations.
              </p>
            </div>
          </div>
        </div>
        {/* Vision Statement */}
        <section id="vision" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <img
                  src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/4af7d2b2785ec2fa07ceeb0feb10821e.jpeg"
                  alt="Vision 2030 Concept"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <h2 className="text-3xl font-bold mb-6">Our Vision for 2030</h2>
                <p className="text-lg mb-6">
                  By 2030, we envision a world where AI has become a profound force for human flourishing—where technology serves as a bridge between people, cultures, and generations rather than a barrier.
                </p>
                <p className="text-lg mb-6">
                  We're working to recover what's been lost in our digital age: deep connection, intergenerational wisdom, and shared purpose. Our AI systems are designed to enhance rather than replace meaningful human interactions.
                </p>
                <blockquote className="border-l-4 border-teal-500 pl-4 italic text-xl text-gray-700 my-8">
                  "Technology in service of humanity, never the other way around. This is the foundation of everything we build."
                </blockquote>
                <p className="text-lg">
                  This vision drives every decision we make, every product we develop, and every partnership we form. We invite you to join us on this journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline Journey */}
        <section id="journey" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Our Journey to 2030</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-teal-200 transform -translate-y-1/2"></div>
              {/* Timeline items */}
              <div className="flex justify-between relative z-10">
                {/* 2025 */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2025</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md w-full">
                    <h3 className="text-xl font-bold mb-2">Foundation</h3>
                    <p className="text-gray-600">Establishing our core AI frameworks with human-centered design principles.</p>
                  </div>
                </div>
                {/* 2027 */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2027</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md w-full">
                    <h3 className="text-xl font-bold mb-2">Expansion</h3>
                    <p className="text-gray-600">Scaling our solutions globally while preserving cultural nuances and wisdom.</p>
                  </div>
                </div>
                {/* 2029 */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2029</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md w-full">
                    <h3 className="text-xl font-bold mb-2">Integration</h3>
                    <p className="text-gray-600">Seamless integration of our AI systems into daily life, enhancing human connection.</p>
                  </div>
                </div>
                {/* 2030 */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="w-12 h-12 rounded-full bg-teal-300 flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2030</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md w-full">
                    <h3 className="text-xl font-bold mb-2">Realization</h3>
                    <p className="text-gray-600">Achieving our vision of AI as a force for human flourishing across generations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Focus Areas */}
        <section id="focus" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Focus Areas</h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Three pillars that guide our development toward Vision 2030
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-teal-100 rounded-full">
                  <i className="fas fa-users text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Human Connection Enhancement</h3>
                <p className="text-gray-600 mb-6">
                  Creating AI systems that strengthen meaningful relationships between people, fostering deeper understanding and empathy.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Develop technologies that facilitate authentic communication</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Build systems that enhance rather than replace human interaction</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Create tools that bridge cultural and social divides</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-teal-100 rounded-full">
                  <i className="fas fa-book-open text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Intergenerational Knowledge Bridge</h3>
                <p className="text-gray-600 mb-6">
                  Preserving and transferring wisdom across generations, ensuring valuable human knowledge is not lost.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Capture and preserve cultural and personal wisdom</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Create platforms for meaningful exchange between generations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Develop AI that learns from human experience and wisdom</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-teal-100 rounded-full">
                  <i className="fas fa-balance-scale text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Ethical AI Development</h3>
                <p className="text-gray-600 mb-6">
                  Ensuring all our technology adheres to the highest ethical standards, prioritizing human wellbeing and dignity.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Establish rigorous ethical frameworks for all AI development</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Ensure transparency and accountability in our systems</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Prioritize privacy and data sovereignty in all our solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Case Studies */}
        <section id="cases" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Vision in Action</h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Real-world examples of how our approach is already making a difference
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=A%20warm%20community%20scene%20showing%20elderly%20people%20sharing%20stories%20and%20wisdom%20with%20younger%20generations.%20The%20setting%20shows%20subtle%20AI%20interfaces%20capturing%20and%20preserving%20these%20interactions.%20Natural%20lighting%20with%20soft%20earthy%20tones%20and%20organic%20elements.%20The%20image%20conveys%20intergenerational%20connection%20and%20knowledge%20preservation%20in%20a%20modern%20minimalist%20aesthetic&width=600&height=400&seq=13&orientation=landscape"
                    alt="Wisdom Preservation Project"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Wisdom Preservation Project</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-teal-600 mb-2">Challenge</h4>
                    <p className="text-gray-600">
                      A community facing the loss of cultural knowledge as elders passed away without their stories being preserved.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-teal-600 mb-2">Solution</h4>
                    <p className="text-gray-600">
                      Implementation of our Essence platform to capture, preserve, and share intergenerational wisdom through AI-assisted storytelling.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-teal-600 mb-2">Impact</h4>
                    <p className="text-gray-600">
                      Over 5,000 hours of cultural wisdom preserved, strengthened community bonds, and created meaningful connections between generations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=A%20compassionate%20scene%20showing%20people%20from%20diverse%20backgrounds%20connecting%20through%20technology%20to%20share%20resources.%20The%20image%20shows%20food%20and%20supplies%20being%20distributed%20with%20dignity%20through%20an%20AI-optimized%20system.%20Warm%20lighting%20with%20soft%20earthy%20tones%20and%20organic%20elements.%20The%20image%20conveys%20human%20connection%20and%20resource%20sharing%20in%20a%20modern%20minimalist%20aesthetic&width=600&height=400&seq=14&orientation=landscape"
                    alt="Community Resource Network"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Community Resource Network</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-teal-600 mb-2">Challenge</h4>
                    <p className="text-gray-600">
                      Disconnected communities with surplus resources in some areas and scarcity in others, with no efficient way to bridge the gap.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-teal-600 mb-2">Solution</h4>
                    <p className="text-gray-600">
                      Deployment of The Kindness App to optimize resource sharing through AI-powered matching of needs with available resources.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-teal-600 mb-2">Impact</h4>
                    <p className="text-gray-600">
                      Reduced food waste by 78%, connected 120+ community organizations, and fostered lasting relationships between previously isolated groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/3 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Join Us on the Journey to 2030</h2>
              <p className="text-xl mb-6">
                We're seeking partners who share our vision of technology that enhances human connection and preserves wisdom across generations.
              </p>
              <p className="mb-8">
                Whether you're a community organization, technology company, cultural institution, or individual with expertise to share, we invite you to be part of building this future together.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col space-y-4 md:pl-10">
              {/* Partnership Modal */}
              {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col">
                    <div className="p-8 overflow-y-auto">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Partner With Us</h2>
                        <p className="text-gray-600 mt-2">
                          Join us in shaping the future of human-centered AI technology
                        </p>
                      </div>

                      {/* Why Partner With Us Section */}
                      <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Partner With Us?</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                            <span className="text-gray-600">Access to cutting-edge AI technology focused on human connection</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                            <span className="text-gray-600">Collaborate on projects that make a real difference in people's lives</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                            <span className="text-gray-600">Join a network of forward-thinking organizations and individuals</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                            <span className="text-gray-600">Shape the future of ethical AI development and implementation</span>
                          </li>
                        </ul>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                          <select
                            id="partnershipType"
                            name="partnershipType"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          >
                            <option value="">Select partnership type</option>
                            <option value="technology">Technology Partnership</option>
                            <option value="research">Research Collaboration</option>
                            <option value="implementation">Implementation Partner</option>
                            <option value="community">Community Organization</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How would you like to partner with us?</label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us about your organization and how you envision partnering with us..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          ></textarea>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="privacy"
                            name="privacy"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            required
                          />
                          <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                            I agree to the privacy policy and terms of partnership
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
                          >
                            Submit Partnership Request
                          </button>
                        </div>
                      </form>
                    </div>
                    <button 
                      onClick={() => setShowForm(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      <i className="fas fa-times text-xl"></i>
                    </button>
                  </div>
                </div>
              )}
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-teal-700 px-8 py-3 !rounded-button cursor-pointer whitespace-nowrap transition-all duration-300 shadow-lg font-bold relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-teal-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                <span className="relative z-10 group-hover:text-teal-800">Partner With Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/the-kindness-app" className="hover:text-indigo-400">The Kindness App</Link></li>
                <li><Link to="/ask-the-guru" className="hover:text-indigo-400">Ask The Guru</Link></li>
                <li><Link to="/essence" className="hover:text-indigo-400">Essence</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/vision-2030" className="hover:text-indigo-400">Vision 2030</Link></li>
                <li><Link to="/#products" className="hover:text-indigo-400">Our Products</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://www.facebook.com/wizerai" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">Facebook</a></li>
                <li><a href="https://www.linkedin.com/company/wizer-ai" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">LinkedIn</a></li>
                <li><a href="https://twitter.com/wizer_ai" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">Twitter</a></li>
              </ul>
            </div>
            <div>
              <img src="/@LogoMakr-0RjNJq.png" alt="Wizer AI Logo" className="h-8 mb-4" />
              <p className="text-sm text-gray-400">Harnessing AI for Human Connection, Not Replacement</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Wizer AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Vision2030;
