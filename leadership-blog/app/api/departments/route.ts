import { NextResponse } from 'next/server';
import serverClient from '@/_trpc/serverClient';

export async function GET() {
  try {
    const departments = await serverClient.department.getAll();
    return NextResponse.json(departments);
  } catch (error) {
    console.error('Error al obtener departamentos:', error);
    return NextResponse.json(
      { error: 'Error al obtener los departamentos' },
      { status: 500 },
    );
  }
}
