// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const BlogPost: React.FC = () => {
// Mock data for the blog post
const blogPost = {
id: 1,
title: 'The Future of Web Development',
excerpt: 'Exploring the latest trends and technologies shaping the future of web development in 2025 and beyond.',
content: `
<p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move further into 2025, several key trends are shaping the future of how we build and interact with the web.</p>
<h2>AI-Driven Development</h2>
<p>Artificial intelligence is no longer just a buzzword in web development—it's becoming an integral part of the development process itself. AI-powered tools are now capable of generating code, optimizing performance, and even designing user interfaces with minimal human intervention.</p>
<p>Developers are increasingly using AI assistants to handle repetitive tasks, debug code, and suggest optimizations. This shift allows human developers to focus on more creative and strategic aspects of web development, while AI handles the more mundane tasks.</p>
<blockquote>
"The most significant change I've seen in my 15 years as a developer is how AI has transformed from a novelty to an essential part of my daily workflow. It's like having a junior developer who never gets tired and learns at an exponential rate." - Sarah Chen, Senior Web Architect
</blockquote>
<h2>WebAssembly and the Performance Revolution</h2>
<p>WebAssembly (Wasm) has matured significantly, enabling near-native performance for web applications. This technology allows developers to write code in languages like C++, Rust, and Go, then compile it to run efficiently in browsers.</p>
<p>The implications are profound: complex applications that once required desktop installation can now run smoothly in browsers. From advanced video editing tools to complex 3D modeling software, WebAssembly is blurring the line between web and native applications.</p>
<h2>Serverless Architecture Goes Mainstream</h2>
<p>Serverless computing has moved beyond early adoption to become a standard approach for many web applications. The ability to build and deploy code without managing infrastructure has dramatically reduced operational complexity and allowed developers to focus on writing code rather than maintaining servers.</p>
<p>Microservices built on serverless functions are now the default architecture for many new web projects, offering improved scalability, reduced costs, and faster development cycles.</p>
<h2>The Rise of Edge Computing</h2>
<p>Edge computing—running code closer to users rather than in centralized data centers—has transformed how web applications deliver content and functionality. By processing data closer to the end user, edge computing reduces latency and improves performance, particularly for users in regions far from traditional data centers.</p>
<p>Content delivery networks (CDNs) have evolved into full application delivery platforms, capable of running complex logic at the edge. This shift has made truly global applications more accessible to developers of all sizes.</p>
<h2>Accessibility as a Fundamental Requirement</h2>
<p>Web accessibility has shifted from a nice-to-have feature to a core requirement. Developers are now integrating accessibility testing into their CI/CD pipelines, ensuring that applications are usable by people with disabilities from the earliest stages of development.</p>
<p>This focus on inclusive design isn't just about compliance with regulations—it's about recognizing that accessible websites provide a better experience for all users, regardless of ability.</p>
<h2>Looking Ahead</h2>
<p>As we look to the future, the pace of innovation in web development shows no signs of slowing. The integration of AR/VR experiences into the web, further advances in AI-assisted development, and new approaches to user interface design will continue to transform how we build and interact with web applications.</p>
<p>The most successful developers will be those who can adapt to these changes while maintaining a focus on creating fast, accessible, and user-friendly experiences. The future of web development is not just about new technologies—it's about using those technologies to solve real problems for users around the world.</p>
`,
category: 'Technology',
date: 'April 12, 2025',
readTime: '5 min read',
author: {
name: 'Alex Morgan',
avatar: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520young%2520technology%2520expert%2520with%2520glasses%2520and%2520a%2520friendly%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph%252C%2520soft%2520lighting%252C%2520professional%2520appearance&width=100&height=100&seq=101&orientation=squarish',
bio: 'Senior Web Developer with 10+ years of experience in frontend technologies. Passionate about creating accessible and performant web experiences.'
},
tags: ['Web Development', 'AI', 'Technology', 'WebAssembly', 'Serverless'],
imageUrl: 'https://readdy.ai/api/search-image?query=Modern%2520web%2520development%2520workspace%2520with%2520sleek%2520computer%2520setup%252C%2520code%2520editor%2520open%2520on%2520screen%252C%2520soft%2520ambient%2520lighting%252C%2520minimalist%2520desk%2520with%2520coffee%2520cup%252C%2520clean%2520and%2520professional%2520environment%252C%2520high%2520resolution&width=1200&height=600&seq=1&orientation=landscape',
comments: [
{
id: 1,
user: {
name: 'Emma Wilson',
avatar: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520woman%2520with%2520short%2520dark%2520hair%2520and%2520a%2520confident%2520expression%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph%252C%2520soft%2520lighting%252C%2520professional%2520appearance&width=50&height=50&seq=102&orientation=squarish'
},
date: 'April 13, 2025',
content: 'Great insights on AI-driven development! I\'ve been using AI assistants for code generation and it\'s been a game-changer for my productivity.',
likes: 8,
replies: [
{
id: 11,
user: {
name: 'Alex Morgan',
avatar: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520young%2520technology%2520expert%2520with%2520glasses%2520and%2520a%2520friendly%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph%252C%2520soft%2520lighting%252C%2520professional%2520appearance&width=50&height=50&seq=101&orientation=squarish'
},
date: 'April 13, 2025',
content: 'Thanks Emma! Which AI tools have you found most helpful in your workflow?',
likes: 3
}
]
},
{
id: 2,
user: {
name: 'David Chen',
avatar: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520man%2520with%2520glasses%2520and%2520a%2520thoughtful%2520expression%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph%252C%2520soft%2520lighting%252C%2520professional%2520appearance&width=50&height=50&seq=103&orientation=squarish'
},
date: 'April 14, 2025',
content: 'The section on WebAssembly really resonated with me. We\'ve been migrating some of our computation-heavy features to Rust + WASM and the performance gains are incredible.',
likes: 12,
replies: []
},
{
id: 3,
user: {
name: 'Sophia Rodriguez',
avatar: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520woman%2520with%2520long%2520hair%2520and%2520a%2520warm%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph%252C%2520soft%2520lighting%252C%2520professional%2520appearance&width=50&height=50&seq=104&orientation=squarish'
},
date: 'April 15, 2025',
content: 'I appreciate the emphasis on accessibility. As developers, we often overlook this crucial aspect. It\'s time we make the web truly inclusive for everyone.',
likes: 15,
replies: []
}
]
};
// Related posts
const relatedPosts = [
{
id: 2,
title: 'Sustainable Design Principles',
excerpt: 'How sustainable design practices are changing the digital landscape and reducing environmental impact.',
category: 'Design',
date: 'April 10, 2025',
readTime: '4 min read',
imageUrl: 'https://readdy.ai/api/search-image?query=Sustainable%2520design%2520concept%2520with%2520eco-friendly%2520materials%252C%2520plants%2520integrated%2520with%2520digital%2520devices%252C%2520natural%2520light%252C%2520recycled%2520elements%252C%2520green%2520technology%252C%2520minimalist%2520aesthetic%252C%2520professional%2520photography&width=400&height=250&seq=2&orientation=landscape'
},
{
id: 3,
title: 'AI in Content Creation',
excerpt: 'Exploring how artificial intelligence is revolutionizing content creation for blogs, social media, and more.',
category: 'AI',
date: 'April 8, 2025',
readTime: '6 min read',
imageUrl: 'https://readdy.ai/api/search-image?query=Artificial%2520intelligence%2520content%2520creation%2520visualization%2520with%2520glowing%2520neural%2520networks%252C%2520digital%2520brain%2520connecting%2520to%2520content%2520formats%252C%2520futuristic%2520interface%252C%2520clean%2520modern%2520aesthetic%252C%2520blue%2520and%2520purple%2520lighting&width=400&height=250&seq=3&orientation=landscape'
},
{
id: 4,
title: 'The Rise of Quantum Computing',
excerpt: 'Discover how quantum computing is set to transform the technology landscape and revolutionize data processing.',
category: 'Technology',
date: 'April 5, 2025',
readTime: '7 min read',
imageUrl: 'https://readdy.ai/api/search-image?query=Quantum%2520computing%2520visualization%2520with%2520abstract%2520quantum%2520bits%2520and%2520circuits%252C%2520futuristic%2520technology%2520concept%252C%2520blue%2520and%2520purple%2520glowing%2520elements%252C%2520clean%2520dark%2520background%252C%2520professional%2520lighting&width=400&height=250&seq=4&orientation=landscape'
},
{
id: 5,
title: 'Cybersecurity Essentials',
excerpt: 'Understanding the fundamentals of cybersecurity and how to protect your digital assets in 2025.',
category: 'Technology',
date: 'April 3, 2025',
readTime: '8 min read',
imageUrl: 'https://readdy.ai/api/search-image?query=Cybersecurity%2520visualization%2520with%2520digital%2520lock%252C%2520shield%2520protection%2520over%2520data%252C%2520blue%2520circuit%2520patterns%252C%2520secure%2520network%2520concept%252C%2520professional%2520lighting%252C%2520clean%2520background%252C%2520high%2520contrast&width=400&height=250&seq=5&orientation=landscape'
}
];
// State for comment form
const [commentText, setCommentText] = useState('');
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
window.scrollTo(0, 0);
}, []);

const scrollToSection = (sectionId: string) => {
const element = document.getElementById(sectionId);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
};

return (
<div className="min-h-screen bg-white">
{/* Navigation Header */}
<header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
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
const element = document.getElementById('overview');
element?.scrollIntoView({ behavior: 'smooth' });
setIsMobileMenuOpen(false);
}} className="text-gray-600 hover:text-gray-900 cursor-pointer">Overview</button>
<button onClick={() => {
const element = document.getElementById('features');
element?.scrollIntoView({ behavior: 'smooth' });
setIsMobileMenuOpen(false);
}} className="text-gray-600 hover:text-gray-900 cursor-pointer">Features</button>
<button onClick={() => {
const element = document.getElementById('benefits');
element?.scrollIntoView({ behavior: 'smooth' });
setIsMobileMenuOpen(false);
}} className="text-gray-600 hover:text-gray-900 cursor-pointer">Benefits</button>
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
const element = document.getElementById('overview');
element?.scrollIntoView({ behavior: 'smooth' });
setIsMobileMenuOpen(false);
}} 
className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
>
Overview
</button>
<button 
onClick={() => {
const element = document.getElementById('features');
element?.scrollIntoView({ behavior: 'smooth' });
setIsMobileMenuOpen(false);
}} 
className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
>
Features
</button>
<button 
onClick={() => {
const element = document.getElementById('benefits');
element?.scrollIntoView({ behavior: 'smooth' });
setIsMobileMenuOpen(false);
}} 
className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
>
Benefits
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
<main className="container mx-auto px-4 py-8">
{/* Back Navigation */}
<div className="mb-6">
<a
href="https://readdy.ai/home/1ff97779-4f5a-4592-b376-399bc1f4d447/b28a97e6-5576-4a50-8df9-ee1ebab8257a"
data-readdy="true"
className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
>
<i className="fas fa-arrow-left mr-2"></i> Back to Blog
</a>
</div>
{/* Article Header */}
<div className="mb-6 flex items-center">
<span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mr-4">{blogPost.category}</span>
<span className="text-sm text-gray-500 flex items-center">
<i className="far fa-clock mr-1"></i> {blogPost.readTime}
</span>
</div>
{/* Featured Image */}
<div className="rounded-xl overflow-hidden mb-8 shadow-md">
<img
src={blogPost.imageUrl}
alt={blogPost.title}
className="w-full h-[500px] object-cover object-top"
/>
</div>
{/* Article Content */}
<div className="flex flex-col lg:flex-row">
{/* Social Sharing Sidebar - Desktop */}
<div className="hidden lg:block lg:w-16 mr-8">
<div className="sticky top-8 flex flex-col items-center space-y-4">
<button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition duration-200 cursor-pointer">
<i className="fab fa-twitter"></i>
</button>
<button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition duration-200 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</button>
<button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition duration-200 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</button>
<button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition duration-200 cursor-pointer">
<i className="fas fa-link"></i>
</button>
<div className="h-px w-8 bg-gray-200 my-2"></div>
<button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition duration-200 cursor-pointer">
<i className="far fa-bookmark"></i>
</button>
<div className="flex flex-col items-center">
<span className="text-lg font-bold text-gray-700">42</span>
<span className="text-xs text-gray-500">Shares</span>
</div>
</div>
</div>
{/* Main Article Content */}
<div className="lg:flex-1">
<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">{blogPost.title}</h1>
{/* Author Info */}
<div className="flex items-center mb-8">
<img
src={blogPost.author.avatar}
alt={blogPost.author.name}
className="w-12 h-12 rounded-full object-cover mr-4"
/>
<div>
<h3 className="font-medium text-gray-800">{blogPost.author.name}</h3>
<div className="flex items-center text-sm text-gray-500">
<span>{blogPost.date}</span>
<span className="mx-2">•</span>
<span>{blogPost.readTime}</span>
</div>
</div>
{/* Social Sharing - Mobile */}
<div className="ml-auto flex lg:hidden space-x-3">
<button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition duration-200 cursor-pointer">
<i className="fab fa-twitter text-sm"></i>
</button>
<button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition duration-200 cursor-pointer">
<i className="fab fa-facebook-f text-sm"></i>
</button>
<button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition duration-200 cursor-pointer">
<i className="fab fa-linkedin-in text-sm"></i>
</button>
</div>
</div>
{/* Article Body */}
<div className="prose prose-lg max-w-none mb-10" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
{/* Tags */}
<div className="mb-10">
<h3 className="text-xl font-bold text-gray-800 mb-4">Tags</h3>
<div className="flex flex-wrap gap-2">
{blogPost.tags.map((tag, index) => (
<span
key={index}
className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
>
{tag}
</span>
))}
</div>
</div>
{/* Related Posts */}
<div className="mb-12">
<h3 className="text-2xl font-bold text-gray-800 mb-8">Related Posts</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{relatedPosts.map((post) => (
<div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200 cursor-pointer">
<div className="h-40 overflow-hidden">
<img
src={post.imageUrl}
alt={post.title}
className="w-full h-full object-cover object-top transition duration-300 hover:scale-105"
/>
</div>
<div className="p-4">
<div className="flex items-center mb-2">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{post.category}</span>
<span className="text-xs text-gray-500 ml-auto">{post.readTime}</span>
</div>
<h3 className="text-md font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
<p className="text-gray-600 text-xs mb-3 line-clamp-2">{post.excerpt}</p>
<button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
Read More <i className="fas fa-arrow-right ml-1"></i>
</button>
</div>
</div>
))}
</div>
</div>
{/* Comments Section */}
<div>
<h3 className="text-2xl font-bold text-gray-800 mb-8">
Comments <span className="text-gray-500">({blogPost.comments.length})</span>
</h3>
{/* Comment Form */}
<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
<h4 className="text-xl font-semibold text-gray-800 mb-6">Leave a Comment</h4>
<textarea
rows={4}
placeholder="Write your comment here..."
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
value={commentText}
onChange={(e) => setCommentText(e.target.value)}
></textarea>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200 !rounded-button whitespace-nowrap cursor-pointer">
Post Comment
</button>
</div>
{/* Comments List */}
<div className="space-y-6">
{blogPost.comments.map((comment) => (
<div key={comment.id} className="bg-white rounded-lg shadow-sm p-6">
<div className="flex items-start">
<img
src={comment.user.avatar}
alt={comment.user.name}
className="w-10 h-10 rounded-full object-cover mr-4"
/>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h4 className="font-medium text-gray-800">{comment.user.name}</h4>
<span className="text-xs text-gray-500">{comment.date}</span>
</div>
<p className="text-gray-700 mb-3">{comment.content}</p>
<div className="flex items-center text-sm">
<button className="text-gray-500 hover:text-blue-600 mr-4 cursor-pointer">
<i className="far fa-thumbs-up mr-1"></i> {comment.likes}
</button>
<button className="text-gray-500 hover:text-blue-600 cursor-pointer">
<i className="far fa-comment mr-1"></i> Reply
</button>
</div>
{/* Replies */}
{comment.replies.length > 0 && (
<div className="mt-4 pl-4 border-l-2 border-gray-100 space-y-4">
{comment.replies.map((reply) => (
<div key={reply.id} className="pt-4">
<div className="flex items-start">
<img
src={reply.user.avatar}
alt={reply.user.name}
className="w-8 h-8 rounded-full object-cover mr-3"
/>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h5 className="font-medium text-gray-800 text-sm">{reply.user.name}</h5>
<span className="text-xs text-gray-500">{reply.date}</span>
</div>
<p className="text-gray-700 text-sm mb-2">{reply.content}</p>
<div className="flex items-center text-xs">
<button className="text-gray-500 hover:text-blue-600 cursor-pointer">
<i className="far fa-thumbs-up mr-1"></i> {reply.likes}
</button>
</div>
</div>
</div>
</div>
))}
</div>
)}
</div>
</div>
</div>
))}
</div>
{/* Load More Comments */}
<div className="mt-8 text-center">
<button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
Load More Comments
</button>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-gray-900 text-white py-16 mt-12">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<img src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/4325162faa1bad1356c87e2c93cf9dc4.png" alt="Wizer AI" className="h-8 mb-6" />
<p className="text-gray-400 mb-8 max-w-md">Wizer AI is a cutting-edge platform that leverages artificial intelligence to revolutionize content creation and management.</p>
<div className="flex space-x-6">
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-twitter text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-facebook text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-instagram text-xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-linkedin text-xl"></i>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-semibold mb-6">Company</h3>
<ul className="space-y-4">
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About Us</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Careers</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Blog</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Press</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-6">Resources</h3>
<ul className="space-y-4">
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Documentation</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Help Center</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">© 2025 Wizer AI. All rights reserved.</p>
<div className="flex items-center space-x-4 mt-4 md:mt-0">
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-cc-visa text-2xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-cc-mastercard text-2xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-cc-paypal text-2xl"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fab fa-cc-amex text-2xl"></i>
</a>
</div>
</div>
</div>
</footer>
{/* Back to Top Button */}
<button className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none cursor-pointer">
<i className="fas fa-arrow-up"></i>
</button>
</div>
);
};
export default BlogPost
