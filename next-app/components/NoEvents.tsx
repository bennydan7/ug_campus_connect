import React from 'react'
import { AlertTriangle } from 'lucide-react'

export default function NoEvents() {
  return (
    <div className="grid place-items-center rounded-3xl border bg-white p-12 text-center shadow-sm">
      <AlertTriangle className="h-12 w-12 text-destructive/80 mx-auto" />
      <h3 className="mt-4 text-lg font-semibold">No events available right now</h3>
      <p className="mt-2 text-sm text-muted-foreground">Check back later or create your own event!</p>
      <div className="mt-4">
        <a href="/signup" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Create an event</a>
      </div>
    </div>
  )
}
