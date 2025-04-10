import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number) {
  return value.toLocaleString('no-NO', {
    style: 'currency',
    currency: 'NOK'
  })
}
export function formatPercentage(percent: number) {
  return `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
}