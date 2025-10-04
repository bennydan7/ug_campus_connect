import React from 'react'
import ProtectedClient from '@/components/ProtectedClient'

export default function OrganizerPage() {
  return (
    <ProtectedClient>
      <div className="min-h-screen bg-background/50 pb-12">
        <div className="container mx-auto py-8">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">Organizer dashboard</h2>
            <p className="mt-2 text-sm text-muted-foreground">Create and manage your events here.</p>

            <div className="mt-6">
              <a href="/organizer/create" className="rounded-full bg-primary px-4 py-2 text-primary-foreground font-semibold">Create Event</a>
            </div>
          </div>
        </div>
      </div>
    </ProtectedClient>
  )
}
