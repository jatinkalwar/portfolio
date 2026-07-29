import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react";
import { WorkItem } from "@/data/works";

interface MasonryGridProps {
  items: WorkItem[];
}

const MasonryGrid = ({ items }: MasonryGridProps) => {
  const [columns, setColumns] = useState(4);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const selected = selectedIndex !== null ? items[selectedIndex] : null;

  const goNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < items.length - 1)
      setSelectedIndex(selectedIndex + 1);
  }, [selectedIndex, items.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0)
      setSelectedIndex(selectedIndex - 1);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, goNext, goPrev]);

  const cols: WorkItem[][] = Array.from({ length: columns }, () => []);
  const colIndices: number[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    cols[i % columns].push(item);
    colIndices[i % columns].push(i);
  });

  return (
    <>
      <div className="flex gap-3 px-4 sm:px-8 lg:px-12">
        {cols.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-3">
            {col.map((item, idx) => (
              <MasonryCard
                key={item.id}
                item={item}
                onClick={() => setSelectedIndex(colIndices[ci][idx])}
              />
            ))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              key={selected.id}
              className="relative w-[92vw] max-w-5xl h-[85vh] rounded-2xl border border-border bg-card overflow-hidden flex flex-col lg:flex-row"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 rounded-full p-2.5 bg-background/60 backdrop-blur-md text-foreground hover:bg-background/80 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Media section — image fills left, vertically centered */}
              <div className="flex-1 min-h-0 overflow-hidden bg-secondary/20 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                {selected.pdfUrl ? (
                  <PdfViewer url={selected.pdfUrl} />
                ) : (
                  <ImageCarousel item={selected} />
                )}
              </div>

              {/* Info panel — fixed, no scroll */}
              {/* <div className="lg:w-[380px] shrink-0 border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10 flex flex-col justify-center bg-card overflow-hidden"> */}
              <div className="lg:w-[380px] shrink-0 border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10 flex flex-col justify-between bg-card overflow-y-auto">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[11px] font-medium tracking-widest uppercase text-primary">
                    {selected.category}
                  </span>
                  <h3 className="mt-5 text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                    {selected.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {selected.description}
                  </p>

                  {/* CTA button */}
                  {selected.link && (
                    <motion.a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all group"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Explore Work
                      <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </motion.a>
                  )}
                </div>

                {/* Navigation */}
                <div className="mt-10 flex items-center gap-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    disabled={selectedIndex === 0}
                    className="rounded-full p-2.5 border border-border text-foreground hover:border-primary hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-xs text-muted-foreground font-medium tracking-wider">
                    {selectedIndex + 1} / {items.length}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    disabled={selectedIndex === items.length - 1}
                    className="rounded-full p-2.5 border border-border text-foreground hover:border-primary hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ─── Image Carousel ─── */
// const ImageCarousel = ({ item }: { item: WorkItem }) => {
//   const allImages = [item.image, ...(item.images || [])];
//   const [current, setCurrent] = useState(0);
//   const hasMultiple = allImages.length > 1;

//   useEffect(() => { setCurrent(0); }, [item.id]);

//   return (
//     <div className="relative flex flex-col items-center w-full h-full">
//       <div className="flex-1 min-h-0 w-full flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={`${item.id}-${current}`}
//             src={allImages[current]}
//             alt={`${item.title} - ${current + 1}`}
//             className="max-w-full max-h-full object-contain rounded-lg"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.25 }}
//           />
//         </AnimatePresence>
//       </div>

//       {hasMultiple && (
//         <div className="flex items-center justify-center gap-3 pt-4">
//           <button
//             onClick={() => setCurrent((p) => Math.max(0, p - 1))}
//             disabled={current === 0}
//             className="rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
//           >
//             <ChevronLeft size={14} />
//           </button>
//           <div className="flex gap-1.5">
//             {allImages.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   i === current ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={() => setCurrent((p) => Math.min(allImages.length - 1, p + 1))}
//             disabled={current === allImages.length - 1}
//             className="rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
//           >
//             <ChevronRight size={14} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

/* ─── Image Carousel ─── */
// const ImageCarousel = ({ item }: { item: WorkItem }) => {
//   const allImages = [item.image, ...(item.images || [])];
//   const [current, setCurrent] = useState(0);
//   const hasMultiple = allImages.length > 1;

//   useEffect(() => { setCurrent(0); }, [item.id]);

//   // 1. Add this function to detect left/right swipes
//   const handleDragEnd = (e: any, { offset }: any) => {
//     const swipeThreshold = 50; // pixels needed to trigger swipe
//     if (offset.x < -swipeThreshold && current < allImages.length - 1) {
//       setCurrent(current + 1); // Swiped left -> Next
//     } else if (offset.x > swipeThreshold && current > 0) {
//       setCurrent(current - 1); // Swiped right -> Previous
//     }
//   };

//   return (
//     // 2. Added touch-none to prevent page scrolling while swiping
//     <div className="relative flex flex-col items-center w-full h-full touch-none">
//       {/* <div className="flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={`${item.id}-${current}`}
//             src={allImages[current]}
//             alt={`${item.title} - ${current + 1}`}
//             // 3. Added grab cursor classes
//             className="max-w-full max-h-full object-contain rounded-lg cursor-grab active:cursor-grabbing"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.25 }}
//             // 4. Added Framer Motion drag properties
//             drag={hasMultiple ? "x" : false}
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.2}
//             onDragEnd={handleDragEnd}
//           />
//         </AnimatePresence>
//       </div> */}

// <div className="flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden">
//         <motion.img
//           key={`${item.id}-${current}`}
//           src={allImages[current]}
//           alt={`${item.title} - ${current + 1}`}
//           className="max-w-full max-h-full object-contain rounded-lg cursor-grab active:cursor-grabbing"
//           drag={hasMultiple ? "x" : false}
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={0.2}
//           onDragEnd={handleDragEnd}
//         />
//       </div>
      
//       {hasMultiple && (
//         <div className="flex items-center justify-center gap-3 pt-4">
//           <button
//             onClick={() => setCurrent((p) => Math.max(0, p - 1))}
//             disabled={current === 0}
//             className="rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
//           >
//             <ChevronLeft size={14} />
//           </button>
//           <div className="flex gap-1.5">
//             {allImages.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   i === current ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={() => setCurrent((p) => Math.min(allImages.length - 1, p + 1))}
//             disabled={current === allImages.length - 1}
//             className="rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
//           >
//             <ChevronRight size={14} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

/* ─── Image Carousel ─── */
// const ImageCarousel = ({ item }: { item: WorkItem }) => {
//   const allImages = [item.image, ...(item.images || [])];
//   const [current, setCurrent] = useState(0);
//   const hasMultiple = allImages.length > 1;

//   useEffect(() => { setCurrent(0); }, [item.id]);

//   return (
//     <div className="relative flex flex-col items-center w-full h-full">
//       <div className="flex-1 min-h-0 w-full flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={`${item.id}-${current}`}
//             src={allImages[current]}
//             alt={`${item.title} - ${current + 1}`}
//             className="max-w-full max-h-full object-contain rounded-lg"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.25 }}
//           />
//         </AnimatePresence>
//       </div>

//       {hasMultiple && (
//         <div className="flex items-center justify-center gap-3 pt-4 w-full px-2 sm:px-4">
//           <button
//             onClick={() => setCurrent((p) => Math.max(0, p - 1))}
//             disabled={current === 0}
//             className="shrink-0 rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
//           >
//             <ChevronLeft size={14} />
//           </button>
          
//           {/* Added flex-wrap, max-width, and justify-center to handle many dots */}
//           <div className="flex flex-wrap justify-center gap-1.5 max-w-[200px] sm:max-w-[350px]">
//             {allImages.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
//                   i === current ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
//                 }`}
//               />
//             ))}
//           </div>
          
//           <button
//             onClick={() => setCurrent((p) => Math.min(allImages.length - 1, p + 1))}
//             disabled={current === allImages.length - 1}
//             className="shrink-0 rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
//           >
//             <ChevronRight size={14} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

/* ─── Image Carousel ─── */
const ImageCarousel = ({ item }: { item: WorkItem }) => {
  const allImages = [item.image, ...(item.images || [])];
  const [current, setCurrent] = useState(0);
  const hasMultiple = allImages.length > 1;

  useEffect(() => { setCurrent(0); }, [item.id]);

  // Handle drag/swipe gestures
  const handleDragEnd = (e: any, { offset }: any) => {
    const swipeThreshold = 50; // pixels needed to trigger swipe
    if (offset.x < -swipeThreshold && current < allImages.length - 1) {
      setCurrent(current + 1); // Swiped left -> Next
    } else if (offset.x > swipeThreshold && current > 0) {
      setCurrent(current - 1); // Swiped right -> Previous
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full h-full touch-none">
      <div className="flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${item.id}-${current}`}
            src={allImages[current]}
            alt={`${item.title} - ${current + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            // Drag properties restored
            drag={hasMultiple ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          />
        </AnimatePresence>
      </div>

      {hasMultiple && (
        <div className="flex items-center justify-center gap-3 pt-4 w-full px-2 sm:px-4">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="shrink-0 rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
          >
            <ChevronLeft size={14} />
          </button>
          
          {/* Flex-wrap, max-width, and justify-center to handle many dots */}
          <div className="flex flex-wrap justify-center gap-1.5 max-w-[200px] sm:max-w-[350px]">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
                  i === current ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrent((p) => Math.min(allImages.length - 1, p + 1))}
            disabled={current === allImages.length - 1}
            className="shrink-0 rounded-full p-1.5 border border-border text-foreground hover:border-primary disabled:opacity-20 transition-all"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

/* ─── PDF Viewer ─── */
const PdfViewer = ({ url }: { url: string }) => (
  <div className="h-full flex flex-col">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/50">
      <FileText size={16} className="text-primary" />
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Document Preview</span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
      >
        Open in new tab <ExternalLink size={12} />
      </a>
    </div>
    <iframe
      src={url}
      title="PDF preview"
      className="flex-1 w-full bg-secondary/20"
      style={{ minHeight: 400 }}
    />
  </div>
);

/* ─── Masonry Card ─── */
const MasonryCard = ({ item, onClick }: { item: WorkItem; onClick: () => void }) => {
  const [loaded, setLoaded] = useState(false);
  const hasExtras = !!(item.images?.length || item.pdfUrl || item.link);

  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 z-10 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-stroke-hover pointer-events-none" />

      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {item.category}
        </span>
        {hasExtras && (
          <span className="rounded-full bg-card/80 backdrop-blur-sm border border-border px-2 py-1 text-[10px] font-medium text-muted-foreground flex items-center gap-1">
            {item.images?.length ? `+${item.images.length}` : null}
            {item.pdfUrl ? <FileText size={10} /> : null}
            {item.link ? <ExternalLink size={10} /> : null}
          </span>
        )}
      </div>

      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-auto block transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"} group-hover:brightness-75`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />

      {!loaded && (
        <div className="aspect-[3/4] w-full bg-secondary animate-pulse rounded-lg" />
      )}
    </motion.div>
  );
};

export default MasonryGrid;
