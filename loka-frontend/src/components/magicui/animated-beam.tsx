"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef, useEffect, useId, useState, type RefObject } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#F74B37",
  gradientStopColor = "#F5681B",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the path between elements
  useEffect(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const rectA = fromRef.current.getBoundingClientRect();
    const rectB = toRef.current.getBoundingClientRect();

    const svgWidth = containerRect.width;
    const svgHeight = containerRect.height;
    setSvgDimensions({ width: svgWidth, height: svgHeight });

    const startX =
      rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
    const startY =
      rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
    const endX =
      rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
    const endY =
      rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

    const controlY = startY - curvature;
    const d = `M ${startX},${startY} Q ${
      (startX + endX) / 2
    },${controlY} ${endX},${endY}`;
    setPathD(d);
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        fill="none"
        opacity={pathOpacity}
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        fill="none"
        stroke={`url(#${id})`}
      >
        <motion.animate
          attributeName="stroke-dasharray"
          initial={{
            strokeDasharray: "0 100%",
          }}
          animate={{
            strokeDasharray: ["0 100%", "100% 0"],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "linear",
          }}
        />
      </path>
      <defs>
        <linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          x1={reverse ? "100%" : "0%"}
          x2={reverse ? "0%" : "100%"}
        >
          <stop stopColor={gradientStartColor} stopOpacity={0} />
          <stop offset="50%" stopColor={gradientStartColor} />
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";
