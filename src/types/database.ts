export interface ContactSubmission {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: 'pending' | 'reviewed' | 'contacted' | 'archived';
}

export interface PartnershipRequest {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  partnership_type: 'technology' | 'research' | 'implementation' | 'community' | 'other';
  message: string;
  created_at?: string;
  status?: 'pending' | 'reviewing' | 'approved' | 'rejected';
  agreed_to_terms: boolean;
} 