import { useId } from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();

  const containerClassName = cn(
    "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
    className,
  );

  return (
    <svg
      aria-hidden="true"
      className={containerClassName}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

