import { ArrowUp, Code, Layers, Sparkles } from "lucide-react";
import { Bar, BrowserFrame, PhoneFrame } from "./frames";

/**
 * Android + web + AI in one composition. Built from live HTML so it stays
 * sharp at any size. Sized in percentages of a fixed-ratio stage, so the whole
 * arrangement scales down to 320px without being cropped or rearranged.
 */
export function HeroComposition({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative mx-auto aspect-[5/4] w-full max-w-[34rem] lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-lg border border-border bg-surface/60"
      >
        {/* Web */}
        <BrowserFrame className="absolute right-[3%] top-[8%] h-[56%] w-[78%]">
          <div className="flex h-full flex-col gap-2">
            <Bar className="h-2.5 w-1/3 bg-white/25" />
            <Bar className="w-4/5" />
            <Bar className="w-3/5" />
            <div className="mt-auto grid grid-cols-3 gap-2">
              {[Code, Layers, Code].map((Icon, i) => (
                <div
                  key={i}
                  className={
                    i === 0
                      ? "flex aspect-[4/3] items-center justify-center rounded-md bg-accent text-white"
                      : "flex aspect-[4/3] items-center justify-center rounded-md border border-border bg-surface text-muted"
                  }
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>

        {/* Android */}
        <PhoneFrame className="absolute bottom-[5%] left-[4%] aspect-[9/19] w-[27%]">
          <Bar className="w-1/2 bg-white/25" />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={i > 2 ? "hidden items-center gap-1.5 sm:flex" : "flex items-center gap-1.5"}>
              <span className="size-4 shrink-0 rounded bg-elevated" />
              <div className="flex-1 space-y-1">
                <Bar className="w-full" />
                <Bar className="w-2/3" />
              </div>
            </div>
          ))}
          <span className="mt-auto block h-5 rounded-full bg-accent" />
        </PhoneFrame>

        {/* AI */}
        <div className="absolute right-[7%] top-[42%] w-[46%] rounded-lg border border-border-strong bg-elevated p-2.5 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.7)] sm:p-3">
          <div className="flex items-center gap-1.5">
            <Sparkles size={14} className="shrink-0 text-accent-text" />
            <Bar className="w-1/3 bg-white/25" />
          </div>
          <div className="ml-auto mt-2.5 w-3/4 space-y-1 rounded-md bg-accent p-2">
            <Bar className="bg-white/70" />
            <Bar className="w-2/3 bg-white/70" />
          </div>
          <div className="mt-2 space-y-1">
            <Bar className="w-full" />
            <Bar className="w-5/6" />
            <Bar className="w-2/3" />
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 rounded-full border border-border bg-bg p-1 pl-2.5">
            <Bar className="flex-1" />
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <ArrowUp size={10} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
