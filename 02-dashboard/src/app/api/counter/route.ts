import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log({ method: request.method });

  return NextResponse.json({
    method: 'GET',
    count: 105,
  });
}

export async function POST(request: Request) {
  console.log({ method: request.method });
  const resp = await request.json();

  return NextResponse.json({
    method: 'POST',
    count: 100,
    resp,
  });
}
