"use client";
import { useEffect, useRef, createContext } from "react";
import { Outlet, useLocation } from '@tanstack/react-router';
import NavBar from '@components/ui/nav-bar';
import Lenis from "lenis"

export const LenisContext = createContext<Lenis | null>(null);

function View() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),


      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up function
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    // Reset Lenis scroll position and recalculate on route change
    lenisRef.current?.scrollTo(0, { immediate: true });
    lenisRef.current?.resize();
  }, [location.pathname]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      <div className='min-h-screen flex flex-col'>
        <div className='z-20 sticky top-0 bg-white border-b border-gray-300'>
          <NavBar />
        </div>
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </LenisContext.Provider>
  );
}

export default View;
