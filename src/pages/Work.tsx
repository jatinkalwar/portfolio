import { useState, useMemo } from "react";
import MasonryGrid from "@/components/MasonryGrid";
import { works } from "@/data/works";

const Work = () => {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(works.map((w) => w.category)));
    return ["All", ...cats];
  }, []);

  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? works : works.filter((w) => w.category === active)),
    [active]
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="px-6 sm:px-12 mb-8">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
          My Work
        </h1>
        <p className="mt-3 text-muted-foreground max-w-lg">
          A collection of mobile applications, backend services, and software solutions built with Flutter, FastAPI, Android, and modern development frameworks—engineered for performance, security, and scalability.
        </p>

        {/* Category filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 border ${active === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <MasonryGrid items={filtered} />
    </div>
  );
};

export default Work;
