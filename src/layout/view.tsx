import { Outlet } from '@tanstack/react-router';
import NavBar from '@components/ui/nav-bar';

function View() {
  return (
    <div className='min-h-screen mx-auto'>
      <div className=''>
        <NavBar />
      </div>
      <main className=''>
        <Outlet />
      </main>
    </div>
  );
}

export default View;
