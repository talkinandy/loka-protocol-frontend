"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
}

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateValue = () => {
      if (ref.current) {
        const node = ref.current;
        const step = value / 100; // Animate over 100 steps
        let current = direction === "down" ? value : 0;
        const increment = direction === "down" ? -step : step;
        
        const timer = setInterval(() => {
          if (direction === "up" && current >= value) {
            current = value;
            clearInterval(timer);
          } else if (direction === "down" && current <= 0) {
            current = 0;
            clearInterval(timer);
          }
          
          node.textContent = current.toFixed(decimalPlaces);
          current += increment;
        }, 20);
      }
    };

    const timeout = setTimeout(updateValue, delay);
    return () => clearTimeout(timeout);
  }, [value, direction, delay, decimalPlaces]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        className,
      )}
      ref={ref}
    />
  );
}