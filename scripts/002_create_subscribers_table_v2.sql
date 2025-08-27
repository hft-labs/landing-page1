-- Create subscribers table for newsletter subscriptions (Version 2)
-- This script ensures the table exists and handles any potential issues

-- Drop table if it exists (for clean recreation)
DROP TABLE IF EXISTS public.subscribers;

-- Create subscribers table
CREATE TABLE public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies - allow public inserts but restrict reads
CREATE POLICY "Allow public to subscribe" ON public.subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Only allow reading for authenticated users (admin access)
CREATE POLICY "Allow authenticated users to read subscribers" ON public.subscribers 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Insert a test record to verify table creation
INSERT INTO public.subscribers (email) VALUES ('test@example.com') ON CONFLICT (email) DO NOTHING;
