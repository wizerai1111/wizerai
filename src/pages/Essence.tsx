// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Essence: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      setStatusMessage('Please enter your email address');
      setSubscriptionStatus('error');
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatusMessage('Please enter a valid email address');
      setSubscriptionStatus('error');
      return;
    }

    setSubscriptionStatus('loading');

    try {
      const { error } = await supabase
        .from('subscriptions')
        .insert([
          { email, subscribedto: 'Essence' }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          setStatusMessage('This email is already subscribed!');
          setSubscriptionStatus('error');
        } else {
          setStatusMessage('Something went wrong. Please try again.');
          setSubscriptionStatus('error');
        }
        return;
      }

      setStatusMessage('Thank you for your interest in Essence! We\'ll keep you updated.');
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setStatusMessage('An unexpected error occurred. Please try again.');
      setSubscriptionStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <img src="/@LogoMakr-0RjNJq.png" alt="Wizer AI Logo" className="h-8" />
                <img src="/@LogoMakr-7l5QvC.png" alt="Essence Logo" className="h-8 ml-2" />
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
              <button onClick={() => {
                document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} className="text-gray-700 hover:text-indigo-600">Technology</button>
              <button onClick={() => {
                document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} className="text-gray-700 hover:text-indigo-600">Legacy</button>
              <button onClick={() => {
                document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} className="text-gray-700 hover:text-indigo-600">Privacy</button>
              <button onClick={() => {
                document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} className="text-gray-700 hover:text-indigo-600">Use Cases</button>
              <Link to="/">
                <button className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  Go Home
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 mt-4">
              <div className="container mx-auto px-4 py-4 space-y-4">
                <button 
                  onClick={() => {
                    document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }} 
                  className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
                >
                  Technology
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }} 
                  className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
                >
                  Legacy
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }} 
                  className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
                >
                  Privacy
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }} 
                  className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
                >
                  Use Cases
                </button>
                <Link to="/" className="block">
                  <button className="w-full bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                    Go Home
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20futuristic%20digital%20identity%20visualization%20with%20glowing%20blue%20and%20purple%20particles%20forming%20a%20human%20silhouette%20against%20a%20gradient%20background%2C%20showing%20the%20concept%20of%20preserving%20human%20essence%20through%20technology%2C%20sleek%20modern%20design%20with%20soft%20lighting%20and%20depth&width=1440&height=600&seq=1&orientation=landscape')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent z-10"></div>
          <div className="container mx-auto px-6 py-20 relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">Preserve Your Legacy Through AI</h1>
              <p className="text-xl mb-8">Essence captures what makes someone truly them — their voice, presence, perspective, and spirit — so they can be remembered, shared, and even spoken with long into the future.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/">
                  <button className="bg-white text-indigo-700 px-8 py-3 rounded-md shadow-lg hover:bg-gray-100 transition font-semibold !rounded-button cursor-pointer whitespace-nowrap">Go back home</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* What is Essence */}
        <section className="py-20 bg-white" id="technology">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What is Essence?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Essence uses cutting-edge AI to extract and preserve the core identity of a person.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Face Cloning */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-dna text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">🧬 Face Cloning</h3>
                <p className="text-gray-600">A lifelike visual representation that captures expressions, mannerisms, and the essence of how someone appears.</p>
              </div>
              {/* Voice Replication */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-microphone-alt text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">🗣️ Voice Replication</h3>
                <p className="text-gray-600">The unique tone, cadence, and warmth of how they speak, preserving the emotional quality of communication.</p>
              </div>
              {/* Conversation Style */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-comments text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">💬 Conversation Style</h3>
                <p className="text-gray-600">How they tell stories, explain things, or make you feel understood, capturing their unique communication patterns.</p>
              </div>
              {/* Vector Database */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-database text-2xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">🧾 Vector Database</h3>
                <p className="text-gray-600">A deep archive of their thoughts, ideas, memories, and experiences, stored securely for generations to come.</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">This allows anyone to converse with that person's Essence — whether today, or generations from now.</p>
            </div>
          </div>
        </section>
        {/* Legacy and Connection */}
        <section className="py-20 bg-gray-50" id="legacy">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=A%20warm%2C%20emotional%20scene%20showing%20multiple%20generations%20of%20a%20family%20gathered%20around%20a%20holographic%20display%20showing%20their%20ancestor%20speaking%20to%20them%2C%20with%20soft%20lighting%20and%20a%20cozy%20home%20environment%2C%20capturing%20the%20concept%20of%20legacy%20preservation%20across%20time&width=700&height=500&seq=2&orientation=landscape"
                    alt="Family connection through Essence"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">🕊️ Built for Legacy and Connection</h2>
                <p className="text-xl text-gray-600 mb-6">Essence is for people who want to be remembered not just by name, but in a way that feels alive.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span className="text-gray-700">Whether it's a grandparent passing down stories, a poet explaining their inspirations, or a leader sharing their vision — their Essence becomes a living presence that others can engage with.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span className="text-gray-700">Future generations can ask them questions — and if the answer exists in their knowledgebase, they'll respond in their own voice, manner, and style.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span className="text-gray-700">If not? The Essence simply says: "I don't know — they didn't choose to share that."</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Privacy and Control */}
        <section className="py-20 bg-white" id="privacy">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">🔐 You Control What Is Remembered</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Essence only contains what you choose to share.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-book-open text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Which stories are told</h3>
                <p className="text-gray-600">You decide which memories, anecdotes, and life stories become part of your digital legacy.</p>
                <div className="mt-6 flex items-center">
                  <div className="relative inline-block w-12 mr-2 align-middle select-none">
                    <input type="checkbox" id="toggle1" className="checked:bg-indigo-600 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer" defaultChecked />
                    <label htmlFor="toggle1" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <span className="text-gray-700 text-sm">Enabled</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-comment-dots text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Which opinions are expressed</h3>
                <p className="text-gray-600">Control which viewpoints, beliefs, and perspectives are preserved in your Essence.</p>
                <div className="mt-6 flex items-center">
                  <div className="relative inline-block w-12 mr-2 align-middle select-none">
                    <input type="checkbox" id="toggle2" className="checked:bg-indigo-600 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer" defaultChecked />
                    <label htmlFor="toggle2" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <span className="text-gray-700 text-sm">Enabled</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-user-circle text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Which parts of your life</h3>
                <p className="text-gray-600">Select which aspects of your experiences become part of your digital presence.</p>
                <div className="mt-6 flex items-center">
                  <div className="relative inline-block w-12 mr-2 align-middle select-none">
                    <input type="checkbox" id="toggle3" className="checked:bg-indigo-600 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer" defaultChecked />
                    <label htmlFor="toggle3" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <span className="text-gray-700 text-sm">Enabled</span>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Your Essence is not just about data — it's about consent, curation, and authenticity.</p>
            </div>
          </div>
        </section>
        {/* Use Cases */}
        <section className="py-20 bg-gray-50" id="use-cases">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">💼 Built for More Than Just Family</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Essence isn't just for memorials or family keepsakes. It's also a powerful tool for professionals.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition hover:transform hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-book text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">📚 Authors</h3>
                <p className="text-gray-600">Who want readers to understand their deeper motivations and the context behind their works.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition hover:transform hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-microphone text-2xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">🎤 Speakers</h3>
                <p className="text-gray-600">And leaders who want their voice preserved and their message to continue inspiring others.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition hover:transform hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-landmark text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">🏛️ Public Figures</h3>
                <p className="text-gray-600">And educators who want to extend their teaching and influence across time.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition hover:transform hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-brain text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">🧠 Philosophers</h3>
                <p className="text-gray-600">Artists, and visionaries whose Essence is a legacy of thought and creativity.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">This is more than a digital twin. It's a living archive — a way for future minds to connect with yours.</p>
            </div>
          </div>
        </section>
        {/* Mission */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white" id="mission">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">✨ Our Mission</h2>
              <p className="text-xl mb-8">At Essence, our mission is to honor the truth of a human being.</p>
              <p className="text-xl mb-8">We're not creating replicas. We're building bridges across time — so that your presence, your wisdom, your soul's fingerprint can continue to inspire, comfort, and guide others.</p>
              <div className="text-2xl font-serif italic mt-12">
                "Essence is memory, preserved in motion."
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Start Your Journey</h2>
                  <p className="text-gray-600 mb-8">Begin preserving your legacy today. Join thousands who are ensuring their wisdom and presence lives on.</p>
                  <div className="space-y-4">
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                    <button
                      onClick={handleSubscribe}
                      disabled={subscriptionStatus === 'loading'}
                      className={`w-full bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition font-semibold !rounded-button cursor-pointer whitespace-nowrap ${
                        subscriptionStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {subscriptionStatus === 'loading' ? 'Processing...' : 'Get Started'}
                    </button>
                    {statusMessage && (
                      <p className={`text-sm ${
                        subscriptionStatus === 'success' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {statusMessage}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-center">
                      <i className="fas fa-lock text-gray-400 mr-2"></i>
                      <span className="text-gray-500 text-sm">Your information is secure</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-heart text-4xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Preserve What Matters</h3>
                    <p className="text-white/80">Your story deserves to be told, your wisdom shared, your presence felt — even when you're not there.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/the-kindness-app" className="text-gray-400 hover:text-white cursor-pointer">The Kindness App</Link></li>
                <li><Link to="/ask-the-guru" className="text-gray-400 hover:text-white cursor-pointer">Ask the Guru</Link></li>
                <li><Link to="/essence" className="text-gray-400 hover:text-white cursor-pointer">Essence</Link></li>
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
}

export default Essence;
