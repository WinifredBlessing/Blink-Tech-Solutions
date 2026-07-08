const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env file');
}

// NOTE: For a Node.js backend acting as a trusted admin server, 
// it's recommended to use the SUPABASE_SERVICE_ROLE_KEY for SUPABASE_KEY
// to bypass Row Level Security, since your Express app handles authorization.
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
