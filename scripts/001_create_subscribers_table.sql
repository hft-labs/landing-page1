-- Create subscribers table for newsletter subscriptions
CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies - for this use case, we'll allow public inserts but restrict reads
CREATE POLICY "Allow public to subscribe" ON public.subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Only allow reading for authenticated users (admin access)
CREATE POLICY "Allow authenticated users to read subscribers" ON public.subscribers 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
