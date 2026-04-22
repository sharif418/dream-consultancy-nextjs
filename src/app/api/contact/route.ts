import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically integrate with Nodemailer, SendGrid, Resend, or Web3Forms
    // For now, since the user wants a static-compatible API or basic working endpoint without SMTP provided,
    // we just log it and return 200 OK.
    console.log('Received contact submission:', body);
    
    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
