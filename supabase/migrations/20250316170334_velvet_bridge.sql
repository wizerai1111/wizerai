/*
  # Add images support

  1. Create Storage Bucket
    - Create a public bucket for storing images
  2. Enable RLS
    - Allow public access for viewing images
    - Allow authenticated users to upload images
*/

-- Enable storage
INSERT INTO storage.buckets (id, name, public)
VALUES ('public', 'public', true);

-- Set up RLS policies for the storage bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'public');

CREATE POLICY "Auth users can upload"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'public');