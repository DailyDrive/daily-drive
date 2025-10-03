import { NextResponse } from 'next/server'
// This route expects NextAuth to be configured; for now it returns a placeholder
export async function GET(){
  // Placeholder response until you set up NextAuth/DB
  return NextResponse.json({ status: 'none' })
}
