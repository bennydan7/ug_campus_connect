import { CalendarClock, MapPin } from "lucide-react";

export interface EventItem {
  id: string;
  title: string;
  dateISO: string; // e.g., 2025-10-12
  time: string; // e.g., 5:30 PM - 7:00 PM
  location: string;
  category: "Academic" | "Social" | "Sports" | "Career" | "Arts" | "Health";
  bannerUrl: string;
  attendees?: number;
}

function formatDate(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-card shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.10)]">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img src={event.bannerUrl} alt={event.title} className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow">
          {event.category}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug">{event.title}</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2.5 py-1 text-secondary-foreground">
            <CalendarClock className="h-4 w-4" />
            <span>
              {formatDate(event.dateISO)} • {event.time}
            </span>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-accent">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Footer: attendees + RSVP */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary/70 border-2 border-white" />
              <div className="h-8 w-8 rounded-full bg-secondary/70 border-2 border-white" />
              <div className="h-8 w-8 rounded-full bg-accent/70 border-2 border-white" />
            </div>
            <div className="text-sm text-muted-foreground">
              {event.attendees ? `+${event.attendees} attending` : "—"}
            </div>
          </div>
          <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:brightness-95">
            RSVP
          </button>
        </div>
      </div>
    </article>
  );
}
