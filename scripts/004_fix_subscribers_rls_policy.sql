-- Fix RLS policy for subscribers table to allow anonymous inserts
-- This allows the newsletter subscription to work properly

-- Enable RLS on subscribers table (if not already enabled)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous inserts" ON subscribers;
DROP POLICY IF EXISTS "Allow public inserts" ON subscribers;

-- Create policy to allow anonymous users to insert email subscriptions
CREATE POLICY "Allow anonymous newsletter subscriptions" ON subscribers
FOR INSERT TO anon
WITH CHECK (true);

-- Optional: Create policy to allow service role to read all subscribers (for admin interface)
DROP POLICY IF EXISTS "Allow service role to read" ON subscribers;
CREATE POLICY "Allow service role to read subscribers" ON subscribers
FOR SELECT TO service_role
USING (true);
