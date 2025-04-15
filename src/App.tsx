import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vision2030 from './pages/Vision2030';
import AskTheGuru from './pages/AskTheGuru';
import Essence from './pages/Essence';
import ProductDetails from './pages/ProductDetails';
import BlogPost from './pages/BlogPost';
import CMSBlog from './pages/CMSBlog';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import { FormProvider } from './context/FormContext';
import { AuthProvider } from './context/AuthContext';
import PartnershipForm from './components/PartnershipForm';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <FormProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision-2030" element={<Vision2030 />} />
            <Route path="/ask-the-guru" element={<AskTheGuru />} />
            <Route path="/essence" element={<Essence />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/blog-post" element={<BlogPost />} />
            <Route path="/cms-blog" element={<CMSBlog />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <PartnershipForm />
        </FormProvider>
      </AuthProvider>
    </Router>
  );
};

export default App; 