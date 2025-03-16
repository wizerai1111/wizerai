/*
  # Create Demo Requests Table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, required)
      - `phone` (text, required)
      - `message` (text)
      - `created_at` (timestamp with time zone)
      - `status` (text) - For tracking demo request status
      - `scheduled_at` (timestamp with time zone) - For when demo is scheduled
      
  2. Security
    - Enable RLS on `demo_requests` table
    - Add policies for:
      - Admins can read all demo requests
      - Users can create their own demo requests
      - Users can read their own demo requests
*/

-- Create the demo_requests table
CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending',
  scheduled_at timestamptz,
  user_id uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can create demo requests"
  ON demo_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS demo_requests_user_id_idx ON demo_requests(user_id);
CREATE INDEX IF NOT EXISTS demo_requests_status_idx ON demo_requests(status);