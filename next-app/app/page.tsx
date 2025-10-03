import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto rounded-2xl bg-white shadow-lg p-8">
        <h1 className="text-3xl font-extrabold">Discover campus events</h1>
        <p className="mt-2 text-sm text-muted-foreground">Academic. Social. Sports. Career — find your next opportunity.</p>
        <div className="mt-6">
          <Link href="/signup" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground">Sign Up</Link>
        </div>
      </div>
    </section>
  )
}
