"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      
      /* ⚡ THE ZOOM INTERACTION FIX ⚡ 
         Calculates the inverted scale ratio (1 / 1.15) so the scroll 
         delta matches the browser's custom visual layout tracking zoom perfectly. */
      wheelMultiplier: 0.869,
      touchMultiplier: 0.869,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}