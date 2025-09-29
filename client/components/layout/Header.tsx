import { useSearch } from "@/context/SearchContext";
import { Bell, CalendarDays, GraduationCap, Menu, Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { query, setQuery } = useSearch();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center gap-3 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight">UG Campus Connect</div>
            <div className="text-xs text-muted-foreground">Discover • Join • Connect</div>
          </div>
        </div>

        {/* Search */}
        <div className="ml-auto hidden min-w-[280px] max-w-xl flex-1 items-center md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, clubs, locations..."
              className="w-full rounded-full border bg-white/70 px-10 py-2 text-sm shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="ml-2 flex items-center gap-2">
          <button onClick={() => { window.location.href = '/calendar'; }} className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground shadow hover:brightness-95">
            <CalendarDays className="h-5 w-5" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground shadow hover:brightness-95">
            <Bell className="h-5 w-5" />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shadow hover:brightness-105 md:hidden"
            onClick={() => setMobileSearchOpen((v) => !v)}
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-muted shadow hover:brightness-95 md:flex">
            <Menu className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {mobileSearchOpen && (
        <div className="container mx-auto pb-3 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, clubs, locations..."
              className="w-full rounded-full border bg-white/70 px-10 py-2 text-sm shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      )}
    </header>
  );
}
