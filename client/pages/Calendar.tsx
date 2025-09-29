import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "@/components/EventCard";
import { events as allEvents } from "@/data/events";

const categoryColor: Record<string, string> = {
  Academic: "bg-primary",
  Social: "bg-secondary",
  Sports: "bg-accent",
  Career: "bg-purple-500",
  Arts: "bg-yellow-500",
  Health: "bg-green-400",
};

function startOfMonth(year: number, month: number) {
  return new Date(year, month, 1);
}

function endOfMonth(year: number, month: number) {
  return new Date(year, month + 1, 0);
}

function getMonthMatrix(year: number, month: number) {
  const first = startOfMonth(year, month);
  const last = endOfMonth(year, month);
  const matrix: Date[][] = [];
  let week: Date[] = [];
  // weekday 0 = Sunday; make week start Monday? We'll use Sunday to match common calendars
  const startDay = first.getDay();
  // Fill preceding days
  for (let i = 0; i < startDay; i++) {
    const d = new Date(first);
    d.setDate(first.getDate() - (startDay - i));
    week.push(d);
  }
  // Fill month days
  for (let d = 1; d <= last.getDate(); d++) {
    week.push(new Date(year, month, d));
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  // Fill trailing days
  if (week.length > 0) {
    const need = 7 - week.length;
    for (let i = 1; i <= need; i++) {
      week.push(new Date(last.getFullYear(), last.getMonth(), last.getDate() + i));
    }
    matrix.push(week);
  }
  return matrix;
}

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default function Calendar() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);

  const matrix = useMemo(() => getMonthMatrix(viewYear, viewMonth), [viewYear, viewMonth]);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, typeof allEvents>();
    for (const e of allEvents) {
      map.set(e.dateISO, [...(map.get(e.dateISO) || []), e]);
    }
    return map;
  }, []);

  const monthName = new Date(viewYear, viewMonth, 1).toLocaleString(undefined, { month: "long" });

  function prevMonth() {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else setViewMonth((m) => m + 1);
  }

  const selectedISO = selectedDate ? isoDate(selectedDate) : null;
  const selectedEvents = selectedISO ? eventsByDate.get(selectedISO) || [] : [];

  return (
    <div className="min-h-screen bg-background/50 pb-12">
      <div className="container mx-auto py-8">
        <div className="rounded-2xl bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Calendar</h2>
              <p className="text-sm text-muted-foreground">Monthly view — click a date to see events</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevMonth}
                className="grid h-9 w-9 place-items-center rounded-md border bg-background text-foreground shadow-sm"
                aria-label="Previous month"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="px-3 text-center">
                <div className="text-sm font-medium">{monthName} {viewYear}</div>
              </div>
              <button
                onClick={nextMonth}
                className="grid h-9 w-9 place-items-center rounded-md border bg-background text-foreground shadow-sm"
                aria-label="Next month"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Calendar grid */}
          <div className="mt-6 grid grid-cols-7 gap-2">
            {/* Weekdays */}
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
              <div key={d} className="text-xs text-muted-foreground text-center">{d}</div>
            ))}

            {matrix.map((week, wi) => (
              <div key={wi} className="contents">
                {week.map((d, di) => {
                  const inMonth = d.getMonth() === viewMonth;
                  const iso = isoDate(d);
                  const evts = eventsByDate.get(iso) || [];
                  const hasEvents = evts.length > 0;
                  return (
                    <button
                      key={di}
                      onClick={() => setSelectedDate(d)}
                      className={`group relative flex h-20 flex-col items-start justify-start gap-2 rounded-lg border px-2 py-2 text-left hover:bg-primary/5 ${inMonth ? '' : 'opacity-50'} ${selectedISO === iso ? 'ring-2 ring-primary/30' : ''}`}
                    >
                      <div className="flex w-full items-start justify-between">
                        <div className="text-sm font-medium text-foreground">{d.getDate()}</div>
                        {/* small banners for today */}
                        {iso === isoDate(new Date()) && (
                          <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">Today</div>
                        )}
                      </div>

                      <div className="mt-auto flex w-full items-end gap-1">
                        {/* colored dots */}
                        <div className="flex items-center gap-1">
                          {evts.slice(0,3).map((e, i) => (
                            <span key={i} className={`${categoryColor[e.category] || 'bg-gray-400'} inline-block h-2 w-2 rounded-full`} />
                          ))}
                          {evts.length > 3 && <span className="text-xs text-muted-foreground">+{evts.length - 3}</span>}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Selected date events */}
          <div className="mt-6">
            <div className="text-sm font-medium">Events on {selectedDate ? selectedDate.toDateString() : '—'}</div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedEvents.length === 0 ? (
                <div className="rounded-lg border bg-white p-4 text-sm text-muted-foreground">No events for this date.</div>
              ) : (
                selectedEvents.map((e) => (
                  <EventCard key={e.id} event={e} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
