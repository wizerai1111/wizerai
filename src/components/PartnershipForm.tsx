import React, { useState } from 'react';
import { useForm } from '../context/FormContext';
import { supabase } from '../lib/supabaseClient';
import type { PartnershipRequest } from '../types/database';
import Notification from './Notification';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  partnershipType?: string;
  message?: string;
  privacy?: string;
}

const PartnershipForm: React.FC = () => {
  const { showPartnershipForm, setShowPartnershipForm } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const email = formData.get('email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.get('firstName')) {
      errors.firstName = 'First name is required';
    }
    if (!formData.get('lastName')) {
      errors.lastName = 'Last name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.get('partnershipType')) {
      errors.partnershipType = 'Please select a partnership type';
    }
    if (!formData.get('message')) {
      errors.message = 'Message is required';
    } else if ((formData.get('message') as string).length < 50) {
      errors.message = 'Please provide more details about your partnership proposal (minimum 50 characters)';
    }
    if (!formData.get('privacy')) {
      errors.privacy = 'You must agree to the privacy policy and terms';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setNotification(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const data: PartnershipRequest = {
      first_name: formData.get('firstName') as string,
      last_name: formData.get('lastName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || undefined,
      partnership_type: formData.get('partnershipType') as PartnershipRequest['partnership_type'],
      message: formData.get('message') as string,
      agreed_to_terms: formData.get('privacy') === 'on',
      created_at: new Date().toISOString()
    };

    try {
      const { error } = await supabase
        .from('partnership_requests')
        .insert([data]);

      if (error) throw error;

      setNotification({
        type: 'success',
        message: 'Thank you for your partnership request! We\'ll review it and get back to you soon.'
      });
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setShowPartnershipForm(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting partnership request:', error);
      setNotification({
        type: 'error',
        message: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPartnershipForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col">
        <div className="p-8 overflow-y-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Partner With Us</h2>
            <p className="text-gray-600 mt-2">
              Join us in shaping the future of human-centered AI technology
            </p>
          </div>

          {notification && (
            <Notification
              type={notification.type}
              message={notification.message}
              onClose={() => setNotification(null)}
            />
          )}

          {/* Why Partner With Us Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Partner With Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                <span className="text-gray-600">Access to cutting-edge AI technology focused on human connection</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                <span className="text-gray-600">Collaborate on projects that make a real difference in people's lives</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                <span className="text-gray-600">Join a network of forward-thinking organizations and individuals</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 mt-1 mr-2"></i>
                <span className="text-gray-600">Shape the future of ethical AI development and implementation</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.firstName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.lastName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
              <select
                id="partnershipType"
                name="partnershipType"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.partnershipType ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select partnership type</option>
                <option value="technology">Technology Partnership</option>
                <option value="research">Research Collaboration</option>
                <option value="implementation">Implementation Partner</option>
                <option value="community">Community Organization</option>
                <option value="other">Other</option>
              </select>
              {errors.partnershipType && (
                <p className="mt-1 text-sm text-red-600">{errors.partnershipType}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How would you like to partner with us?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your organization and how you envision partnering with us..."
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${
                  errors.privacy ? 'border-red-300' : ''
                }`}
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                I agree to the privacy policy and terms of partnership
              </label>
            </div>
            {errors.privacy && (
              <p className="text-sm text-red-600">{errors.privacy}</p>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-8 py-3 text-white rounded-md transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
              </button>
            </div>
          </form>
        </div>
        <button 
          onClick={() => setShowPartnershipForm(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          disabled={isSubmitting}
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default PartnershipForm; 