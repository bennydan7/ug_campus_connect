"use client"

import Link from 'next/link'
import { GraduationCap, Search, CalendarDays, Bell, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur py-3">
      <div className="container mx-auto flex items-center gap-3 px-4">
        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight">UG Campus Connect</div>
            <div className="text-xs text-muted-foreground">Discover • Join • Connect</div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground shadow hover:brightness-95">
            <CalendarDays className="h-5 w-5" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground shadow hover:brightness-95">
            <Bell className="h-5 w-5" />
          </button>

          <div className="relative">
            <button onClick={() => setMenuOpen(v => !v)} className="hidden h-10 w-10 items-center justify-center rounded-full bg-muted shadow hover:brightness-95 md:flex">
              <Menu className="h-5 w-5 text-foreground" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-12 z-50 w-56 rounded-xl bg-white p-3 shadow">
                <div className="flex flex-col gap-2">
                  <Link href="/login" className="text-left rounded-md px-3 py-2 text-sm hover:bg-muted/50">Login</Link>
                  <Link href="/signup" className="text-left rounded-md px-3 py-2 text-sm hover:bg-muted/50">Sign up</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
