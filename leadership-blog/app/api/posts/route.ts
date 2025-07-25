import { NextResponse } from 'next/server';
import serverClient from '@/_trpc/serverClient';

export async function GET() {
  try {
    const posts = await serverClient.post.getAll();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error al obtener posts:', error);
    return NextResponse.json(
      { error: 'Error al obtener los posts' },
      { status: 500 },
    );
  }
}
