import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await res.json();
    return NextResponse.json(users);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}