import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPolishText(text: string) {
  if (!text) return text;
  return text.replace(/(^|\s)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,2})\s+/g, "$1$2\u00A0");
}
