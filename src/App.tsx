import { Outlet, Link } from '@tanstack/react-router';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-grid-pattern bg-grid-size'></div>
      <nav className='p-4'>
        <ul className='flex space-x-4'>
          <li>
            <Link
              to='/'
              className='text-blue-500 hover:underline [&.active]:font-bold'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about-us'
              className='text-blue-500 hover:underline [&.active]:font-bold'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/solutions'
              className='text-red-500 hover:underline [&.active]:font-bold'
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              to='/resources'
              className='text-blue-500 hover:underline [&.active]:font-bold'
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='text-blue-500 hover:underline [&.active]:font-bold'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
