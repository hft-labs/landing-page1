-- Fix RLS policy for newsletter subscriptions
-- This allows anonymous users to insert email subscriptions

-- First, ensure RLS is enabled on the subscribers table
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow anonymous newsletter signups" ON subscribers;
DROP POLICY IF EXISTS "Allow service role to read subscribers" ON subscribers;

-- Create policy to allow anonymous users to insert newsletter subscriptions
CREATE POLICY "Allow anonymous newsletter signups" ON subscribers
FOR INSERT TO anon
WITH CHECK (true);

-- Create policy to allow service role to read all subscribers (for admin interface)
CREATE POLICY "Allow service role to read subscribers" ON subscribers
FOR SELECT TO service_role
USING (true);

-- Grant necessary permissions
GRANT INSERT ON subscribers TO anon;
GRANT SELECT ON subscribers TO service_role;
