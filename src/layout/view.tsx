"use client";

import { Outlet } from '@tanstack/react-router';
import NavBar from '@components/ui/nav-bar';

function View() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <div className='z-20 sticky top-0 bg-white border-b border-gray-300'>
          <NavBar />
        </div>
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default View;
