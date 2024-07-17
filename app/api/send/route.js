import { Resend } from 'resend';

export async function POST(req) {
  try {
    const { email, asunto, mensaje } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Sending email from:', 'onboarding@resend.dev');
    console.log('Sending email to:', process.env.EMAIL_RECEIVER);
    console.log('Resend API Key:', process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // Reemplaza con tu dirección de remitente válida
      to: process.env.EMAIL_RECEIVER,
      subject: asunto,
      html: `<p>Mensaje de: ${email}</p><p>${mensaje}</p>`,
    });

    console.log('Resend response:', response);

    if (response && !response.error) {
      return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
  }
}
