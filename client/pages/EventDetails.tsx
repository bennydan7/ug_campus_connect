import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { events as allEvents } from "@/data/events";
import EventCard from "@/components/EventCard";
import { CalendarClock, MapPin } from "lucide-react";

export default function EventDetails() {
  const { id } = useParams();
  const event = allEvents.find((e) => e.id === id);
  const [rsvped, setRsvped] = useState(false);

  if (!event) {
    return (
      <div className="container mx-auto py-20">
        <div className="rounded-xl bg-white p-8 text-center shadow">
          <h2 className="text-xl font-semibold">Event not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn't find the event you're looking for.
          </p>
          <div className="mt-4">
            <Link to="/" className="text-primary underline">
              Return home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const related = allEvents
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-background/50 pb-12">
      <div className="container mx-auto py-8">
        <div className="rounded-2xl bg-white p-0 shadow overflow-hidden">
          {/* Banner */}
          <div className="relative h-64 w-full">
            <img
              src={event.bannerUrl}
              alt={event.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow">
              {event.category}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
            {/* Main content */}
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-2xl font-extrabold">{event.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-2 text-secondary-foreground">
                  <CalendarClock className="h-4 w-4" />
                  <div>
                    <div className="font-medium text-foreground">
                      {new Date(event.dateISO).toDateString()}
                    </div>
                    <div>{event.time}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-2 text-accent">
                  <MapPin className="h-4 w-4" />
                  <div>
                    <div className="font-medium text-foreground">
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-3">
                  <button
                    onClick={() => setRsvped((s) => !s)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold shadow ${rsvped ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"}`}
                  >
                    {rsvped ? "Joined" : "RSVP"}
                  </button>
                </div>
              </div>

              <section className="prose max-w-none mt-4">
                <h3 className="text-lg font-semibold">About this event</h3>
                <p className="text-sm text-muted-foreground">
                  {event.description || "No description provided."}
                </p>

                <h4 className="mt-4 text-md font-semibold">Details</h4>
                <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                  <li>Organized by Student Affairs</li>
                  <li>Entry: Free (RSVP recommended)</li>
                  <li>Accessibility: Wheelchair accessible</li>
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              <div className="rounded-lg border bg-white p-4">
                <div className="text-sm font-medium">Attendees</div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {(event.attendeesList || []).slice(0, 5).map((a, i) => (
                      <img
                        key={i}
                        src={a.avatarUrl}
                        alt={a.name}
                        className="h-10 w-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {event.attendees ?? 0} attending
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-4">
                <div className="text-sm font-medium">Related events</div>
                <div className="mt-3 space-y-3">
                  {related.length === 0 ? (
                    <div className="text-sm text-muted-foreground">
                      No related events
                    </div>
                  ) : (
                    related.map((r) => <EventCard key={r.id} event={r} />)
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
