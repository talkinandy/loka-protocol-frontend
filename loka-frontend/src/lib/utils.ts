import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBTC(value: number): string {
  return value.toFixed(8) + " BTC"
}

export function formatUSD(value: number): string {
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' 
  }).format(value)
}

export function formatHashrate(value: number): string {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + " EH/s"
  } else if (value >= 1000) {
    return (value / 1000).toFixed(2) + " PH/s"
  }
  return value.toFixed(2) + " TH/s"
}

export function formatPercentage(value: number): string {
  return value.toFixed(2) + "%"
}

export function calculateCollateral(contractValue: number): number {
  return contractValue * 1.1 // 110% collateral
}

export function calculateDailyCollateralRelease(totalCollateral: number, daysRemaining: number): number {
  return totalCollateral / daysRemaining
}