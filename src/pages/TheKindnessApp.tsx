import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const TheKindnessApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

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
          { email, subscribedto: 'TheKindnessApp' }
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

      setStatusMessage('Thank you for subscribing to The Kindness App updates!');
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setStatusMessage('An unexpected error occurred. Please try again.');
      setSubscriptionStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
              <img src="/@LogoMakr-0RjNJq.png" alt="Wizer AI Logo" className="h-8" />
              <img src="/@LogoMakr-7l5QvC.png" alt="The Kindness App Logo" className="h-8 ml-2" />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8 items-center">
              <button onClick={() => {
                const element = document.getElementById('overview');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="text-gray-600 hover:text-gray-900 cursor-pointer">Overview</button>
              <button onClick={() => {
                const element = document.getElementById('features');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="text-gray-600 hover:text-gray-900 cursor-pointer">Features</button>
              <button onClick={() => {
                const element = document.getElementById('how-it-works');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="text-gray-600 hover:text-gray-900 cursor-pointer">How It Works</button>
            </nav>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out cursor-pointer !rounded-button whitespace-nowrap">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=A%20warm%20and%20inviting%20image%20showing%20diverse%20people%20sharing%20food%20and%20helping%20each%20other%20at%20a%20community%20event%2C%20with%20volunteers%20distributing%20meals%20to%20families%20in%20need%2C%20creating%20a%20sense%20of%20community%20and%20compassion%2C%20with%20soft%20natural%20lighting%20and%20a%20hopeful%20atmosphere%20on%20a%20simple%20clean%20background&width=1440&height=600&seq=1&orientation=landscape"
              alt="The Kindness App in action"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Kindness App: Bringing Food and Hope to Those in Need
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                SEVA - Together We Nourish: A community platform connecting donors, local businesses, and those in need through acts of kindness.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section id="overview" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">About The Kindness App</h2>
              <div className="mb-12">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Kindness App is not merely a donation platform; it is a community founded on the principle of uplifting others without the expectation of reciprocity. Donors can contribute through the Kindness portal, where funds raised from donation programs are allocated to various local businesses, including restaurants, grocery stores, clothing retailers, and bookstores. These establishments use the donations to prepare meals or provide essential items such as clothing, books, and groceries, which are then delivered to those in need.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In the initial phase, our focus will be on meal donations; however, SEVA has been meticulously crafted with scalability in mind, ensuring it can effortlessly expand to accommodate a diverse array of donation types in the future. Whether it be clothing, books, furniture, toys, or any other cause, The Kindness App is poised to evolve and cater to the ever-growing needs of the communities we serve.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">How does The Kindness App contribute to different classes of society?</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Kindness App platform serves as a conduit for donors to contribute, ensuring that assistance reaches families facing various challenges. It offers a range of donation programs tailored to regional needs, focusing on essentials such as food, clothing, healthcare, and education. Each type of support is directed to those who require it most, and donors receive receipts for their contributions, which can facilitate tax benefits.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Additionally, The Kindness App supports small and medium-sized businesses by providing them with opportunities to grow while participating in the mission to assist those in need. Funds raised through donation drives are allocated to these businesses, enabling them to process and distribute essential items—such as food, clothing, books, and groceries to registered recipients.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-4 text-indigo-600">
                    <i className="fas fa-heart text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To create a world where no one goes hungry, by connecting those who can give with those who need support, while strengthening local businesses and communities.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-4 text-indigo-600">
                    <i className="fas fa-hands-helping text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    A connected community where kindness flows freely, creating a sustainable ecosystem of giving that benefits everyone involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="mb-4 text-indigo-600 flex justify-center">
                    <i className="fas fa-utensils text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Meal Donations</h3>
                  <p className="text-gray-700">
                    Contribute funds that go directly to local restaurants to prepare fresh, nutritious meals for those in need.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="mb-4 text-indigo-600 flex justify-center">
                    <i className="fas fa-store text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Local Business Support</h3>
                  <p className="text-gray-700">
                    Help small businesses thrive while they contribute to community welfare through the platform.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="mb-4 text-indigo-600 flex justify-center">
                    <i className="fas fa-route text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Optimized Distribution</h3>
                  <p className="text-gray-700">
                    AI-powered scheduling and routing ensures resources reach recipients efficiently and on time.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-4 text-indigo-600">
                    <i className="fas fa-hand-holding-usd text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Transparent Donations</h3>
                  <p className="text-gray-700">
                    Track exactly where your donations go and the impact they make in the community. Receive tax-deductible receipts for your contributions.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-4 text-indigo-600">
                    <i className="fas fa-users text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Building</h3>
                  <p className="text-gray-700">
                    Connect with others who share your values and see the collective impact of your community's kindness in real-time.
                  </p>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Future Expansion</h3>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  While currently focused on meal donations, The Kindness App is designed to expand to include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <i className="fas fa-tshirt text-indigo-600 text-2xl mb-2"></i>
                    <p className="font-medium">Clothing</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <i className="fas fa-book text-indigo-600 text-2xl mb-2"></i>
                    <p className="font-medium">Books</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <i className="fas fa-couch text-indigo-600 text-2xl mb-2"></i>
                    <p className="font-medium">Furniture</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <i className="fas fa-gamepad text-indigo-600 text-2xl mb-2"></i>
                    <p className="font-medium">Toys</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 hidden md:block"></div>
                <div className="relative z-10">
                  {/* Step 1 */}
                  <div className="md:flex items-center mb-12">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="text-xl font-bold mb-3">Donors Contribute</h3>
                      <p className="text-gray-700">
                        Individuals and organizations donate through the platform, choosing specific programs or causes they wish to support.
                      </p>
                    </div>
                    <div className="md:w-12 mx-auto md:mx-0 flex justify-center">
                      <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-right hidden md:block">
                      <img
                        src="https://readdy.ai/api/search-image?query=A%20person%20making%20an%20online%20donation%20on%20a%20smartphone%20app%20with%20a%20warm%20and%20friendly%20interface%20showing%20donation%20options%20for%20meals%20and%20other%20essentials%2C%20with%20a%20clean%20modern%20design%20on%20a%20simple%20background&width=300&height=200&seq=2&orientation=landscape"
                        alt="Donation process"
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="md:flex items-center mb-12">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 hidden md:block">
                      <img
                        src="https://readdy.ai/api/search-image?query=Local%20restaurant%20or%20small%20business%20receiving%20an%20order%20notification%20on%20a%20tablet%20device%2C%20showing%20details%20of%20meals%20to%20prepare%20for%20donation%2C%20with%20staff%20members%20looking%20excited%20to%20participate%20in%20the%20program%2C%20on%20a%20simple%20background&width=300&height=200&seq=3&orientation=landscape"
                        alt="Local businesses receive funds"
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                    <div className="md:w-12 mx-auto md:mx-0 flex justify-center">
                      <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold mb-3">Local Businesses Receive Funds</h3>
                      <p className="text-gray-700">
                        Restaurants, grocery stores, and other local businesses receive the donations to prepare meals or gather essential items.
                      </p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="md:flex items-center mb-12">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="text-xl font-bold mb-3">Preparation of Items</h3>
                      <p className="text-gray-700">
                        Businesses prepare nutritious meals or gather requested items according to community needs and dietary requirements.
                      </p>
                    </div>
                    <div className="md:w-12 mx-auto md:mx-0 flex justify-center">
                      <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">3</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block">
                      <img
                        src="/images/makefood.jpg"
                        alt="Food preparation showing chefs preparing meals in containers"
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 hidden md:block">
                      <img
                        src="/images/Delivery.jpg"
                        alt="Delivery showing people receiving packages at their doorstep"
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                    <div className="md:w-12 mx-auto md:mx-0 flex justify-center">
                      <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">4</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold mb-3">Delivery to Recipients</h3>
                      <p className="text-gray-700">
                        Using AI-optimized routes, items are delivered to registered recipients efficiently, ensuring they arrive fresh and on time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Stay Connected Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates on our impact, stories from the community, and ways you can help.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={subscriptionStatus === 'loading'}
                  className={`bg-indigo-600 text-white px-8 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out ${
                    subscriptionStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {subscriptionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {statusMessage && (
                <p className={`text-sm ${
                  subscriptionStatus === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

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
};

export default TheKindnessApp; 