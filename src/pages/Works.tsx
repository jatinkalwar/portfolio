import { useState, useMemo } from "react";
import MasonryGrid from "@/components/MasonryGrid";
import { works } from "@/data/works";

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Works = () => {
  const shuffledWorks = useMemo(() => shuffleArray(works), []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(shuffledWorks.map((w) => w.category)));
    return ["All", ...cats];
  }, [shuffledWorks]);

  const [active, setActive] = useState("Website");

  const filtered = useMemo(
    () => (active === "All" ? shuffledWorks : shuffledWorks.filter((w) => w.category === active)),
    [active, shuffledWorks]
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="px-6 sm:px-12 mb-8">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
          Latest Work
        </h1>
        {/* <p className="mt-3 text-muted-foreground max-w-lg">
          A collection of thoughtfully crafted work across different design areas, each project driven by purpose, clarity, and user needs. From concept to execution, I focus on creating experiences that are not only visually engaging but also intuitive and impactful.
        </p> */}

        {/* Category filters */}
        {/* <div className="mt-6 flex flex-wrap gap-2">
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
        </div> */}
      </div>
      <MasonryGrid items={filtered} />
    </div>
  );
};

export default Works;
