import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function animateCounter(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void,
  onComplete?: () => void
): () => void {
  const startTime = performance.now();

  const tick = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    const currentValue = Math.round(start + (end - start) * easedProgress);
    callback(currentValue);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      onComplete?.();
    }
  };

  const rafId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(rafId);
}

export const SITE_CONFIG = {
  name: "Vynedam Talent Hunt 2026",
  shortName: "VTH 2026",
  tagline: "India's Largest Technical Talent Discovery Platform",
  registrationUrl: "#contact",
  email: "talenthunt@vynedam.com",
  phone: "+91 80000 12345",
  address: "Vynedam Technologies Pvt. Ltd., Tech Park, Hyderabad - 500081",
  socialLinks: {
    twitter: "https://twitter.com/VynedamTech",
    linkedin: "https://linkedin.com/company/vynedam",
    instagram: "https://instagram.com/VynedamTech",
    youtube: "https://youtube.com/@VynedamTech",
    discord: "https://discord.gg/vynedam",
  },
};
