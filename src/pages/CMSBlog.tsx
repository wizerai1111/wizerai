// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [isAdmin, setIsAdmin] = useState(false);
const [showAdminPanel, setShowAdminPanel] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const [activeCategory, setActiveCategory] = useState('All');
const [showMobileMenu, setShowMobileMenu] = useState(false);
// Mock blog post data
const blogPosts = [
{
id: 1,
title: 'Ethical AI Development Guidelines',
excerpt: 'A comprehensive exploration of ethical principles and guidelines for developing responsible AI systems that benefit society.',
category: 'AI',
date: 'April 14, 2025',
readTime: '7 min read',
imageUrl: 'https://readdy.ai/api/search-image?query=Ethical%20AI%20concept%20visualization%20with%20balanced%20scales%2C%20human%20figures%2C%20neural%20networks%2C%20soft%20blue%20lighting%2C%20clean%20modern%20aesthetic%2C%20professional%20environment%20showing%20harmony%20between%20artificial%20intelligence%20and%20human%20values&width=600&height=400&seq=1&orientation=landscape'
},
{
id: 2,
title: 'AI Bias Detection and Mitigation',
excerpt: 'Understanding and addressing bias in artificial intelligence systems to ensure fair and equitable outcomes for all users.',
category: 'AI',
date: 'April 12, 2025',
readTime: '6 min read',
imageUrl: 'https://readdy.ai/api/search-image?query=AI%20fairness%20and%20equality%20concept%20with%20diverse%20human%20figures%20connected%20through%20neural%20networks%2C%20balanced%20representation%2C%20professional%20lighting%2C%20clean%20background%20showing%20inclusivity%20and%20ethical%20technology&width=600&height=400&seq=2&orientation=landscape'
},
{
id: 3,
title: 'Privacy-Preserving AI Methods',
excerpt: 'Exploring advanced techniques for developing AI systems that protect user privacy while maintaining high performance.',
category: 'AI',
date: 'April 10, 2025',
readTime: '8 min read',
imageUrl: 'https://readdy.ai/api/search-image?query=Data%20privacy%20and%20AI%20security%20concept%20with%20shield%20protection%2C%20encrypted%20data%20streams%2C%20neural%20networks%2C%20professional%20blue%20lighting%2C%20clean%20modern%20aesthetic%20showing%20secure%20technology&width=600&height=400&seq=3&orientation=landscape'
}
];
const categories = ['All', 'AI'];
const popularPosts = [
{ id: 1, title: 'Ethical AI Development Guidelines', views: '3.2k' },
{ id: 2, title: 'AI Bias Detection and Mitigation', views: '2.8k' },
{ id: 3, title: 'Privacy-Preserving AI Methods', views: '2.5k' }
];
const tags = [
{ name: 'Ethical AI', count: 15 },
{ name: 'AI Ethics', count: 12 },
{ name: 'Responsible AI', count: 10 },
{ name: 'AI Bias', count: 8 },
{ name: 'AI Privacy', count: 7 },
{ name: 'Fair AI', count: 6 },
{ name: 'AI Development', count: 9 },
{ name: 'AI Guidelines', count: 5 }
];
const archives = [
{ month: 'April 2025', count: 8 },
{ month: 'March 2025', count: 12 },
{ month: 'February 2025', count: 9 },
{ month: 'January 2025', count: 11 }
];
const filteredPosts = blogPosts.filter(post => {
const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
return matchesSearch && matchesCategory;
});
const handleAdminLogin = () => {
setIsAdmin(!isAdmin);
};
const toggleAdminPanel = () => {
setShowAdminPanel(!showAdminPanel);
};
return (
<div className="min-h-screen bg-gray-50">
{/* Header */}
<header className="bg-white shadow-sm">
<div className="container mx-auto px-4 py-4">
<div className="flex items-center justify-between">
{/* Logo */}
<div className="flex items-center">
<div className="flex items-center">
<img src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/053d7dcdb45e8c6d6f0bacab19090caa.png" alt="Wizer AI Logo" className="h-8 mr-2" />
<h1 className="text-2xl font-bold text-gray-800">Blog</h1>
</div>
</div>
{/* Search Bar - Desktop */}
<div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
<div className="relative w-full">
<input
type="text"
placeholder="Search articles..."
className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
<div className="absolute inset-y-0 left-0 flex items-center pl-3">
<i className="fas fa-search text-gray-400"></i>
</div>
</div>
</div>
{/* Navigation - Desktop */}
<nav className="hidden md:flex items-center space-x-6">
<a href="#" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer">Home</a>
<a href="#" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer">About</a>
<a href="#" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer">Contact</a>
<button
onClick={handleAdminLogin}
className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200 !rounded-button whitespace-nowrap cursor-pointer"
>
{isAdmin ? 'Admin Mode' : 'Admin Login'}
</button>
</nav>
{/* Mobile Menu Button */}
<button
className="md:hidden text-gray-500 focus:outline-none cursor-pointer"
onClick={() => setShowMobileMenu(!showMobileMenu)}
>
<i className={`fas ${showMobileMenu ? 'fa-times' : 'fa-bars'} text-xl`}></i>
</button>
</div>
{/* Mobile Menu */}
{showMobileMenu && (
<div className="md:hidden mt-4 pb-2">
<div className="flex items-center mb-4">
<div className="relative w-full">
<input
type="text"
placeholder="Search articles..."
className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
<div className="absolute inset-y-0 left-0 flex items-center pl-3">
<i className="fas fa-search text-gray-400"></i>
</div>
</div>
</div>
<nav className="flex flex-col space-y-3">
<a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2 cursor-pointer">Home</a>
<a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2 cursor-pointer">About</a>
<a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2 cursor-pointer">Contact</a>
<button
onClick={handleAdminLogin}
className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200 !rounded-button whitespace-nowrap cursor-pointer"
>
{isAdmin ? 'Admin Mode' : 'Admin Login'}
</button>
</nav>
</div>
)}
{/* Categories Navigation */}
<div className="flex overflow-x-auto py-4 -mx-4 px-4 mt-2 no-scrollbar">
<div className="flex space-x-4">
{categories.map((category) => (
<button
key={category}
onClick={() => setActiveCategory(category)}
className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition duration-200 !rounded-button cursor-pointer ${
activeCategory === category
? 'bg-blue-600 text-white'
: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}`}
>
{category}
</button>
))}
</div>
</div>
</div>
</header>
{/* Admin Panel */}
{isAdmin && showAdminPanel && (
<div className="bg-white border-b border-gray-200 shadow-sm">
<div className="container mx-auto px-4 py-6">
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold text-gray-800">Create New Post</h2>
<button
onClick={toggleAdminPanel}
className="text-gray-500 hover:text-gray-700 cursor-pointer"
>
<i className="fas fa-times"></i>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
<input
type="text"
placeholder="Enter post title"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
<div className="border border-gray-300 rounded-lg overflow-hidden">
<div className="bg-gray-100 px-4 py-2 border-b border-gray-300 flex items-center space-x-4">
<button className="text-gray-700 hover:text-blue-600 cursor-pointer"><i className="fas fa-bold"></i></button>
<button className="text-gray-700 hover:text-blue-600 cursor-pointer"><i className="fas fa-italic"></i></button>
<button className="text-gray-700 hover:text-blue-600 cursor-pointer"><i className="fas fa-link"></i></button>
<button className="text-gray-700 hover:text-blue-600 cursor-pointer"><i className="fas fa-list"></i></button>
<button className="text-gray-700 hover:text-blue-600 cursor-pointer"><i className="fas fa-image"></i></button>
</div>
<textarea
rows={6}
placeholder="Write your post content here..."
className="w-full px-4 py-2 focus:outline-none border-none"
></textarea>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10">
{categories.filter(cat => cat !== 'All').map((category) => (
<option key={category} value={category}>{category}</option>
))}
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<i className="fas fa-chevron-down text-gray-500"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
<input
type="text"
placeholder="Enter tags separated by commas"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
<div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
<i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
<p className="text-sm text-gray-500">Drag and drop an image here, or click to select a file</p>
<input type="file" className="hidden" />
<button className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
Select Image
</button>
</div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-gray-200">
<div className="flex items-center">
<span className="mr-2 text-sm font-medium text-gray-700">Save as draft</span>
<label className="relative inline-flex items-center cursor-pointer">
<input type="checkbox" className="sr-only peer" />
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex space-x-3">
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
Preview
</button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
Publish
</button>
</div>
</div>
</div>
</div>
</div>
</div>
)}
{/* Main Content */}
<main className="container mx-auto px-4 py-8">
<div className="flex flex-col lg:flex-row">
{/* Blog Posts Grid */}
<div className="w-full lg:w-3/4 lg:pr-8">
{isAdmin && (
<div className="mb-6 flex justify-between items-center">
<h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
<button
onClick={toggleAdminPanel}
className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center !rounded-button whitespace-nowrap cursor-pointer"
>
<i className="fas fa-plus mr-2"></i> New Post
</button>
</div>
)}
{filteredPosts.length === 0 ? (
<div className="bg-white rounded-lg shadow-sm p-8 text-center">
<i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
<h3 className="text-xl font-medium text-gray-700 mb-2">No posts found</h3>
<p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
</div>
) : (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredPosts.map((post) => (
<div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200 cursor-pointer">
<div className="h-48 overflow-hidden">
<img
src={post.imageUrl}
alt={post.title}
className="w-full h-full object-cover object-top transition duration-300 hover:scale-105"
/>
</div>
<div className="p-5">
<div className="flex items-center mb-2">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{post.category}</span>
<span className="text-xs text-gray-500 ml-auto">{post.date}</span>
</div>
<h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
<p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">{post.readTime}</span>
<a href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/68662dcb-ad7b-41f6-a077-9c8df67c181c" data-readdy="true" className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer inline-block">
Read More <i className="fas fa-arrow-right ml-1"></i>
</a>
</div>
</div>
</div>
))}
</div>
)}
{/* Pagination */}
<div className="mt-10 flex justify-center">
<nav className="flex items-center space-x-2">
<button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-chevron-left text-xs"></i>
</button>
<button className="px-4 py-2 rounded-lg bg-blue-600 text-white !rounded-button whitespace-nowrap cursor-pointer">1</button>
<button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">2</button>
<button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">3</button>
<span className="px-4 py-2 text-gray-500">...</span>
<button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">8</button>
<button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-chevron-right text-xs"></i>
</button>
</nav>
</div>
</div>
{/* Sidebar */}
<div className="w-full lg:w-1/4 mt-8 lg:mt-0">
<div className="space-y-8">
{/* Popular Posts */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-lg font-bold text-gray-800 mb-4">Popular Posts</h3>
<div className="space-y-4">
{popularPosts.map((post) => (
<div key={post.id} className="flex items-start cursor-pointer">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm">
{post.id}
</span>
<div className="ml-3">
<h4 className="text-sm font-medium text-gray-800 hover:text-blue-600">{post.title}</h4>
<span className="text-xs text-gray-500">{post.views} views</span>
</div>
</div>
))}
</div>
</div>
{/* Categories */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
<div className="space-y-2">
{categories.filter(cat => cat !== 'All').map((category) => (
<div
key={category}
className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
onClick={() => setActiveCategory(category)}
>
<span className="text-gray-700">{category}</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
{blogPosts.filter(post => post.category === category).length}
</span>
</div>
))}
</div>
</div>
{/* Tags */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-lg font-bold text-gray-800 mb-4">Tags</h3>
<div className="flex flex-wrap gap-2">
{tags.map((tag) => (
<span
key={tag.name}
className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 cursor-pointer"
>
{tag.name} ({tag.count})
</span>
))}
</div>
</div>
{/* Archives */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-lg font-bold text-gray-800 mb-4">Archives</h3>
<div className="space-y-2">
{archives.map((archive) => (
<div
key={archive.month}
className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
>
<span className="text-gray-700">{archive.month}</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
{archive.count}
</span>
</div>
))}
</div>
</div>
{/* Newsletter */}
<div className="bg-blue-50 rounded-lg shadow-sm p-6">
<h3 className="text-lg font-bold text-gray-800 mb-2">Subscribe to Newsletter</h3>
<p className="text-sm text-gray-600 mb-4">Get the latest posts delivered straight to your inbox.</p>
<div className="space-y-3">
<input
type="email"
placeholder="Your email address"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition duration-200 !rounded-button whitespace-nowrap cursor-pointer">
Subscribe
</button>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-gray-800 text-white py-12">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h4 className="text-xl font-bold mb-4">Blog<span className="text-blue-400">CMS</span></h4>
<p className="text-gray-400 text-sm">A modern content management system for creating and managing blog posts with ease.</p>
<div className="flex space-x-4 mt-4">
<a href="#" className="text-gray-400 hover:text-white cursor-pointer"><i className="fab fa-twitter"></i></a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer"><i className="fab fa-facebook"></i></a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer"><i className="fab fa-instagram"></i></a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer"><i className="fab fa-linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-lg font-bold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Home</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">About</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-4">Categories</h4>
<ul className="space-y-2">
{categories.filter(cat => cat !== 'All').map((category) => (
<li key={category}>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">{category}</a>
</li>
))}
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-4">Contact Us</h4>
<ul className="space-y-2 text-gray-400">
<li className="flex items-start">
<i className="fas fa-map-marker-alt mt-1 mr-3"></i>
<span>123 Blog Street, Content City, CM 12345</span>
</li>
<li className="flex items-center">
<i className="fas fa-envelope mr-3"></i>
<span>info@blogcms.com</span>
</li>
<li className="flex items-center">
<i className="fas fa-phone mr-3"></i>
<span>+1 (555) 123-4567</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">© 2025 BlogCMS. All rights reserved.</p>
<div className="flex items-center space-x-4 mt-4 md:mt-0">
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-cc-visa text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-cc-mastercard text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-cc-paypal text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-cc-amex text-xl"></i>
</a>
</div>
</div>
</div>
</footer>
{/* Back to Top Button */}
<button className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none cursor-pointer">
<i className="fas fa-arrow-up"></i>
</button>
{/* Admin FAB (Mobile) */}
{isAdmin && (
<button
onClick={toggleAdminPanel}
className="lg:hidden fixed bottom-20 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none cursor-pointer"
>
<i className={`fas ${showAdminPanel ? 'fa-times' : 'fa-plus'} text-lg`}></i>
</button>
)}
</div>
);
};
export default App
