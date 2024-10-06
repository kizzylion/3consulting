import { Link } from '@tanstack/react-router';

export default function NavBar() {
  return (
    <div>
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
    </div>
  );
}
