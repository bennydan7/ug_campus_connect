import { useMemo, useState } from "react";
import { Bell, Calendar, MapPin } from "lucide-react";

type Notification = {
  id: string;
  type: "reminder" | "rsvp" | "venue";
  title: string;
  message: string;
  timeAgo: string;
  read?: boolean;
};

const sample: Notification[] = [
  {
    id: "n1",
    type: "reminder",
    title: "Tech Talk: Intro to AI",
    message: "Starts in 1 hour",
    timeAgo: "10 mins ago",
    read: false,
  },
  {
    id: "n2",
    type: "rsvp",
    title: "Career Fair: Meet Top Employers",
    message: "Your RSVP confirmed",
    timeAgo: "1 hr ago",
    read: false,
  },
  {
    id: "n3",
    type: "venue",
    title: "Intramural Soccer",
    message: "Venue updated: Field B",
    timeAgo: "3 hrs ago",
    read: true,
  },
  {
    id: "n4",
    type: "reminder",
    title: "Open Mic Night",
    message: "Starts tomorrow",
    timeAgo: "Yesterday",
    read: true,
  },
];

export default function Notifications() {
  const [notes, setNotes] = useState<Notification[]>(sample);

  const unreadCount = useMemo(
    () => notes.filter((n) => !n.read).length,
    [notes],
  );

  function markAllRead() {
    setNotes((s) => s.map((n) => ({ ...n, read: true })));
  }

  function toggleRead(id: string) {
    setNotes((s) => s.map((n) => (n.id === id ? { ...n, read: !n.read } : n)));
  }

  function iconFor(type: Notification["type"]) {
    if (type === "reminder") return <Bell className="h-5 w-5 text-primary" />;
    if (type === "rsvp") return <Calendar className="h-5 w-5 text-green-600" />;
    return <MapPin className="h-5 w-5 text-accent" />;
  }

  return (
    <div className="min-h-screen bg-background/50 pb-12">
      <div className="container mx-auto py-8">
        <div className="rounded-2xl bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Notifications</h1>
              <p className="text-sm text-muted-foreground">
                You have {unreadCount} unread notifications
              </p>
            </div>
            <div>
              <button
                onClick={markAllRead}
                className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
              >
                Mark all as read
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {notes.map((n) => (
              <div
                key={n.id}
                className={`flex items-start gap-4 rounded-lg p-4 ${n.read ? "bg-gray-50" : "bg-primary/10"} border`}
              >
                <div className="shrink-0 rounded-md bg-white p-2 shadow-sm">
                  {iconFor(n.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold">{n.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {n.message}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {n.timeAgo}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => toggleRead(n.id)}
                      className="text-sm text-primary underline"
                    >
                      {n.read ? "Mark unread" : "Mark read"}
                    </button>
                    <button className="text-sm text-muted-foreground">
                      View event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
