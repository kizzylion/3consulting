import { Outlet } from '@tanstack/react-router';
import NavBar from '@components/ui/nav-bar';

function View() {
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
