import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { reference } = await req.json();
  const secretKey = process.env.PAYSTACK_SECRET_KEY; // store in .env

  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${secretKey}`,
    },
  });
  const data = await response.json();
  if (data.status && data.data.status === 'success') {
    // Payment verified – save order to database, send confirmation email, etc.
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}