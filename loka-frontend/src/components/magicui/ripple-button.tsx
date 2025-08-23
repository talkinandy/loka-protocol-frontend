import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rippleColor?: string;
}

export default function RippleButton({
  children,
  className,
  onClick,
  rippleColor = "rgba(255, 255, 255, 0.6)",
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.id !== newRipple.id),
      );
    }, 600);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden inline-flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-[#F74B37] to-[#F5681B] px-10 font-semibold text-base text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F74B37] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            backgroundColor: rippleColor,
            animationDuration: "0.6s",
            animationTimingFunction: "ease-out",
          }}
        />
      ))}
    </button>
  );
}
