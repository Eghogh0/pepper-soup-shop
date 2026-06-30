import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'subscribers.json');

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    let subscribers: string[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      subscribers = JSON.parse(data);
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 });
    }

    subscribers.push(email);
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}