import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { events as allEvents } from "@/data/events";

function parseTimeRangeToMinutes(range: string) {
  // range like "6:00 PM - 8:00 PM" or "18:00 - 20:00"
  const parts = range.split("-").map((s) => s.trim());
  if (parts.length !== 2) return null;

  const parsePart = (p: string) => {
    // try parse like "6:00 PM"
    const m = p.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
    if (!m) return null;
    let hour = parseInt(m[1], 10);
    const minute = parseInt(m[2], 10);
    const ampm = m[3]?.toUpperCase();
    if (ampm) {
      if (ampm === "PM" && hour !== 12) hour += 12;
      if (ampm === "AM" && hour === 12) hour = 0;
    }
    return hour * 60 + minute;
  };

  const start = parsePart(parts[0]);
  const end = parsePart(parts[1]);
  if (start == null || end == null) return null;
  return { start, end };
}

export default function LiveEvents() {
  const now = new Date();
  const todayISO = now.toISOString().slice(0, 10);

  const { liveNow, today } = useMemo(() => {
    const todays = allEvents.filter((e) => e.dateISO === todayISO);
    const live = todays.filter((e) => {
      if (!e.time) return false;
      const parsed = parseTimeRangeToMinutes(e.time);
      if (!parsed) return false;
      const minutesNow = now.getHours() * 60 + now.getMinutes();
      // handle ranges that cross midnight
      if (parsed.start <= parsed.end) {
        return minutesNow >= parsed.start && minutesNow <= parsed.end;
      }
      return minutesNow >= parsed.start || minutesNow <= parsed.end;
    });
    return { liveNow: live, today: todays };
  }, [now]);

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h4 className="text-sm font-semibold">Live events</h4>
      <p className="text-xs text-muted-foreground mt-1">Ongoing events happening right now</p>

      <div className="mt-3 space-y-3">
        {liveNow.length > 0 ? (
          liveNow.map((e) => (
            <Link to={`/events/${e.id}`} key={e.id} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted/50">
              <img src={e.bannerUrl} alt={e.title} className="h-10 w-16 rounded-md object-cover" />
              <div className="flex-1">
                <div className="text-sm font-medium">{e.title}</div>
                <div className="text-xs text-muted-foreground">{e.time} • {e.location}</div>
              </div>
              <div className="text-xs rounded-full bg-destructive/80 px-2 py-1 text-destructive-foreground">LIVE</div>
            </Link>
          ))
        ) : today.length > 0 ? (
          // show today's events if none live now
          today.map((e) => (
            <Link to={`/events/${e.id}`} key={e.id} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted/50">
              <img src={e.bannerUrl} alt={e.title} className="h-10 w-16 rounded-md object-cover" />
              <div className="flex-1">
                <div className="text-sm font-medium">{e.title}</div>
                <div className="text-xs text-muted-foreground">{e.time} • {e.location}</div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">No live events right now. Check back later.</div>
        )}
      </div>
    </div>
  );
}
