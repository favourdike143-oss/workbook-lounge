import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Download } from "lucide-react";

import logoAsset from "@/assets/tube-audiobooks-logo.png.asset.json";
import workbookCover from "@/assets/emotional-regulation-workbook-cover.png";
import workbookAsset from "@/assets/emotional-regulation-workbook.pdf.asset.json";

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
  return (
    <main className="library-grain min-h-screen overflow-hidden bg-onyx">
      <section className="relative flex min-h-[88vh] items-center border-b border-gold/15 px-6 py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rise-in text-center lg:text-left">
            <img src={logoAsset.url} alt="Tube Audiobooks" className="mx-auto mb-7 size-28 rounded-full border border-gold/35 object-cover p-1 lg:mx-0" />
            <p className="mb-5 font-display text-xs uppercase tracking-[0.28em] text-gold">The companion library</p>
            <h1 className="font-display text-5xl leading-[1.05] text-gold sm:text-6xl lg:text-7xl">Listen deeply.<br /><span className="text-parchment">Reflect fully.</span></h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-muted-foreground lg:mx-0 lg:text-lg">
              Practical workbooks created to help you turn every self-help audiobook into lasting, personal change.
            </p>
            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row lg:items-start">
              <Link to="/workbooks" className="inline-flex h-13 items-center justify-center gap-3 rounded-sm bg-primary px-7 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                Enter the library <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a href={workbookAsset.url} download className="inline-flex h-13 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold">
                <Download className="size-4" aria-hidden="true" /> Download latest
              </a>
            </div>
          </div>

          <div className="rise-in relative mx-auto w-full max-w-[410px] [animation-delay:160ms]">
            <div className="absolute -inset-5 border border-gold/15" aria-hidden="true" />
            <img src={workbookCover} alt="A Guide to Emotional Regulation companion workbook cover" className="relative aspect-[3/4] w-full object-cover shadow-[0_26px_75px_oklch(0_0_0/0.55)]" />
            <div className="absolute -bottom-5 -right-5 border border-gold/25 bg-charcoal px-5 py-4 shadow-xl">
              <span className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Current release</span>
              <span className="mt-1 flex items-center gap-2 font-display text-sm text-gold"><BookOpen className="size-4" /> Available now</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-gold">One focused collection</p>
            <h2 className="mt-2 font-display text-2xl text-parchment">Study alongside the stories you hear.</h2>
          </div>
          <Link to="/workbooks" className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold">
            Browse workbooks <span className="h-px w-10 bg-gold/50 transition-all group-hover:w-14" />
          </Link>
        </div>
      </section>
    </main>
  );
}