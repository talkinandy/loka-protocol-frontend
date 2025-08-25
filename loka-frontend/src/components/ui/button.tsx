import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#F74B37] to-[#F5681B] text-white !text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 border-0 font-medium",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-white/40 bg-transparent text-white hover:bg-[#F74B37] hover:text-white hover:border-[#F74B37] shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 hover:from-slate-200 hover:to-slate-300 shadow-md hover:shadow-lg dark:from-slate-800 dark:to-slate-700 dark:text-slate-100 dark:hover:from-slate-700 dark:hover:to-slate-600",
        ghost: "bg-transparent text-foreground hover:bg-[#F74B37]/10 hover:text-[#F74B37] transition-colors duration-200",
        link: "text-[#F74B37] underline-offset-4 hover:underline font-medium",
        gradient: "bg-gradient-to-r from-[#F74B37] via-[#F5681B] to-[#F74B37] bg-size-200 text-white shadow-xl hover:bg-pos-100 hover:shadow-2xl hover:scale-[1.02] active:scale-95 font-medium",
        glow: "bg-gradient-to-r from-[#F74B37] to-[#F5681B] text-white shadow-xl hover:shadow-2xl hover:shadow-[#F74B37]/60 hover:scale-[1.02] active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        neon: "border-2 border-[#F74B37] bg-transparent text-[#F74B37] hover:bg-[#F74B37] hover:text-white hover:shadow-lg hover:shadow-[#F74B37]/50 transition-all duration-300 relative before:absolute before:inset-0 before:border-2 before:border-[#F74B37]/30 before:rounded-lg before:blur-sm hover:before:blur-none",
        glass: "bg-white/10 backdrop-blur-lg border border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300",
        premium: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
      },
      size: {
        default: "h-12 px-6 text-base font-medium", // 48px for better readability
        sm: "h-10 px-4 text-sm font-medium", // 40px
        lg: "h-14 px-8 text-lg font-medium", // 56px
        xl: "h-16 px-10 text-xl font-semibold", // 64px
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }