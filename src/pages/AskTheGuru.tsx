// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
const App: React.FC = () => {
return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans">
{/* Header */}
<header className="bg-white shadow-sm">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center">
<i className="fas fa-om text-2xl text-amber-600 mr-3"></i>
<h1 className="text-xl font-semibold">Ask The Guru</h1>
</div>
<nav className="hidden md:flex space-x-8">
</nav>
<button className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition-colors">
Start Asking
</button>
</div>
</header>
{/* Hero Section */}
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10"></div>
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20serene%20and%20mystical%20landscape%20with%20ancient%20temple%20silhouettes%2C%20soft%20golden%20light%20filtering%20through%20clouds%2C%20creating%20a%20spiritual%20atmosphere.%20The%20left%20side%20has%20a%20subtle%20gradient%20to%20white%20for%20text%20overlay%2C%20while%20the%20right%20shows%20more%20of%20the%20ethereal%20scene%20with%20mountains%20and%20symbolic%20elements&width=1200&height=600&seq=hero1&orientation=landscape')`
}}
></div>
<div className="container mx-auto px-6 py-20 relative z-20">
<div className="max-w-2xl">
<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Welcome to Ask The Guru</h1>
<p className="text-xl mb-8 leading-relaxed">
Ask The Guru is a unique spiritual tool designed to help seekers explore timeless wisdom from across cultures, eras, and traditions.
</p>
<p className="text-lg mb-10 leading-relaxed">
Rather than offering advice or opinions, the Guru simply listens — and then shares how others have spoken about your question through the ages.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/67b02fde-aeae-41e0-9c36-4f4372e6032d" data-readdy="true">
<button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors text-lg !rounded-button whitespace-nowrap cursor-pointer">
Go back home
</button>
</a>
</div>
</div>
</div>
</section>
{/* Quote Section */}
<section className="bg-amber-600 text-white py-12">
<div className="container mx-auto px-6 text-center">
<p className="text-2xl md:text-3xl italic font-light">
"We're all saying the same thing — just in different words."
</p>
</div>
</section>
{/* What Powers the Guru Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
What Powers the Guru?
</h2>
<p className="text-xl text-center max-w-4xl mx-auto mb-16">
At the heart of Ask The Guru is a powerful vector database built from:
</p>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
<i className="fas fa-book text-amber-600 text-2xl"></i>
</div>
<h3 className="text-xl font-semibold text-center mb-4">Ancient Spiritual Texts</h3>
<p className="text-gray-600 text-center">
The Bible, Quran, Bhagavad Gita, Tao Te Ching, and more sacred texts from around the world.
</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
<i className="fas fa-feather-alt text-amber-600 text-2xl"></i>
</div>
<h3 className="text-xl font-semibold text-center mb-4">Poets & Mystics</h3>
<p className="text-gray-600 text-center">
Teachings from poets, mystics, and philosophers who have explored the depths of human existence.
</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
<i className="fas fa-landmark text-amber-600 text-2xl"></i>
</div>
<h3 className="text-xl font-semibold text-center mb-4">Ancient Wisdom</h3>
<p className="text-gray-600 text-center">
Wisdom from ancient civilizations and indigenous traditions that have stood the test of time.
</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
<i className="fas fa-microphone-alt text-amber-600 text-2xl"></i>
</div>
<h3 className="text-xl font-semibold text-center mb-4">Modern Explorations</h3>
<p className="text-gray-600 text-center">
Transcripts of podcasts and documentaries that explore contemporary spiritual thought.
</p>
</div>
</div>
<div className="mt-16 text-center text-lg text-gray-600 max-w-4xl mx-auto">
<p>
These texts are encoded and indexed in a way that allows the Guru to find deep semantic patterns — not just keywords — so the answers feel truly connected.
</p>
</div>
</div>
</section>
{/* How It Works Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-6 flex items-center justify-center">
<i className="fas fa-search text-amber-600 mr-3"></i> How Does It Work?
</h2>
<div className="max-w-4xl mx-auto mt-16">
<div className="relative">
<div className="absolute left-8 h-full w-0.5 bg-amber-200 hidden md:block"></div>
<div className="flex flex-col md:flex-row mb-12 relative">
<div className="md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 md:mb-0 z-10 mx-auto md:mx-0">
<span className="text-amber-600 font-bold text-xl">1</span>
</div>
<div className="md:ml-12 md:pl-4">
<h3 className="text-xl font-semibold mb-3">Ask Your Question</h3>
<p className="text-gray-600">
You simply ask a question about life, meaning, purpose, or any spiritual inquiry.
</p>
</div>
</div>
<div className="flex flex-col md:flex-row mb-12 relative">
<div className="md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 md:mb-0 z-10 mx-auto md:mx-0">
<span className="text-amber-600 font-bold text-xl">2</span>
</div>
<div className="md:ml-12 md:pl-4">
<h3 className="text-xl font-semibold mb-3">The Guru Listens</h3>
<p className="text-gray-600">
The system analyzes your question to understand its deeper meaning and themes.
</p>
</div>
</div>
<div className="flex flex-col md:flex-row mb-12 relative">
<div className="md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 md:mb-0 z-10 mx-auto md:mx-0">
<span className="text-amber-600 font-bold text-xl">3</span>
</div>
<div className="md:ml-12 md:pl-4">
<h3 className="text-xl font-semibold mb-3">Wisdom is Shared</h3>
<p className="text-gray-600">
The Guru returns examples of how others have spoken about the same theme throughout history.
</p>
<p className="text-amber-700 font-medium mt-3">
It does not give advice.
</p>
</div>
</div>
<div className="flex flex-col md:flex-row relative">
<div className="md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 md:mb-0 z-10 mx-auto md:mx-0">
<span className="text-amber-600 font-bold text-xl">4</span>
</div>
<div className="md:ml-12 md:pl-4">
<h3 className="text-xl font-semibold mb-3">You Form Understanding</h3>
<p className="text-gray-600">
Instead, it offers reflections, stories, verses, or quotes — drawn from humanity's vast spiritual memory — to help you form your own understanding.
</p>
</div>
</div>
</div>
</div>
<div className="mt-16 bg-amber-50 p-8 rounded-xl max-w-4xl mx-auto">
<div className="flex items-start">
<i className="fas fa-lightbulb text-amber-600 text-2xl mt-1 mr-4"></i>
<p className="text-xl font-medium">
The goal is to show that the truth is often shared, but expressed in different ways.
</p>
</div>
</div>
</div>
</section>
{/* Chat Reports Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2">
<div className="relative w-full h-96 rounded-xl overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=A%20beautifully%20designed%20digital%20report%20or%20document%20with%20spiritual%20wisdom%20quotes%2C%20organized%20sections%20with%20ancient%20text%20references%2C%20elegant%20typography%20on%20a%20clean%20interface%20with%20soft%20golden%20accents%2C%20showing%20a%20spiritual%20conversation%20summary%20with%20multiple%20traditions%20represented&width=600&height=400&seq=report1&orientation=landscape"
alt="Chat report example"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
<i className="fas fa-file-alt text-amber-600 mr-3"></i> Chat Reports & Deep Dives
</h2>
<p className="text-lg mb-6">
Every conversation with the Guru can generate a detailed report, including:
</p>
<ul className="space-y-4">
<li className="flex items-start">
<i className="fas fa-check-circle text-amber-600 mt-1 mr-3"></i>
<span>Summaries of your chats</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-amber-600 mt-1 mr-3"></i>
<span>Links to full sources and documentation</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-amber-600 mt-1 mr-3"></i>
<span>Reflections grouped by tradition or theme</span>
</li>
</ul>
<p className="text-lg mt-6">
You can review these reports anytime, or explore deeper into the ideas that spoke to you.
</p>
</div>
</div>
</div>
</section>
{/* Personalized Insights Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center">
<i className="fas fa-sparkles text-amber-600 mr-3"></i> Personalized Insights (Without Bias)
</h2>
<div className="max-w-4xl mx-auto">
<p className="text-lg text-center mb-12">
As you interact more with the Guru, it begins to understand your preferences — whether you lean toward mysticism, philosophy, scripture, or poetry.
</p>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-xl shadow-sm">
<h3 className="text-xl font-semibold mb-4 text-center">What It Does</h3>
<ul className="space-y-3">
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Adapts how it responds to your spiritual language</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Brings in voices that resonate with you</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Learns your preferred traditions and styles</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Remembers your conversation history</span>
</li>
</ul>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm">
<h3 className="text-xl font-semibold mb-4 text-center">What It Doesn't Do</h3>
<ul className="space-y-3">
<li className="flex items-start">
<i className="fas fa-times text-red-500 mt-1 mr-3"></i>
<span>Never tells you what to believe</span>
</li>
<li className="flex items-start">
<i className="fas fa-times text-red-500 mt-1 mr-3"></i>
<span>Doesn't provide direct advice</span>
</li>
<li className="flex items-start">
<i className="fas fa-times text-red-500 mt-1 mr-3"></i>
<span>Won't favor one tradition over others</span>
</li>
<li className="flex items-start">
<i className="fas fa-times text-red-500 mt-1 mr-3"></i>
<span>Doesn't judge your questions or beliefs</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
{/* Universal Voice Section */}
<section className="py-20 bg-amber-50">
<div className="container mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center">
<i className="fas fa-globe text-amber-600 mr-3"></i> A Universal Voice
</h2>
<p className="text-xl max-w-4xl mx-auto mb-12">
Ask The Guru is built on the idea that wisdom belongs to everyone — and that throughout history, people have reached toward the same truths in different forms.
</p>
<div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-sm">
<p className="text-lg mb-6">
This is a place to listen, reflect, and realize:
</p>
<p className="text-2xl font-light italic text-amber-700">
"We're all saying the same thing — just in different words."
</p>
</div>
<div className="mt-16">
<a href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/67b02fde-aeae-41e0-9c36-4f4372e6032d" data-readdy="true">
<button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors text-lg !rounded-button whitespace-nowrap cursor-pointer">
Go back home
</button>
</a>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-800 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div>
<div className="flex items-center mb-4">
<i className="fas fa-om text-2xl text-amber-500 mr-3"></i>
<h3 className="text-xl font-semibold">Ask The Guru</h3>
</div>
<p className="text-gray-400">
Exploring timeless wisdom across cultures, eras, and traditions.
</p>
</div>
<div>
<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">Home</a></li>
<li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">About</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold mb-4">Connect</h4>
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">
<i className="fab fa-twitter text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">
<i className="fab fa-facebook text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">
<i className="fab fa-instagram text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-amber-500 transition-colors cursor-pointer">
<i className="fab fa-linkedin text-xl"></i>
</a>
</div>
<p className="mt-4 text-gray-400">
Subscribe to our newsletter
</p>
<div className="mt-2 flex">
<input
type="email"
placeholder="Your email"
className="bg-gray-700 border-none text-sm rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
/>
<button className="bg-amber-600 text-white px-4 py-2 rounded-r-lg hover:bg-amber-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-paper-plane"></i>
</button>
</div>
</div>
</div>
<div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
<p>&copy; {new Date().getFullYear()} Ask The Guru. All rights reserved.</p>
</div>
</div>
</footer>
</div>
);
}
export default App
