// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [email, setEmail] = useState('');
return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
{/* Header */}
<header className="bg-white shadow-sm">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center">
<h1 className="text-2xl font-bold text-indigo-600">Essence</h1>
</div>
<nav className="hidden md:flex space-x-8">
<a href="#technology" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer whitespace-nowrap" onClick={(e) => {
e.preventDefault();
document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
}}>Technology</a>
<a href="#legacy" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer whitespace-nowrap" onClick={(e) => {
e.preventDefault();
document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' });
}}>Legacy</a>
<a href="#privacy" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer whitespace-nowrap" onClick={(e) => {
e.preventDefault();
document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' });
}}>Privacy</a>
<a href="#use-cases" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer whitespace-nowrap" onClick={(e) => {
e.preventDefault();
document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' });
}}>Use Cases</a>
<a href="#mission" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer whitespace-nowrap" onClick={(e) => {
e.preventDefault();
document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
}}>Our Mission</a>
</nav>
<button className="bg-indigo-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-indigo-700 transition !rounded-button cursor-pointer whitespace-nowrap">Get Started</button>
</div>
</header>
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
<a href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/67b02fde-aeae-41e0-9c36-4f4372e6032d" data-readdy="true">
<button className="bg-white text-indigo-700 px-8 py-3 rounded-md shadow-lg hover:bg-gray-100 transition font-semibold !rounded-button cursor-pointer whitespace-nowrap">Go back home</button>
</a>
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
<div className="mb-6">
<input
type="email"
placeholder="Enter your email"
className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>
<button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition font-semibold !rounded-button cursor-pointer whitespace-nowrap">Get Started</button>
<div className="mt-4 flex items-center justify-center">
<i className="fas fa-lock text-gray-400 mr-2"></i>
<span className="text-gray-500 text-sm">Your information is secure</span>
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
{/* Footer */}
<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1">
<h3 className="text-xl font-bold mb-4">Company</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-xl font-bold mb-4">Resources</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-xl font-bold mb-4">Legal</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-xl font-bold mb-4">Connect</h3>
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white transition">
<i className="fab fa-twitter text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition">
<i className="fab fa-linkedin text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition">
<i className="fab fa-github text-xl"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400">© 2025 Essence. All rights reserved.</p>
<div className="flex items-center space-x-4 mt-4 md:mt-0">
<i className="fab fa-cc-visa text-2xl text-gray-400"></i>
<i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
<i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
</div>
</div>
</div>
</div>
</footer>
</div>
);
}
export default App
