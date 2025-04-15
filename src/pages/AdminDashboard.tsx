import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import type { ContactSubmission, PartnershipRequest } from '../types/database';
import Notification from '../components/Notification';

const AdminDashboard: React.FC = () => {
  const { user, loading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<'contacts' | 'partnerships'>('contacts');
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [partnerships, setPartnerships] = useState<PartnershipRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  // If not authenticated, redirect to login
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'contacts') {
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setContacts(data || []);
      } else {
        const { data, error } = await supabase
          .from('partnership_requests')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setPartnerships(data || []);
      }
    } catch (err) {
      setNotification({
        type: 'error',
        message: 'Failed to fetch data. Please try again.',
      });
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string, type: 'contact' | 'partnership') => {
    try {
      const table = type === 'contact' ? 'contact_submissions' : 'partnership_requests';
      const { error } = await supabase
        .from(table)
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setNotification({
        type: 'success',
        message: 'Status updated successfully',
      });
      fetchData();
    } catch (err) {
      setNotification({
        type: 'error',
        message: 'Failed to update status. Please try again.',
      });
      console.error('Error updating status:', err);
    }
  };

  const handleExport = () => {
    const data = activeTab === 'contacts' ? contacts : partnerships;
    const filteredData = filterData(data);
    const csv = convertToCSV(filteredData);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTab}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const convertToCSV = (data: any[]) => {
    const headers = Object.keys(data[0] || {}).join(',');
    const rows = data.map(item => Object.values(item).join(','));
    return [headers, ...rows].join('\n');
  };

  const filterData = (data: any[]) => {
    return data.filter(item => {
      const searchMatch = 
        searchTerm === '' ||
        item.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchTerm.toLowerCase());

      const statusMatch = 
        statusFilter === 'all' || 
        item.status === statusFilter;

      const date = new Date(item.created_at);
      const now = new Date();
      let dateMatch = true;

      if (dateFilter === 'today') {
        dateMatch = date.toDateString() === now.toDateString();
      } else if (dateFilter === 'week') {
        const weekAgo = new Date(now.setDate(now.getDate() - 7));
        dateMatch = date >= weekAgo;
      } else if (dateFilter === 'month') {
        const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
        dateMatch = date >= monthAgo;
      }

      return searchMatch && statusMatch && dateMatch;
    });
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const filteredData = activeTab === 'contacts' 
    ? filterData(contacts)
    : filterData(partnerships);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => signOut()}
                className="ml-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        )}

        <div className="mb-6">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'contacts'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Contact Submissions
            </button>
            <button
              onClick={() => setActiveTab('partnerships')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'partnerships'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Partnership Requests
            </button>
          </nav>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Statuses</option>
              {activeTab === 'contacts' ? (
                <>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="contacted">Contacted</option>
                  <option value="archived">Archived</option>
                </>
              ) : (
                <>
                  <option value="pending">Pending</option>
                  <option value="reviewing">Reviewing</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </>
              )}
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>

            <button
              onClick={handleExport}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Export CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {activeTab === 'contacts' ? 'Subject' : 'Type'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item: any) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.first_name} {item.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {activeTab === 'contacts' ? item.subject : item.partnership_type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${activeTab === 'contacts'
                          ? item.status === 'reviewed' ? 'bg-green-100 text-green-800'
                            : item.status === 'contacted' ? 'bg-blue-100 text-blue-800'
                            : item.status === 'archived' ? 'bg-gray-100 text-gray-800'
                            : 'bg-yellow-100 text-yellow-800'
                          : item.status === 'approved' ? 'bg-green-100 text-green-800'
                            : item.status === 'rejected' ? 'bg-red-100 text-red-800'
                            : item.status === 'reviewing' ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {item.status || 'pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <select
                        value={item.status || 'pending'}
                        onChange={(e) => updateStatus(item.id, e.target.value, activeTab === 'contacts' ? 'contact' : 'partnership')}
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        {activeTab === 'contacts' ? (
                          <>
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="contacted">Contacted</option>
                            <option value="archived">Archived</option>
                          </>
                        ) : (
                          <>
                            <option value="pending">Pending</option>
                            <option value="reviewing">Reviewing</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </>
                        )}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 