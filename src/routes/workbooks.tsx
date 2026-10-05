import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Download, FileText } from "lucide-react";

import actionMindsetCover from "@/assets/action-mindset-for-discipline-workbook-cover.png";
import emotionalRegulationCover from "@/assets/emotional-regulation-workbook-cover.png";
import mindsetForGrowthCover from "@/assets/mindset-for-growth-workbook-cover.png";

const logoUrl = "/tube-audiobooks-logo.png";
const actionMindsetUrl = "/action-mindset-for-discipline-workbook.pdf";
const emotionalRegulationUrl = "/emotional-regulation-workbook.pdf";
const mindsetForGrowthUrl = "/mindset-for-growth-workbook.pdf";

export const Route = createFileRoute("/workbooks")({
  head: () => ({
    meta: [
      { title: "Workbook Library — Tube Audiobooks" },
      { name: "description", content: "Browse and download companion workbooks for Tube Audiobooks releases." },
      { property: "og:title", content: "Workbook Library — Tube Audiobooks" },
      { property: "og:description", content: "Download The Action Mindset for Discipline, The Mindset for Growth, and A Guide to Emotional Regulation companion workbooks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkbooksPage,
});

function WorkbooksPage() {
  return (
    <main className="library-grain min-h-screen bg-onyx">
      <header className="border-b border-gold/15 px-6">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="" className="size-11 rounded-full border border-gold/30 object-cover" />
            <span className="font-display text-sm tracking-[0.08em] text-gold sm:text-base">Tube Audiobooks</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold">
            <ArrowLeft className="size-4" /> Home
          </Link>
        </div>
      </header>

      <section className="px-6 py-12 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rise-in flex flex-col justify-between gap-6 border-b border-gold/20 pb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-display text-xs uppercase tracking-[0.26em] text-gold">The collection</p>
              <h1 className="font-display text-3xl text-parchment sm:text-5xl">Workbook Library</h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">Guided reflection, practical exercises, and repeatable tools to continue the work after listening.</p>
          </div>

          <article className="rise-in grid gap-8 py-12 [animation-delay:120ms] sm:py-14 md:grid-cols-[300px_1fr] lg:gap-16">
            <img src={actionMindsetCover} alt="The Action Mindset for Discipline companion workbook cover" className="mx-auto aspect-[3/4] w-full max-w-[240px] object-cover shadow-[0_22px_60px_oklch(0_0_0/0.5)] transition-transform duration-500 hover:-translate-y-2 sm:max-w-[300px] md:mx-0 md:max-w-[340px]" />
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="border border-gold/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">New release</span>
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"><FileText className="size-4" /> PDF workbook</span>
              </div>
              <h2 className="max-w-2xl font-display text-3xl leading-tight text-gold sm:text-4xl">The Action Mindset for Discipline</h2>
              <p className="mt-2 font-display text-sm uppercase tracking-[0.15em] text-muted-foreground">Ancient Wisdom</p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
                Train five ancient disciplines into daily action—Stoic austerity and the nightly audit, Musashi's daily subtraction, Bushido mental rehearsal, Aristotelian micro-promises and identity building, and Wu Wei emotional centering—with guided exercises, practice logs, and 30-day trackers.
              </p>
              <a href={actionMindsetUrl} download="The-Action-Mindset-for-Discipline-Workbook.pdf" className="mt-9 inline-flex h-13 w-fit items-center justify-center gap-3 rounded-sm bg-primary px-7 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                <Download className="size-4" aria-hidden="true" /> Download workbook
              </a>
            </div>
          </article>

          <article className="rise-in grid gap-8 border-t border-gold/15 py-12 [animation-delay:180ms] sm:py-14 md:grid-cols-[300px_1fr] lg:gap-16">
            <img src={mindsetForGrowthCover} alt="The Mindset for Growth companion workbook cover" className="mx-auto aspect-[3/4] w-full max-w-[240px] object-cover shadow-[0_22px_60px_oklch(0_0_0/0.5)] transition-transform duration-500 hover:-translate-y-2 sm:max-w-[300px] md:mx-0 md:max-w-[340px]" />
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="border border-gold/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Available now</span>
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"><FileText className="size-4" /> PDF workbook</span>
              </div>
              <h2 className="max-w-2xl font-display text-3xl leading-tight text-gold sm:text-4xl">The Mindset for Growth</h2>
              <p className="mt-2 font-display text-sm uppercase tracking-[0.15em] text-muted-foreground">Ancient Wisdom</p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
                Turn eight timeless mindset shifts into daily practice through guided exercises, reflection prompts, and progress trackers—from keeping a beginner’s mind and working without attachment to results, to building identity-based habits, using time deliberately, and owning what is yours to control.
              </p>
              <a href={mindsetForGrowthUrl} download="The-Mindset-for-Growth-Workbook.pdf" className="mt-9 inline-flex h-13 w-fit items-center justify-center gap-3 rounded-sm bg-primary px-7 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                <Download className="size-4" aria-hidden="true" /> Download workbook
              </a>
            </div>
          </article>

          <article className="rise-in grid gap-8 border-t border-gold/15 py-12 [animation-delay:180ms] sm:py-14 md:grid-cols-[300px_1fr] lg:gap-16">
            <img src={emotionalRegulationCover} alt="A Guide to Emotional Regulation workbook cover" className="mx-auto aspect-[3/4] w-full max-w-[240px] object-cover shadow-[0_22px_60px_oklch(0_0_0/0.5)] transition-transform duration-500 hover:-translate-y-2 sm:max-w-[300px] md:mx-0 md:max-w-[340px]" />
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="border border-gold/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Available now</span>
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"><FileText className="size-4" /> PDF workbook</span>
              </div>
              <h2 className="max-w-2xl font-display text-3xl leading-tight text-gold sm:text-4xl">A Guide to Emotional Regulation</h2>
              <p className="mt-2 font-display text-sm uppercase tracking-[0.15em] text-muted-foreground">From Ancient Times</p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
                Work through five ancient practices—the Stoic View from Above, Pratipaksha Bhavana, Naikan Reflection, Chöd Visualization, and Premeditatio Malorum—with guided prompts and practice trackers.
              </p>
              <a href={emotionalRegulationUrl} download="A-Guide-to-Emotional-Regulation-Workbook.pdf" className="mt-9 inline-flex h-13 w-fit items-center justify-center gap-3 rounded-sm bg-primary px-7 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                <Download className="size-4" aria-hidden="true" /> Download workbook
              </a>
            </div>
          </article>

          <section className="border-t border-gold/15 py-14" aria-labelledby="next-workbook">
            <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-center">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.26em] text-gold">Next release</p>
                <h2 id="next-workbook" className="mt-3 font-display text-2xl text-parchment">The next companion workbook</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">A new workbook is currently taking shape for an upcoming audiobook.</p>
              </div>
              <div className="border border-gold/20 bg-charcoal/60 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.18em]">
                  <span className="text-muted-foreground">Current stage</span>
                  <span className="text-gold">Planning</span>
                </div>
                <div className="mt-5 h-1 overflow-hidden bg-muted" role="progressbar" aria-label="Next workbook progress: planning stage" aria-valuemin={0} aria-valuemax={100} aria-valuenow={20}>
                  <div className="h-full w-1/5 bg-gold" />
                </div>
                <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                  <span className="text-gold">Planning</span><span>Writing</span><span>Design</span><span>Release</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <footer className="border-t border-gold/10 px-6 py-9 text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Tube Audiobooks · Companion Library
      </footer>
    </main>
  );
}