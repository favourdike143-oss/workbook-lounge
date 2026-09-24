import { Link, createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Download } from "lucide-react";

import emotionalRegulationCover from "@/assets/emotional-regulation-workbook-cover.png";
import mindsetForGrowthCover from "@/assets/mindset-for-growth-workbook-cover.png";
import { Button } from "@/components/ui/button";

const logoUrl = "/tube-audiobooks-logo.png";
const workbookUrl = "/mindset-for-growth-workbook.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tube Audiobooks — Companion Workbook Library" },
      { name: "description", content: "Download reflective companion workbooks for Tube Audiobooks self-help releases." },
      { property: "og:title", content: "Tube Audiobooks — Companion Workbook Library" },
      { property: "og:description", content: "Go deeper with practical companion workbooks for every Tube Audiobooks release." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const showPrevious = () => setActiveSlide((current) => Math.max(0, current - 1));
  const showNext = () => setActiveSlide((current) => Math.min(2, current + 1));

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    const changedTouch = event.changedTouches.item(0);
    if (startX === null || !changedTouch) return;

    const distance = startX - changedTouch.clientX;
    if (Math.abs(distance) < 45) return;
    if (distance > 0) showNext();
    else showPrevious();
  };

  return (
    <main className="library-grain min-h-screen overflow-hidden bg-onyx">
      <section className="relative border-b border-gold/15 px-6 pb-16 pt-20 sm:min-h-[88vh] sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rise-in text-center lg:text-left">
            <img src={logoUrl} alt="Tube Audiobooks" className="mx-auto mb-6 size-20 rounded-full border border-gold/35 object-cover p-1 sm:size-28 lg:mx-0" />
            <p className="mb-5 font-display text-xs uppercase tracking-[0.28em] text-gold">The companion library</p>
            <h1 className="font-display text-4xl leading-[1.08] text-gold sm:text-6xl lg:text-7xl">Listen deeply.<br /><span className="text-parchment">Reflect fully.</span></h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-muted-foreground lg:mx-0 lg:text-lg">
              Practical workbooks created to help you turn every self-help audiobook into lasting, personal change.
            </p>
            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row lg:items-start">
              <Link to="/workbooks" className="inline-flex h-13 items-center justify-center gap-3 rounded-sm bg-primary px-7 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                Enter the library <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a href={workbookUrl} download className="inline-flex h-13 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold">
                <Download className="size-4" aria-hidden="true" /> Download latest
              </a>
            </div>
          </div>

          <div className="rise-in mx-auto w-full max-w-[280px] [animation-delay:160ms] sm:max-w-[360px]" aria-roledescription="carousel" aria-label="Workbook releases">
            <div
              className="relative h-[330px] touch-pan-y overflow-hidden border border-gold/20 bg-charcoal/70 sm:h-[400px]"
              onTouchStart={(event) => { touchStartX.current = event.touches.item(0)?.clientX ?? null; }}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                <article className="flex h-full w-full shrink-0 flex-col items-center justify-center px-7 py-6" aria-hidden={activeSlide !== 0}>
                  <p className="mb-4 font-display text-[10px] uppercase tracking-[0.22em] text-gold">Current release</p>
                  <img src={mindsetForGrowthCover} alt="The Mindset for Growth companion workbook cover" className="aspect-[3/4] w-[140px] object-cover shadow-[0_18px_45px_oklch(0_0_0/0.48)] sm:w-[185px]" />
                  <p className="mt-5 flex items-center gap-2 font-display text-xs text-parchment"><BookOpen className="size-4 text-gold" aria-hidden="true" /> Available now</p>
                </article>

                <article className="flex h-full w-full shrink-0 flex-col justify-center px-8 py-8" aria-hidden={activeSlide !== 1}>
                  <p className="mb-4 text-center font-display text-[10px] uppercase tracking-[0.22em] text-gold">In the library</p>
                  <img src={emotionalRegulationCover} alt="A Guide to Emotional Regulation companion workbook cover" className="mx-auto aspect-[3/4] w-[140px] object-cover shadow-[0_18px_45px_oklch(0_0_0/0.48)] sm:w-[185px]" />
                  <p className="mt-5 flex items-center justify-center gap-2 font-display text-xs text-parchment"><BookOpen className="size-4 text-gold" aria-hidden="true" /> Available now</p>
                </article>

                <article className="flex h-full w-full shrink-0 flex-col justify-center px-8 py-8" aria-hidden={activeSlide !== 2}>
                  <p className="font-display text-[10px] uppercase tracking-[0.22em] text-gold">Next release</p>
                  <h2 className="mt-4 font-display text-2xl leading-snug text-parchment">The next companion workbook</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">A new guided workbook is currently taking shape.</p>
                  <div className="mt-9 flex items-end justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-parchment">Planning</span>
                    <span className="font-display text-3xl text-gold">20%</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden bg-muted" role="progressbar" aria-label="Next workbook progress: planning stage" aria-valuemin={0} aria-valuemax={100} aria-valuenow={20}>
                    <div className="h-full w-1/5 bg-primary" />
                  </div>
                </article>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <Button type="button" variant="outline" size="icon" className="size-10 rounded-full border-gold/25 bg-transparent text-gold hover:bg-secondary" onClick={showPrevious} disabled={activeSlide === 0} aria-label="Previous slide">
                <ChevronLeft aria-hidden="true" />
              </Button>
              <div className="flex justify-center gap-2" role="group" aria-label="Choose slide">
                {[0, 1, 2].map((slide) => (
                  <Button key={slide} type="button" size="icon" className={`size-2 rounded-full p-0 ${activeSlide === slide ? "bg-primary" : "bg-muted hover:bg-gold-muted"}`} onClick={() => setActiveSlide(slide)} aria-label={`Go to slide ${slide + 1}`} aria-current={activeSlide === slide ? "true" : undefined} />
                ))}
              </div>
              <Button type="button" variant="outline" size="icon" className="size-10 rounded-full border-gold/25 bg-transparent text-gold hover:bg-secondary" onClick={showNext} disabled={activeSlide === 2} aria-label="Next slide">
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-gold">One focused collection</p>
            <h2 className="mt-2 font-display text-2xl text-parchment">Master the lessons you learn.</h2>
          </div>
          <Link to="/workbooks" className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold">
            Browse workbooks <span className="h-px w-10 bg-gold/50 transition-all group-hover:w-14" />
          </Link>
        </div>
      </section>
    </main>
  );
}