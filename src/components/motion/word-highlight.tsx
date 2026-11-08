"use client";

import { useRef } from "react";
import { m, useScroll, useTransform, type MotionValue } from "framer-motion";

const DIM = "#7d8982"; // 5.1:1 on the page background, so the text stays readable mid-effect
const LIT = "#f3f5f4";

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const color = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [DIM, LIT],
  );
  return (
    <>
      {/* `motion-reduce:text-fg!` overrides the animated inline colour: always fully lit. */}
      <m.span style={{ color }} className="motion-reduce:text-fg!">
        {word}
      </m.span>{" "}
    </>
  );
}

/**
 * Scroll moment 2: the closing statement lights up word by word as it
 * scrolls through the viewport. Under reduced motion it is simply fully lit.
 */
export function WordHighlight({
  id,
  text,
  className,
}: {
  id: string;
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.6"],
  });
  const words = text.split(" ");

  return (
    <h2 id={id} ref={ref} className={className} style={{ color: DIM }}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          word={word}
          index={i}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </h2>
  );
}
