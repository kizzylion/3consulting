"use client";
import { useEffect } from "react";
import { Outlet } from '@tanstack/react-router';
import NavBar from '@components/ui/nav-bar';
import Lenis from "lenis"

function View() {
  // we need this for smooth animation on scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  return (
    <div className='h-full mx-auto'>
      <div className='z-20 fixed w-full bg-white h-fit border-b border-gray-300'>
        <NavBar />
      </div>
      <main className='h-full w-full'>
        <Outlet />
      </main>
    </div>
  );
}

export default View;
