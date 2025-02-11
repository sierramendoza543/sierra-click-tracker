import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzagdmf0QLxynIaQkOhuLZqkAXKmKDdb-7_ibhHJhVQhVAnbaFjPzpSyMn8JvEZtqDwQg/exec';

export async function POST() {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to log click');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to log click' }, { status: 500 });
  }
} 