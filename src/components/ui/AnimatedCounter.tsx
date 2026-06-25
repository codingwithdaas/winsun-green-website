"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({ value, suffix = "", className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const isNumeric = !Number.isNaN(numericValue);
  const decimals = value.includes(".") ? value.split(".")[1]?.length ?? 0 : 0;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView && isNumeric) {
      motionValue.set(numericValue);
    }
  }, [isInView, isNumeric, motionValue, numericValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
    return unsubscribe;
  }, [spring, decimals]);

  if (!isNumeric) {
    return (
      <span ref={ref} className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
