import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-2xl bg-white shadow-lg p-8 text-center">
        <h1 className="text-3xl font-extrabold">Oops! Page not found.</h1>
        <p className="mt-2 text-sm text-muted-foreground">We couldn't find the page you were looking for.</p>
        <div className="mt-6">
          <Link href="/" className="rounded-full bg-primary px-4 py-2 text-primary-foreground font-semibold">Back to home</Link>
        </div>
      </div>
    </div>
  )
}
