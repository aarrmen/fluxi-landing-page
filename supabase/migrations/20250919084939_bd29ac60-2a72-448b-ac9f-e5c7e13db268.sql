-- Create surveys table for contact form submissions
CREATE TABLE public.surveys (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  business_type TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.surveys ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since it's a public contact form)
CREATE POLICY "Anyone can submit survey" 
ON public.surveys 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading (optional, you can remove this if you don't want data readable)
CREATE POLICY "Surveys are readable by everyone" 
ON public.surveys 
FOR SELECT 
USING (true);