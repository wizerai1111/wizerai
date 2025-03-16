import React, { useState, useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';
import {
  Bot,
  MessageSquare,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Globe2,
  BarChart3,
  X,
  Lock,
  Calendar,
  FileText,
  TrendingUp
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { supabase } from './lib/supabase';
import type { DemoRequest } from './types/supabase';
import { WizerLogo } from './components/WizerLogo';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ContactForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Remove any non-digit characters from phone number before submitting
    const cleanPhone = formData.phone.replace(/\D/g, '');

    try {
      const { error: submitError } = await supabase
        .from('demo_requests')
        .insert([{
          ...formData,
          phone: cleanPhone,
          status: 'pending'
        }]);

      if (submitError) throw submitError;

      onClose();
      alert('Thank you! We will contact you shortly to schedule your demo.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting your request');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleClickOutside}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close form"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-[#42526E] pr-8">Schedule a Demo</h2>
        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <InputMask
              mask="+1 (999) 999-9999"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (___) ___-____"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF5630] hover:bg-[#FF7452] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}

function BusinessDescription() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#42526E]">
          Revolutionize Your Business with AI-Powered Data Solutions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#42526E]">
                <Lock className="h-6 w-6 text-[#0052CC]" />
                Secure Vector Database
              </h3>
              <p className="text-gray-600 mb-4">
                At the heart of our AI solutions lies our cutting-edge secure vector database, designed to safeguard your company's most valuable asset - data. Our system employs state-of-the-art encryption and access controls to ensure your information remains protected.
              </p>
              <div className="mb-6">
                <img 
                  src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
                  alt="Supabase"
                  className="h-8 object-contain"
                />
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  Advanced encryption for data at rest and in transit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  Role-based access control (RBAC)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  TLS protocol implementation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  Compliance with GDPR, CCPA, and HIPAA
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#42526E]">
                <Bot className="h-6 w-6 text-[#0052CC]" />
                Intelligent Chatbots
              </h3>
              <p className="text-gray-600 mb-4">
                Elevate your customer interactions with our AI-powered chatbots, seamlessly integrated across your website, WhatsApp, Telegram, and email channels.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  24/7 customer support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  Reduced bounce rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  Valuable user data collection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                  Enhanced SEO performance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#42526E]">
              <Calendar className="h-6 w-6 text-[#0052CC]" />
              Streamlined Appointment Scheduling
            </h3>
            <p className="text-gray-600 mb-4">
              Empower your clients with effortless booking capabilities. Our AI scheduling system integrates with your existing calendar to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Offer real-time availability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Send automated reminders
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Allow easy rescheduling
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#42526E]">
              <FileText className="h-6 w-6 text-[#0052CC]" />
              Comprehensive Session Reports
            </h3>
            <p className="text-gray-600 mb-4">
              After each interaction, our AI generates detailed session summary reports, providing valuable insights into customer engagements.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Key takeaways and progress tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Action steps and follow-ups
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Continuous improvement insights
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#42526E]">
            <TrendingUp className="h-6 w-6 text-[#0052CC]" />
            Information Gathering and Analysis
          </h3>
          <p className="text-gray-600 mb-4">
            Harness the power of AI to collect and analyze data across your entire business ecosystem.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Identify customer behavior patterns
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                AI-driven keyword research
              </li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Generate strategic content ideas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00B8D9]" />
                Analyze competitor strategies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const slides = [
    {
      title: "Customer Service Automation",
      description: "24/7 automated support with human-like interactions",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      title: "Multi-Platform Integration",
      description: "Seamlessly deploy across all your communication channels",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights into customer interactions and behavior",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      title: "Custom Knowledge Base",
      description: "AI trained on your specific business needs",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1200&h=800&q=80"
    }
  ];

  const clientLogos = [
    {
      name: "TD Bank",
      url: "https://1000logos.net/wp-content/uploads/2018/06/TD-Bank-Logo.png"
    },
    {
      name: "BMO",
      url: "https://1000logos.net/wp-content/uploads/2020/04/BMO-Logo.png"
    },
    {
      name: "Telus",
      url: "https://1000logos.net/wp-content/uploads/2021/08/TELUS-Logo.png"
    },
    {
      name: "Mercer",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Mercer_Logo.png"
    },
    {
      name: "Sovereign Bank",
      url: "https://companieslogo.com/img/orig/SOVB-f6b9f910.png"
    },
    {
      name: "Sunlife",
      url: "https://1000logos.net/wp-content/uploads/2021/08/Sun-Life-Logo.png"
    },
    {
      name: "Manulife",
      url: "https://1000logos.net/wp-content/uploads/2021/08/Manulife-Logo.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#0052CC] to-[#00B8D9] text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <WizerLogo className="h-10" />
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#FF5630] hover:bg-[#FF7452] px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Schedule Demo
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Customer Service with AI-Powered Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Provide personalized customer experiences on every platform using AI solutions that can be fully customized to fit your business.
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#FF5630] hover:bg-[#FF7452] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-2 transition-colors"
            >
              <span>Schedule Your Demo Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Business Description */}
      <BusinessDescription />

      {/* Slideshow Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#42526E]">
            What We Do
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[500px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#42526E]">
            Why Choose Wizer AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Bot className="h-8 w-8 text-[#0052CC]" />,
                title: "Customizable AI Solutions",
                description: "Tailored solutions that reflect your brand's unique voice and knowledge base."
              },
              {
                icon: <Globe2 className="h-8 w-8 text-[#0052CC]" />,
                title: "Multi-Platform Integration",
                description: "Seamlessly deploy across websites, WhatsApp, Telegram, and more."
              },
              {
                icon: <Zap className="h-8 w-8 text-[#0052CC]" />,
                title: "Enhanced Efficiency",
                description: "Automate routine inquiries while maintaining personalized interactions."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#42526E]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#42526E]">
            Some of Our Past Clients
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We've had the privilege of working with a diverse range of businesses, helping them integrate advanced AI solutions to improve their customer interactions and operations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="w-full max-w-[200px] h-[80px] flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
                <img
                  src={client.url}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#42526E]">
              Transform Your Customer Experience
            </h2>
            <div className="space-y-8">
              {[
                "24/7 Customer Support Coverage",
                "Reduce Support Costs by up to 70%",
                "Instant Response to Customer Queries",
                "Seamless Integration with Existing Systems"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9] flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0052CC] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Join leading companies that have revolutionized their customer experience with Wizer AI.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-[#FF5630] hover:bg-[#FF7452] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-2 transition-colors"
          >
            <span>Schedule Your Demo Today</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#42526E] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <WizerLogo className="h-8" />
            <div className="text-sm">
              © 2024 Wizer AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;