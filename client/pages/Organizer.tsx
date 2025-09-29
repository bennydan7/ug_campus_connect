import { useMemo, useState } from "react";
import { PlusCircle, BarChart2, Calendar, Edit2, Trash2, LogIn, LogOut } from "lucide-react";
import { events as allEventsData } from "@/data/events";

// local id generator to avoid uuid dependency in the dev environment
function genId() {
  return 'ev_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

type EventForm = {
  id?: string;
  title: string;
  dateISO: string;
  time: string;
  location: string;
  category: string;
  bannerUrl: string;
  description?: string;
};

export default function Organizer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "Organizer" });
  const [events, setEvents] = useState(allEventsData);
  const [selectedTab, setSelectedTab] = useState<"My Events" | "Create Event" | "Analytics">("My Events");
  const [form, setForm] = useState<EventForm>({
    title: "",
    dateISO: new Date().toISOString().slice(0, 10),
    time: "6:00 PM - 8:00 PM",
    location: "",
    category: "Social",
    bannerUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
    description: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const myEvents = useMemo(() => events.slice(0, 10), [events]);

  function handlePost() {
    const newEvent = { ...form, id: uuidv4(), attendees: 0, attendeesList: [] } as any;
    setEvents((s) => [newEvent, ...s]);
    setForm({ ...form, title: "", location: "", description: "" });
    setSelectedTab("My Events");
  }

  function handleUpdate() {
    if (!editingId) return;
    setEvents((s) => s.map((e) => (e.id === editingId ? { ...e, ...form, id: editingId } : e)));
    setEditingId(null);
    setSelectedTab("My Events");
  }

  function handleEdit(e: any) {
    setEditingId(e.id);
    setForm({
      id: e.id,
      title: e.title,
      dateISO: e.dateISO,
      time: e.time,
      location: e.location,
      category: e.category,
      bannerUrl: e.bannerUrl,
      description: e.description || "",
    });
    setSelectedTab("Create Event");
  }

  function handleDelete(id: string) {
    setEvents((s) => s.filter((e) => e.id !== id));
  }

  return (
    <div className="min-h-screen bg-background/50 pb-12">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <aside className="md:col-span-1">
            <div className="rounded-xl bg-white p-4 shadow">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground grid place-items-center font-bold">OG</div>
                <div>
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-sm text-muted-foreground">Event Organizer</div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button onClick={() => setSelectedTab("My Events")} className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm ${selectedTab === 'My Events' ? 'bg-primary/10' : ''}`}>
                  <Calendar className="h-4 w-4" /> My Events
                </button>
                <button onClick={() => setSelectedTab("Create Event")} className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm ${selectedTab === 'Create Event' ? 'bg-primary/10' : ''}`}>
                  <PlusCircle className="h-4 w-4" /> Create Event
                </button>
                <button onClick={() => setSelectedTab("Analytics")} className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm ${selectedTab === 'Analytics' ? 'bg-primary/10' : ''}`}>
                  <BarChart2 className="h-4 w-4" /> Analytics
                </button>
              </div>

              <div className="mt-6 border-t pt-4">
                {!isLoggedIn ? (
                  <button onClick={() => setIsLoggedIn(true)} className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                    <LogIn className="h-4 w-4" /> Login
                  </button>
                ) : (
                  <button onClick={() => { setIsLoggedIn(false); setSelectedTab('My Events'); }} className="flex w-full items-center justify-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-semibold">
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                )}
              </div>
            </div>
          </aside>

          <section className="md:col-span-3">
            <div className="rounded-xl bg-white p-6 shadow">
              {selectedTab === "My Events" && (
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">My Events</h2>
                    <div className="text-sm text-muted-foreground">{events.length} total</div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {myEvents.map((e) => (
                      <div key={e.id} className="flex items-center justify-between gap-3 rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <img src={e.bannerUrl} className="h-12 w-20 rounded-md object-cover" />
                          <div>
                            <div className="font-semibold">{e.title}</div>
                            <div className="text-sm text-muted-foreground">{e.dateISO} • {e.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleEdit(e)} className="rounded-md bg-secondary/10 px-3 py-1 text-sm font-semibold">Edit</button>
                          <button onClick={() => handleDelete(e.id!)} className="rounded-md bg-destructive/80 px-3 py-1 text-sm font-semibold text-destructive-foreground">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === "Create Event" && (
                <div>
                  {!isLoggedIn ? (
                    <div className="text-center py-20">
                      <div className="text-lg font-semibold">Please login to create events</div>
                      <div className="mt-4">
                        <button onClick={() => setIsLoggedIn(true)} className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Login</button>
                      </div>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); editingId ? handleUpdate() : handlePost(); }}>
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <input value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} placeholder="Event title" className="rounded-md border px-3 py-2" />
                        <input type="date" value={form.dateISO} onChange={(e) => setForm((s) => ({ ...s, dateISO: e.target.value }))} className="rounded-md border px-3 py-2" />
                      </div>

                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <input value={form.time} onChange={(e) => setForm((s) => ({ ...s, time: e.target.value }))} placeholder="Time (e.g., 6:00 PM - 8:00 PM)" className="rounded-md border px-3 py-2" />
                        <input value={form.location} onChange={(e) => setForm((s) => ({ ...s, location: e.target.value }))} placeholder="Location" className="rounded-md border px-3 py-2" />
                      </div>

                      <div>
                        <select value={form.category} onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))} className="rounded-md border px-3 py-2">
                          <option>Academic</option>
                          <option>Social</option>
                          <option>Sports</option>
                          <option>Career</option>
                          <option>Arts</option>
                          <option>Health</option>
                        </select>
                      </div>

                      <div>
                        <input value={form.bannerUrl} onChange={(e) => setForm((s) => ({ ...s, bannerUrl: e.target.value }))} placeholder="Banner image URL" className="rounded-md border px-3 py-2 w-full" />
                      </div>

                      <div>
                        <textarea value={form.description} onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))} placeholder="Description" className="h-28 w-full rounded-md border px-3 py-2" />
                      </div>

                      <div className="flex items-center gap-3">
                        <button type="submit" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow">{editingId ? 'Update Event' : 'Post Event'}</button>
                        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', dateISO: new Date().toISOString().slice(0,10), time: '', location: '', category: 'Social', bannerUrl: '', description: '' }); }} className="rounded-full bg-muted px-4 py-2 text-sm font-semibold">Cancel</button>}
                      </div>
                    </form>
                  )}
                </div>
              )}

              {selectedTab === "Analytics" && (
                <div>
                  <h3 className="text-lg font-semibold">Analytics (sample)</h3>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">Events posted</div>
                      <div className="mt-2 text-2xl font-bold">{events.length}</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">Total attendees</div>
                      <div className="mt-2 text-2xl font-bold">{events.reduce((s, e) => s + (e.attendees || 0), 0)}</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">Upcoming this month</div>
                      <div className="mt-2 text-2xl font-bold">{events.filter(e => new Date(e.dateISO).getMonth() === new Date().getMonth()).length}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
