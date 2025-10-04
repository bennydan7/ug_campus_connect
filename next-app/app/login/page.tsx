"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [unauthorized, setUnauthorized] = useState(false)

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      if (params.get('unauthorized')) setUnauthorized(true)
    } catch {}
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl bg-white shadow-lg p-8">
        {unauthorized && (
          <div className="rounded-md border-l-4 border-destructive/80 bg-destructive/10 p-3 text-sm text-destructive">
            You must be logged in to access that page. Please sign in.
          </div>
        )}

        <h2 className="mt-4 text-2xl font-extrabold">Login</h2>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to manage your events.</p>

        <form className="mt-6 space-y-4">
          <label className="block text-sm">
            <div className="mb-1 text-sm font-medium">University email</div>
            <input placeholder="you@university.edu" className="w-full rounded-lg border px-4 py-2 outline-none" />
          </label>

          <label className="block text-sm">
            <div className="mb-1 text-sm font-medium">Password</div>
            <input type="password" placeholder="Enter password" className="w-full rounded-lg border px-4 py-2 outline-none" />
          </label>

          <div className="flex items-center justify-between">
            <div />
            <button type="submit" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground">Login</button>
          </div>
        </form>

        <div className="pt-4 text-center text-sm text-muted-foreground">
          Don't have an account? <Link href="/signup" className="text-primary underline">Sign up</Link>
        </div>
      </div>
    </div>
  )
}
