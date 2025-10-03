'use client'
import { useEffect, useState } from 'react'
export default function Account(){
  const [sub, setSub] = useState(null)
  useEffect(()=> {
    fetch('/api/user/subscription').then(r=>r.json()).then(d=>setSub(d)).catch(()=>setSub(null))
  },[])
  return (
    <main style={{maxWidth:800, margin:'48px auto', padding:20}}>
      <h1>Account</h1>
      {sub && sub.status ? (
        <div>
          <p>Subscription status: <b>{sub.status}</b></p>
          <p>Plan: <b>{sub.priceId || 'none'}</b></p>
        </div>
      ) : <p>No subscription found.</p>}
    </main>
  )
}
