import { cn } from "@/lib/utils";

export type Category =
  | "All"
  | "Academic"
  | "Social"
  | "Sports"
  | "Career"
  | "Arts"
  | "Health";

const categories: Category[] = [
  "All",
  "Academic",
  "Social",
  "Sports",
  "Career",
  "Arts",
  "Health",
];

export default function FilterBar({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="sticky top-[68px] z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between gap-3 py-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => onChange(c)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm shadow-sm transition",
                c === active
                  ? "bg-primary text-primary-foreground border-transparent shadow"
                  : "bg-white hover:bg-muted/60 text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <button
            onClick={() => onChange("All")}
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Color tags:</span>
            <span className="h-3 w-3 rounded-full bg-primary/80 shadow" />
            <span className="h-3 w-3 rounded-full bg-secondary/80 shadow" />
            <span className="h-3 w-3 rounded-full bg-accent/80 shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
