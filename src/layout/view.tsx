import { Outlet } from '@tanstack/react-router';
import NavBar from '@components/ui/nav-bar';

function View() {
  return (
    <div className='min-h-screen bg-white max-w-7xl mx-auto'>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default View;
