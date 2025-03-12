"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const SmoothScroller = createContext(null);

export const useSmoothScroller = () => useContext(SmoothScroller);

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const scroller = new Lenis();
    lenisRef.current = scroller;

    function raf(time) {
      scroller.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        cancelAnimationFrame(rafRef.current);
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <SmoothScroller.Provider value={lenisRef}>{children}</SmoothScroller.Provider>;
}
