import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const client = new SmtpClient();

    await client.connectTLS({
      hostname: Deno.env.get('SMTP_HOSTNAME') ?? '',
      port: parseInt(Deno.env.get('SMTP_PORT') ?? '587'),
      username: Deno.env.get('SMTP_USERNAME') ?? '',
      password: Deno.env.get('SMTP_PASSWORD') ?? '',
    });

    const { type, record } = await req.json()

    let subject = ''
    let body = ''

    if (type === 'contact') {
      subject = `New Contact Form Submission from ${record.first_name} ${record.last_name}`
      body = `
        New contact form submission:
        
        Name: ${record.first_name} ${record.last_name}
        Email: ${record.email}
        Company: ${record.company || 'N/A'}
        Subject: ${record.subject}
        Message: ${record.message}
        
        View all submissions in the admin dashboard: ${Deno.env.get('APP_URL')}/admin
      `
    } else if (type === 'partnership') {
      subject = `New Partnership Request from ${record.first_name} ${record.last_name}`
      body = `
        New partnership request:
        
        Name: ${record.first_name} ${record.last_name}
        Email: ${record.email}
        Company: ${record.company || 'N/A'}
        Partnership Type: ${record.partnership_type}
        Message: ${record.message}
        
        View all requests in the admin dashboard: ${Deno.env.get('APP_URL')}/admin
      `
    }

    await client.send({
      from: Deno.env.get('SMTP_FROM') ?? '',
      to: Deno.env.get('NOTIFICATION_EMAIL') ?? '',
      subject,
      content: body,
    });

    await client.close();

    return new Response(
      JSON.stringify({ message: 'Notification sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
}) 