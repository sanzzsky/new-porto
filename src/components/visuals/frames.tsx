import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** A skeleton line. Visuals use these instead of fake copy so nothing reads as a real claim. */
export function Bar({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-white/10", className)} />;
}

export function BrowserFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-border-strong bg-bg shadow-[0_24px_48px_-24px_rgb(0_0_0/0.7)]",
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="ml-2 h-3.5 max-w-[55%] flex-1 rounded-full bg-white/[0.07]" />
      </div>
      <div className="min-h-0 flex-1 p-3 sm:p-4">{children}</div>
    </div>
  );
}

/** Android-style device: punch-hole camera and a gesture bar. */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-[1.5rem] border-[3px] border-elevated bg-bg shadow-[0_24px_48px_-24px_rgb(0_0_0/0.7)]",
        className,
      )}
    >
      <span className="mx-auto mt-2 block size-2 shrink-0 rounded-full bg-elevated" />
      <div className="flex min-h-0 flex-1 flex-col gap-2 p-3">{children}</div>
      <span className="mx-auto mb-1.5 block h-1 w-1/3 shrink-0 rounded-full bg-white/20" />
    </div>
  );
}
