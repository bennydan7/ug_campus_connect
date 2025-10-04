import { useMemo, useState } from "react";
import FilterBar, { type Category } from "@/components/FilterBar";
import EventCard from "@/components/EventCard";
import { events as allEvents } from "@/data/events";
import { useSearch } from "@/context/SearchContext";
import UsageStats from "@/components/UsageStats";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import NoEvents from "@/components/NoEvents";

export default function Index() {
  const [category, setCategory] = useState<Category>("All");
  const { query } = useSearch();

  const events = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allEvents.filter((e) => {
      const matchesCategory =
        category === "All" ? true : e.category === category;
      const hay = `${e.title} ${e.location} ${e.category}`.toLowerCase();
      const matchesQuery = q.length === 0 || hay.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-blue-50/60 pb-6 pt-6">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  Discover campus events
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Academic. Social. Sports. Career — find your next opportunity.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Blue
                </span>
                <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-foreground">
                  Yellow
                </span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  Green
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats + subscribe */}
      <div className="container mx-auto mt-6 px-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:flex-1">
            <UsageStats />
          </div>
          <div className="mt-4 lg:mt-0 lg:w-96">
            {/* Live events panel replaces the previous "Stay updated" subscription box */}
            <LiveEvents />
          </div>
        </div>
      </div>

      {/* Filters */}
      <FilterBar active={category} onChange={setCategory} />

      {/* Feed */}
      <main className="container mx-auto pb-12 pt-6">
        {events.length === 0 ? (
          <NoEvents />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        <TrustedBy />
        <Testimonials />
      </main>
    </div>
  );
}
