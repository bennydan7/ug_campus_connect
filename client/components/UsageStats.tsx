import React, { useEffect, useState } from "react";
import { Users, CalendarClock } from "lucide-react";
import { events as allEvents } from "@/data/events";

export default function UsageStats() {
  const [usersCount, setUsersCount] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ugc_users_count");
      if (raw) setUsersCount(parseInt(raw, 10));
      else setUsersCount(562);
    } catch {
      setUsersCount(562);
    }
  }, []);

  return (
    <div className="rounded-lg border bg-white p-3 flex items-center gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <CalendarClock className="h-6 w-6 text-primary" />
        <div>
          <div className="text-sm text-muted-foreground">Events Posted</div>
          <div className="text-lg font-semibold">{allEvents.length}</div>
        </div>
      </div>

      <div className="h-8 w-px bg-muted/40" />

      <div className="flex items-center gap-3">
        <Users className="h-6 w-6 text-accent" />
        <div>
          <div className="text-sm text-muted-foreground">Students Connected</div>
          <div className="text-lg font-semibold">{usersCount ?? "—"}</div>
        </div>
      </div>
    </div>
  );
}
