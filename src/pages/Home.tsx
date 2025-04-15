// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useScrollToTop from '../hooks/useScrollToTop';

const Home: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/adb8b2691beb5dded65a82002d379619.jpeg"
            alt="Office environment"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Harnessing AI for Human Connection, Not Replacement
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              At Wizer AI, we're building technology that amplifies our humanity rather than diminishes it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/vision-2030">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out font-medium cursor-pointer !rounded-button whitespace-nowrap">
                  Explore Our Vision
                </button>
              </Link>
              <Link to="/product-details">
                <button className="text-gray-700 px-6 py-3 rounded-md transition duration-300 ease-in-out font-medium cursor-pointer !rounded-button whitespace-nowrap">
                  View Our Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              To develop AI systems that enhance <span className="text-blue-600">human connection</span>, <span className="text-blue-600">wisdom</span>, and <span className="text-blue-600">compassion</span> rather than replacing or diminishing our essential humanity. We partner with <span className="text-red-600">visionaries</span> to transform <span className="text-red-600">humanity-centered ideas</span> into deployed solutions, supporting the journey from concept to real-world impact.
            </p>
          </div>
        </div>
      </section>
      {/* Problem & Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-lg text-gray-700 mb-6">
                Today's AI systems often prioritize efficiency and automation over human wellbeing, creating technology that replaces rather than enhances our uniquely human capabilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Diminished human connection in digital interactions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Loss of traditional wisdom and knowledge systems</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Technology that serves metrics over meaning</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/a5880b19ff7a6d660df80155434a9305.jpeg"
                alt="AI disconnecting humans"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="order-2 md:order-1">
              <img
                src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/d9c4d47d46a66888263b26dc087792c1.jpeg"
                alt="AI enhancing human connection"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-gray-700 mb-6">
                Wizer AI develops technology founded on three core principles that ensure our solutions enhance rather than replace human potential.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-heart text-indigo-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold text-gray-900">Compassionate Design</span>
                    <p className="text-gray-700">Creating systems that prioritize human wellbeing and connection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-brain text-indigo-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold text-gray-900">Collective Wisdom</span>
                    <p className="text-gray-700">Honoring diverse knowledge systems and cultural perspectives</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-link text-indigo-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold text-gray-900">Connected Purpose</span>
                    <p className="text-gray-700">Ensuring technology serves meaningful human goals</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Products</h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We've developed a suite of solutions that demonstrate our vision of technology that amplifies humanity.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* The Kindness App */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Visual%20representation%20of%20a%20food%20distribution%20app%20with%20route%20optimization%2C%20showing%20a%20map%20with%20optimized%20delivery%20routes%20connecting%20food%20banks%20to%20communities%20in%20need%2C%20with%20warm%20colors%20and%20a%20clean%20modern%20interface%20design%20on%20a%20simple%20background&width=400&height=200&seq=4&orientation=landscape"
                  alt="The Kindness App"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">The Kindness App</h3>
                <p className="text-gray-700 mb-4">
                  Optimizes charitable food distribution through AI-powered scheduling and routing, ensuring resources reach those who need them most efficiently.
                </p>
                <Link to="/product-details">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
            {/* Ask The Guru */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Knowledge%20platform%20interface%20showing%20connection%20between%20ancient%20wisdom%20and%20modern%20questions%2C%20with%20visual%20elements%20of%20traditional%20knowledge%20systems%20linked%20to%20contemporary%20inquiries%20through%20a%20digital%20interface%20with%20vector%20database%20visualization%2C%20on%20a%20simple%20background&width=400&height=200&seq=5&orientation=landscape"
                  alt="Wisdom Keepers"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Ask The Guru</h3>
                <p className="text-gray-700 mb-4">
                  A knowledge platform connecting ancient wisdom with modern questions using advanced vector database technology to preserve cultural heritage.
                </p>
                <Link to="/ask-the-guru">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
            {/* Essence */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Digital%20memory%20system%20interface%20showing%20personal%20storytelling%20and%20wisdom%20preservation%2C%20with%20visual%20elements%20of%20questionnaires%20and%20responsive%20memory%20systems%20capturing%20family%20stories%20and%20knowledge%20for%20future%20generations%2C%20on%20a%20simple%20background&width=400&height=200&seq=6&orientation=landscape"
                  alt="Essence"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Essence</h3>
                <p className="text-gray-700 mb-4">
                  Preserves personal stories and wisdom for future generations through thoughtful questionnaires and responsive memory systems.
                </p>
                <Link to="/essence">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about-us" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Wizer AI</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are a team of technologists, ethicists, and dreamers committed to developing AI that serves human potential. Our diverse backgrounds unite around a common vision: technology in service of humanity, never the other way around.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Unlike traditional tech companies that measure success by metrics and profits alone, we measure our impact by lives touched and communities strengthened.
              </p>
              <Link to="/vision-2030">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out font-medium mt-4 cursor-pointer !rounded-button whitespace-nowrap">
                  Our Vision
                </button>
              </Link>
            </div>
            <div>
              <img
                src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/7e73fdf52ff94fd7fa52b75b1b4a7386.jpeg"
                alt="Wizer AI Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <p className="text-lg text-center text-gray-700 mb-12">
              Have a question or want to collaborate? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData.entries());
              console.log('Form submitted:', data);
              // Reset form
              (e.target as HTMLFormElement).reset();
            }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                >
                  <option value="">Please select</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-800">privacy policy</a> and consent to being contacted about my inquiry.
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md transition duration-300 ease-in-out font-medium !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Share Your Vision With Us</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join us in creating technology that amplifies humanity's highest potential. We're always looking for partners who share our vision.
          </p>
          <a href="#contact-form" className="inline-block">
            <button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-3 rounded-md transition duration-300 ease-in-out font-medium text-lg cursor-pointer !rounded-button whitespace-nowrap">
              Contact Us
            </button>
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/053d7dcdb45e8c6d6f0bacab19090caa.png" alt="Wizer AI Logo" className="h-8" />
              </div>
              <p className="text-gray-400">
                Technology in service of humanity, never the other way around.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/product-details" className="text-gray-400 hover:text-white cursor-pointer">The Kindness App</Link></li>
                <li><Link to="/ask-the-guru" className="text-gray-400 hover:text-white cursor-pointer">Ask the Guru</Link></li>
                <li><Link to="/essence" className="text-gray-400 hover:text-white cursor-pointer">Essence</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="#about-us" className="text-gray-400 hover:text-white cursor-pointer">About Us</Link></li>
                <li><Link to="/vision-2030" className="text-gray-400 hover:text-white cursor-pointer">Our Vision</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://x.com/Wizer_AI_Sol" data-readdy="true" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/wizer-ai-20ab6035b/" data-readdy="true" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61575261149514" data-readdy="true" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-facebook"></i></a>
              </div>
              <p className="text-gray-400">
                Sign up for our newsletter to stay updated on our latest innovations.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Wizer AI. All rights reserved.</p>
            <p className="mt-2">Monday, April 14, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
