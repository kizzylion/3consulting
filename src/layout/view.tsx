import { Outlet, useLocation } from '@tanstack/react-router';
import { Toaster } from 'sonner';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import NavBar from '@components/ui/nav-bar';


const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about-us': 'About Us',
  '/solutions/data-protection': 'Data Protection Solutions',
  '/solutions/project-management': 'Project Management Solutions',
  '/solutions/technology-services': 'Technology Services',
  '/resources/blog': 'Blog',
  '/resources/cdpo-training': 'CDPO Training',
  '/resources/educational-technology-training': 'Educational Technology Training',
  '/contact': 'Contact Us',
};

function View() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || '3Consult | Home';
    document.title = `3Consult | ${title}`;

    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: location.pathname, href: location.href, title });
  }, [location.pathname]);

  return (
    <div className='min-h-screen flex flex-col'>
      <Toaster />
      <div className='z-20 sticky top-0 bg-white border-b border-gray-300'>

        <NavBar />
      </div>
      <main className='flex-grow'>
        <Outlet />
      </main>
    </div>
  );
}

export default View;
