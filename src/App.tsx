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
  TrendingUp,
  Heart,
  BookOpen
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
  const phoneInputRef = useRef<any>(null);
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
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: cleanPhone,
          message: formData.message || null,
          status: 'pending',
          created_at: new Date().toISOString()
        }]);

      if (submitError) {
        console.error('Supabase error:', submitError);
        throw submitError;
      }

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
      console.error('Form submission error:', err);
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#42526E]">
          Revolutionize Your Business with AI-Powered Data Solutions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
                <Lock className="h-7 w-7 text-[#0052CC]" />
                Secure Vector Database
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At the heart of our AI solutions lies our cutting-edge secure vector database, designed to safeguard your company's most valuable asset - data. Our system employs state-of-the-art encryption and access controls to ensure your information remains protected.
              </p>
              <div className="mb-8">
                <img 
                  src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
                  alt="Supabase"
                  className="h-10 object-contain"
                />
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Advanced encryption for data at rest and in transit
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Role-based access control (RBAC)
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  TLS protocol implementation
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Compliance with GDPR, CCPA, and HIPAA
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
                <Bot className="h-7 w-7 text-[#0052CC]" />
                Intelligent Chatbots
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Elevate your customer interactions with our AI-powered chatbots, seamlessly integrated across your website, WhatsApp, Telegram, and email channels.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  24/7 customer support
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Reduced bounce rates
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Valuable user data collection
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Enhanced SEO performance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
              <Calendar className="h-7 w-7 text-[#0052CC]" />
              Streamlined Appointment Scheduling
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Empower your clients with effortless booking capabilities. Our AI scheduling system integrates with your existing calendar to:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                Offer real-time availability
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                Send automated reminders
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                Allow easy rescheduling
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
              <FileText className="h-7 w-7 text-[#0052CC]" />
              Comprehensive Session Reports
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              After each interaction, our AI generates detailed session summary reports, providing valuable insights into customer engagements.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                Key takeaways and progress tracking
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                Action steps and follow-ups
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                Continuous improvement insights
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
      name: "BMO",
      url: "/images/clients/bmo.png"
    },
    {
      name: "Manulife",
      url: "/images/clients/Manulife.png"
    },
    {
      name: "Mercer",
      url: "/images/clients/Mercer.png"
    },
    {
      name: "Sovereign Bank",
      url: "/images/clients/sovereign.png"
    },
    {
      name: "Sunlife",
      url: "/images/clients/sunlife.png"
    },
    {
      name: "Telus",
      url: "/images/clients/Telus.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#0052CC] to-[#00B8D9] text-white">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <WizerLogo className="h-12" />
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-[#0052CC] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Schedule Demo
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Transform Your Customer Service with AI-Powered Solutions
            </h1>
            <p className="text-xl mb-12 text-gray-100 leading-relaxed">
              Provide personalized customer experiences on every platform using AI solutions that can be fully customized to fit your business.
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#FF5630] hover:bg-[#FF7452] px-10 py-5 rounded-full font-semibold text-xl inline-flex items-center space-x-3 transition-colors shadow-lg"
            >
              <span>Schedule Your Demo Today</span>
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Business Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#42526E]">
            Revolutionize Your Business with AI-Powered Data Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
                  <Lock className="h-7 w-7 text-[#0052CC]" />
                  Secure Vector Database
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  At the heart of our AI solutions lies our cutting-edge secure vector database, designed to safeguard your company's most valuable asset - data. Our system employs state-of-the-art encryption and access controls to ensure your information remains protected.
                </p>
                <div className="mb-8">
                  <img 
                    src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
                    alt="Supabase"
                    className="h-10 object-contain"
                  />
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    Advanced encryption for data at rest and in transit
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    Role-based access control (RBAC)
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    TLS protocol implementation
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    Compliance with GDPR, CCPA, and HIPAA
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
                  <Bot className="h-7 w-7 text-[#0052CC]" />
                  Intelligent Chatbots
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Elevate your customer interactions with our AI-powered chatbots, seamlessly integrated across your website, WhatsApp, Telegram, and email channels.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    Reduced bounce rates
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    Valuable user data collection
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                    Enhanced SEO performance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
                <Calendar className="h-7 w-7 text-[#0052CC]" />
                Streamlined Appointment Scheduling
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Empower your clients with effortless booking capabilities. Our AI scheduling system integrates with your existing calendar to:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Offer real-time availability
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Send automated reminders
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Allow easy rescheduling
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#42526E]">
                <FileText className="h-7 w-7 text-[#0052CC]" />
                Comprehensive Session Reports
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                After each interaction, our AI generates detailed session summary reports, providing valuable insights into customer engagements.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Key takeaways and progress tracking
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Action steps and follow-ups
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Continuous improvement insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="py-24 bg-gray-50">
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
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[600px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-12 text-white">
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-2xl">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#42526E]">
            Why Choose Wizer AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Bot className="h-10 w-10 text-[#0052CC]" />,
                title: "Customizable AI Solutions",
                description: "Tailored solutions that reflect your brand's unique voice and knowledge base."
              },
              {
                icon: <Globe2 className="h-10 w-10 text-[#0052CC]" />,
                title: "Multi-Platform Integration",
                description: "Seamlessly deploy across websites, WhatsApp, Telegram, and more."
              },
              {
                icon: <Zap className="h-10 w-10 text-[#0052CC]" />,
                title: "Enhanced Efficiency",
                description: "Automate routine inquiries while maintaining personalized interactions."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#42526E]">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#42526E]">
            Our Current Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-[#FF5630]" />
                <h3 className="text-3xl font-bold text-[#42526E]">ForeverLoved</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A groundbreaking AI platform that preserves the essence of loved ones through advanced cloning technology. Using our secure vector database, we create an interactive digital legacy that allows future generations to connect with their ancestors in meaningful ways.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  AI-powered voice and personality cloning
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Interactive timeline with photos and videos
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Natural conversation about life experiences
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Secure storage of personal memories and stories
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-[#FF5630]" />
                <h3 className="text-3xl font-bold text-[#42526E]">GuruAI</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                An unbiased AI chatbot that explores the rich tapestry of human wisdom across religions, philosophies, and ancient civilizations. By analyzing millions of data points, GuruAI provides comprehensive insights while maintaining neutrality.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Vast knowledge base of religious and philosophical texts
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Cross-cultural analysis of universal themes
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Non-judgmental information presentation
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-[#00B8D9]" />
                  Detailed conversation reports for further exploration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#42526E]">
            Some of Our Past Clients
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            We've had the privilege of working with a diverse range of businesses, helping them integrate advanced AI solutions to improve their customer interactions and operations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className={`w-full flex items-center justify-center ${
                  client.name === 'Sovereign Bank'
                    ? 'max-w-[400px] h-[160px]'
                    : ['BMO', 'Sunlife', 'Telus'].includes(client.name)
                      ? 'max-w-[300px] h-[120px]'
                      : 'max-w-[200px] h-[80px]'
                }`}
              >
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
      <section className="py-24">
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
                <div key={index} className="flex items-center space-x-6">
                  <CheckCircle2 className="h-8 w-8 text-[#00B8D9] flex-shrink-0" />
                  <span className="text-xl text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0052CC] text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl mb-12 text-gray-100 max-w-2xl mx-auto">
            Join leading companies that have revolutionized their customer experience with Wizer AI.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-[#FF5630] hover:bg-[#FF7452] px-12 py-6 rounded-full font-semibold text-xl inline-flex items-center space-x-3 transition-colors shadow-lg"
          >
            <span>Schedule Your Demo Today</span>
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#42526E] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <WizerLogo className="h-10" />
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