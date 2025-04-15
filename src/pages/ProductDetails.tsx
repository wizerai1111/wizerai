// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [activeTab, setActiveTab] = useState('overview');
return (
<div className="min-h-screen bg-white">
{/* Navigation Header */}
<header className="bg-white shadow-sm">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center">
<a href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/67b02fde-aeae-41e0-9c36-4f4372e6032d" data-readdy="true">
<img src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/053d7dcdb45e8c6d6f0bacab19090caa.png" alt="Wizer AI Logo" className="h-8 cursor-pointer" />
</a>
</div>
<div className="flex items-center space-x-8">
<nav className="hidden md:flex space-x-8 items-center">
<a href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/67b02fde-aeae-41e0-9c36-4f4372e6032d" data-readdy="true" className="text-gray-600 hover:text-gray-900 cursor-pointer">Home</a>
<a href="#about" className="text-gray-600 hover:text-gray-900 cursor-pointer">About</a>
<a href="#features" className="text-gray-600 hover:text-gray-900 cursor-pointer">Solutions</a>
<a href="#contact" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</a>
</nav>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out cursor-pointer !rounded-button whitespace-nowrap">
Get Started
</button>
</div>
</div>
</header>
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
<div className="flex flex-col sm:flex-row gap-4">
<a href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/67b02fde-aeae-41e0-9c36-4f4372e6032d" data-readdy="true">
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out font-medium cursor-pointer !rounded-button whitespace-nowrap">
Back Home
</button>
</a>
</div>
</div>
</div>
</section>
{/* Navigation Tabs */}
<section className="border-b border-gray-200">
<div className="container mx-auto px-4">
<div className="flex overflow-x-auto space-x-8 py-4">
<button
onClick={() => setActiveTab('overview')}
className={`whitespace-nowrap px-1 py-2 font-medium text-sm transition-colors duration-200 ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'} cursor-pointer`}
>
Overview
</button>
<button
onClick={() => setActiveTab('features')}
className={`whitespace-nowrap px-1 py-2 font-medium text-sm transition-colors duration-200 ${activeTab === 'features' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'} cursor-pointer`}
>
Key Features
</button>
<button
onClick={() => setActiveTab('how-it-works')}
className={`whitespace-nowrap px-1 py-2 font-medium text-sm transition-colors duration-200 ${activeTab === 'how-it-works' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'} cursor-pointer`}
>
How It Works
</button>
</div>
</div>
</section>
{/* Content Sections */}
<div className="py-12">
{activeTab === 'overview' && (
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
)}
{activeTab === 'features' && (
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
)}
{activeTab === 'how-it-works' && (
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
<div className="md:w-1/2 md:pl-12 hidden md:block">
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
src="https://readdy.ai/api/search-image?query=Restaurant%20kitchen%20staff%20preparing%20healthy%20meals%20in%20containers%20for%20donation%2C%20showing%20care%20and%20attention%20to%20quality%20food%20preparation%2C%20with%20diverse%20chefs%20working%20together%20in%20a%20professional%20kitchen%2C%20on%20a%20simple%20background&width=300&height=200&seq=4&orientation=landscape"
alt="Meal preparation"
className="rounded-lg shadow-lg w-full"
/>
</div>
</div>
{/* Step 4 */}
<div className="md:flex items-center">
<div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 hidden md:block">
<img
src="https://readdy.ai/api/search-image?query=Volunteer%20delivering%20food%20packages%20to%20a%20grateful%20family%20at%20their%20doorstep%2C%20showing%20the%20moment%20of%20connection%20and%20gratitude%2C%20with%20a%20delivery%20vehicle%20visible%20in%20the%20background%20showing%20the%20Kindness%20App%20logo%2C%20on%20a%20simple%20background&width=300&height=200&seq=5&orientation=landscape"
alt="Delivery to recipients"
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
<div className="mt-16 bg-indigo-50 rounded-xl p-8 text-center">
<h3 className="text-2xl font-bold mb-6">Ready to Make a Difference?</h3>
<p className="text-lg text-gray-700 mb-6">
Join our community of givers and help bring food and hope to those who need it most.
</p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md transition duration-300 ease-in-out font-medium cursor-pointer !rounded-button whitespace-nowrap">
Start Donating Today
</button>
</div>
</div>
</div>
)}
</div>
{/* Call to Action */}
<section className="py-16 bg-indigo-600">
<div className="container mx-auto px-4 text-center">
<h2 className="text-3xl font-bold text-white mb-6">Join Our Mission Today</h2>
<p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
Together, we can create a world where no one goes hungry and kindness flows freely through our communities.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-3 rounded-md transition duration-300 ease-in-out font-medium text-lg cursor-pointer !rounded-button whitespace-nowrap">
Donate Now
</button>
<a href="#contact" className="inline-block">
<button className="bg-transparent hover:bg-indigo-700 text-white border border-white px-8 py-3 rounded-md transition duration-300 ease-in-out font-medium text-lg cursor-pointer !rounded-button whitespace-nowrap">
Contact Us
</button>
</a>
</div>
</div>
</section>
{/* Newsletter Section */}
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
<p className="text-lg text-gray-700 mb-8">
Subscribe to our newsletter to receive updates on our impact, stories from the community, and ways you can help.
</p>
<form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
<input
type="email"
placeholder="Your email address"
className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
required
/>
<button
type="submit"
className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out font-medium cursor-pointer !rounded-button whitespace-nowrap"
>
Subscribe
</button>
</form>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-900 text-white py-16">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
<div className="col-span-1">
<img src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/053d7dcdb45e8c6d6f0bacab19090caa.png" alt="Wizer AI Logo" className="h-8 mb-6" />
<p className="text-gray-400 mb-6">
Empowering businesses with ethical AI solutions that drive innovation and growth while maintaining the highest standards of responsibility and transparency.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white">
<i className="fab fa-twitter text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white">
<i className="fab fa-linkedin text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white">
<i className="fab fa-github text-xl"></i>
</a>
</div>
</div>
<div className="col-span-1">
<h3 className="text-lg font-semibold mb-4">Solutions</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-400 hover:text-white">AI Ethics Framework</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Bias Detection</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Transparency Tools</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Compliance Monitor</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-lg font-semibold mb-4">Company</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-lg font-semibold mb-4">Legal</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
<li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm mb-4 md:mb-0">
© 2025 Wizer AI. All rights reserved.
</p>
<div className="flex items-center space-x-4">
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
};
export default App
