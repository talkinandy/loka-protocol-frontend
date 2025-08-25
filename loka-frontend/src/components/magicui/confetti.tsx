import React, { useCallback, useEffect, useImperativeHandle, useState } from "react";

export interface ConfettiRef {
  fire: (options?: any) => void;
}

interface ConfettiProps {
  manualstart?: boolean;
}

const Confetti = React.forwardRef<ConfettiRef, ConfettiProps>(
  ({ manualstart = false }, ref) => {
    const [isAnimating, setIsAnimating] = useState(!manualstart);

    const fire = useCallback((options: any = {}) => {
      setIsAnimating(true);
      const timeout = setTimeout(() => setIsAnimating(false), 4000);
      return () => clearTimeout(timeout);
    }, []);

    useImperativeHandle(ref, () => ({ fire }), [fire]);

    useEffect(() => {
      if (!manualstart) {
        fire();
      }
    }, [manualstart, fire]);

    return (
      <>
        {isAnimating && (
          <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className={`absolute h-3 w-3 animate-confetti bg-gradient-to-r ${
                  i % 5 === 0
                    ? "from-red-500 to-orange-500"
                    : i % 5 === 1
                    ? "from-blue-500 to-cyan-500"
                    : i % 5 === 2
                    ? "from-green-500 to-emerald-500"
                    : i % 5 === 3
                    ? "from-yellow-500 to-amber-500"
                    : "from-purple-500 to-pink-500"
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}
      </>
    );
  }
);

Confetti.displayName = "Confetti";

export default Confetti;