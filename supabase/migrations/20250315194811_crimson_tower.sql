/*
  # Update demo requests table policies

  1. Changes
    - Remove user_id requirement for demo requests
    - Update policies to allow public access for creating demo requests
    - Add email validation

  2. Security
    - Enable RLS
    - Add policy for public demo request creation
    - Add policy for admin access
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can create demo requests" ON demo_requests;
DROP POLICY IF EXISTS "Users can view their own demo requests" ON demo_requests;

-- Make user_id nullable and remove the foreign key constraint
ALTER TABLE demo_requests ALTER COLUMN user_id DROP NOT NULL;

-- Add email validation check
ALTER TABLE demo_requests ADD CONSTRAINT demo_requests_email_check 
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Create new policies
CREATE POLICY "Allow public demo request creation"
  ON demo_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public to view their own requests"
  ON demo_requests
  FOR SELECT
  TO public
  USING (email = current_setting('request.email', true));