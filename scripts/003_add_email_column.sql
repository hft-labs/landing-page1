-- Add missing email column to subscribers table
ALTER TABLE public.subscribers 
ADD COLUMN IF NOT EXISTS email TEXT UNIQUE NOT NULL;

-- Add subscribed_at column for better tracking
ALTER TABLE public.subscribers 
ADD COLUMN IF NOT EXISTS subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Enable RLS if not already enabled
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.subscribers;
DROP POLICY IF EXISTS "Allow service role reads" ON public.subscribers;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" ON public.subscribers
  FOR INSERT WITH CHECK (true);
  
-- Create policy to allow admin reads
CREATE POLICY "Allow service role reads" ON public.subscribers
  FOR SELECT USING (auth.role() = 'service_role');
