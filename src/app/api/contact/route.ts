import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a production setup with RESEND_API_KEY, emails can be dispatched directly
    // If RESEND_API_KEY is present:
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['rajanpa8989@gmail.com'],
            subject: `New Portfolio Message from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
          }),
        });
        if (!res.ok) {
          console.warn('Resend API returned non-200:', await res.text());
        }
      } catch (err) {
        console.error('Error forwarding to Resend:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Transmission received successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server processing error' },
      { status: 500 }
    );
  }
}
