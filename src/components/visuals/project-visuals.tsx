import {
  BookOpen,
  Camera,
  Dumbbell,
  HeartPulse,
  Newspaper,
  Plus,
  ScanSearch,
  ShoppingBag,
  Ticket,
  User,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import type { ProjectSlug } from "@/types";
import { Bar, BrowserFrame, PhoneFrame } from "./frames";

/*
 * Six different compositions, one per project. They are illustrations built
 * from skeleton lines and icons. They deliberately contain no invented copy,
 * prices, figures or results. Replace with real screenshots when available.
 */

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center p-5 sm:p-7">
      {children}
    </div>
  );
}

/** Vert2: a browser showing ticket stubs. */
function Vert2() {
  const stub = (featured: boolean) => (
    <div className="flex h-14 overflow-hidden rounded-md border border-border sm:h-16">
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-3">
        {featured ? (
          <span className="font-display text-sm font-semibold">Vert2</span>
        ) : (
          <Bar className="w-1/2 bg-white/25" />
        )}
        <Bar className="w-2/3" />
      </div>
      <div className="flex w-16 shrink-0 items-center justify-center border-l border-dashed border-border-strong bg-accent text-white sm:w-20">
        <Ticket size={20} />
      </div>
    </div>
  );
  return (
    <Stage>
      <BrowserFrame className="w-full max-w-md">
        <div className="space-y-3">
          {stub(true)}
          {stub(false)}
        </div>
      </BrowserFrame>
    </Stage>
  );
}

/** Pentol-OY: one large phone with an order list. */
function PentolOy() {
  return (
    <Stage>
      <PhoneFrame className="aspect-[9/17] h-full max-h-[17.5rem]">
        <div className="flex items-center gap-1.5">
          <UtensilsCrossed size={14} className="shrink-0 text-accent-text" />
          <span className="font-display text-xs font-semibold">Pentol-OY</span>
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-border bg-surface p-1.5">
            <span className="size-7 shrink-0 rounded bg-elevated" />
            <div className="min-w-0 flex-1 space-y-1">
              <Bar className="w-full" />
              <Bar className="w-1/2" />
            </div>
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-text">
              <Plus size={12} />
            </span>
          </div>
        ))}
        <span className="mt-auto flex h-8 items-center justify-center rounded-md bg-accent text-white">
          <ShoppingBag size={15} />
        </span>
      </PhoneFrame>
    </Stage>
  );
}

/** MAHA: phone plus the confirmed feature set as a column. */
function Maha() {
  const features = [
    { key: "bmi", node: <span className="font-mono text-[10px] font-medium">BMI</span> },
    { key: "food", node: <UtensilsCrossed size={14} /> },
    { key: "exercise", node: <Dumbbell size={14} /> },
    { key: "info", node: <BookOpen size={14} /> },
  ];
  return (
    <Stage>
      <div className="flex h-full max-h-[17.5rem] items-center gap-4 sm:gap-6">
        <PhoneFrame className="aspect-[9/17] h-full">
          <div className="flex items-center gap-1.5">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-elevated text-muted">
              <User size={13} />
            </span>
            <div className="flex-1 space-y-1">
              <Bar className="w-3/4 bg-white/25" />
              <Bar className="w-1/2" />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-1.5">
            {features.map((f) => (
              <div
                key={f.key}
                className="flex flex-col justify-between rounded-md border border-border bg-surface p-1.5 text-accent-text"
              >
                {f.node}
                <Bar className="w-2/3" />
              </div>
            ))}
          </div>
          <span className="flex h-6 items-center justify-center rounded-md bg-accent text-white">
            <HeartPulse size={14} />
          </span>
        </PhoneFrame>
        <ul className="flex w-[7rem] flex-col gap-2 sm:w-[9rem]">
          {features.map((f) => (
            <li
              key={f.key}
              className="flex items-center gap-2 rounded-md border border-border bg-bg/70 p-1.5"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                {f.node}
              </span>
              <Bar className="flex-1" />
            </li>
          ))}
        </ul>
      </div>
    </Stage>
  );
}

/** DompetKu: stacked cards. */
function DompetKu() {
  return (
    <Stage>
      <div className="relative w-full max-w-xs">
        <div className="absolute inset-x-4 -bottom-3 top-3 rounded-lg border border-border bg-elevated" />
        <div className="relative rounded-lg border border-border-strong bg-bg p-4 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.7)]">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <Wallet size={17} />
            </span>
            <div className="flex-1 space-y-1.5">
              <span className="font-display text-sm font-semibold">DompetKu</span>
              <Bar className="w-1/3" />
            </div>
          </div>
          <div className="mt-4 space-y-3 border-t border-border pt-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="size-6 shrink-0 rounded-full bg-elevated" />
                <Bar className="flex-1" />
                <Bar className="w-8 bg-white/25" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Stage>
  );
}

/** Food Recognition AI: a camera viewfinder with a detection box. */
function FoodRecognition() {
  const corner = "absolute size-6 border-accent-text";
  return (
    <Stage>
      <div className="relative aspect-square h-full max-h-[17.5rem] rounded-md bg-[radial-gradient(circle_at_center,var(--color-elevated),var(--color-bg))]">
        <span className={`${corner} left-0 top-0 rounded-tl-md border-l-2 border-t-2`} />
        <span className={`${corner} right-0 top-0 rounded-tr-md border-r-2 border-t-2`} />
        <span className={`${corner} bottom-0 left-0 rounded-bl-md border-b-2 border-l-2`} />
        <span className={`${corner} bottom-0 right-0 rounded-br-md border-b-2 border-r-2`} />
        <Camera size={16} className="absolute left-3 top-3 text-muted" />
        <div className="absolute inset-[20%] rounded-full border border-border-strong bg-surface" />
        <div className="absolute inset-[30%] rounded-full border border-border bg-bg/60" />
        <span className="absolute left-[40%] top-[38%] size-[9%] rounded-full bg-accent" />
        <span className="absolute left-[52%] top-[50%] size-[7%] rounded-full bg-white/25" />
        <span className="absolute left-[38%] top-[56%] size-[6%] rounded-full bg-accent-text/70" />
        <div className="absolute left-[24%] top-[28%] h-[44%] w-[52%] rounded-sm border-2 border-accent-text">
          <span className="absolute -left-0.5 -top-5 flex h-5 items-center gap-1 bg-accent px-1.5 text-white">
            <ScanSearch size={11} />
            <span className="block h-1 w-6 rounded-full bg-white/70" />
          </span>
        </div>
      </div>
    </Stage>
  );
}

/** Cuminfo: an article page layout. */
function Cuminfo() {
  return (
    <Stage>
      <BrowserFrame className="w-full max-w-md">
        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 space-y-2">
              <Bar className="h-2.5 w-full bg-white/25" />
              <Bar className="h-2.5 w-3/4 bg-white/25" />
              <Bar className="mt-3 w-full" />
              <Bar className="w-5/6" />
            </div>
            <div className="col-span-2 flex items-center justify-center rounded-md bg-elevated text-accent-text">
              <Newspaper size={22} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-border pt-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1.5">
                <span className="block aspect-[3/2] rounded bg-surface" />
                <Bar className="w-full" />
                <Bar className="w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    </Stage>
  );
}

const visuals: Record<ProjectSlug, () => React.JSX.Element> = {
  vert2: Vert2,
  "pentol-oy": PentolOy,
  maha: Maha,
  dompetku: DompetKu,
  "food-recognition-ai": FoodRecognition,
  cuminfo: Cuminfo,
};

export function ProjectVisual({ slug }: { slug: ProjectSlug }) {
  const Visual = visuals[slug];
  return (
    <div aria-hidden="true" className="h-full w-full">
      <Visual />
    </div>
  );
}
