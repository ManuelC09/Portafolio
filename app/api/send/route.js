import { Resend } from 'resend';

export async function POST(req) {
  try {

    const { email, asunto, mensaje, token } = await req.json();

   
    if (!token) {
      return new Response(
        JSON.stringify({ message: 'Turnstile token missing' }),
        { status: 400 }
      );
    }

    const userIp = req.headers.get('CF-Connecting-IP');
    
    const secretKey = process.env.TURNSTILE_SECRET_KEY; 
    if (!secretKey) {
      throw new Error('Falta la clave secreta de Turnstile en las variables de entorno');
    }

    // Petición a la API de Turnstile
    const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    formData.append('remoteip', userIp);

    const turnstileRes = await fetch(verifyUrl, {
      method: 'POST',
      body: formData,
    });

    const turnstileData = await turnstileRes.json();
    if (!turnstileData.success) {
     
      console.error('Turnstile validation failed:', turnstileData['error-codes']);
      return new Response(
        JSON.stringify({ 
          message: 'Invalid Turnstile token', 
          error: turnstileData['error-codes'] || 'Unknown error' 
        }),
        { status: 403 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: process.env.EMAIL_RECEIVER,
      subject: asunto,
      html: `<p>Mensaje de: ${email}</p><p>${mensaje}</p>`,
    });


    if (response && !response.error) {
      return new Response(
        JSON.stringify({ message: 'Email sent successfully!' }),
        { status: 200 }
      );
    } else {
      throw new Error('Failed to send email via Resend');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email', error: error.message }),
      { status: 500 }
    );
  }
}
