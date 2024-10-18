import Logo from '@assets/Logo.png';
import { useState } from 'react';
import Button from './button';
import { useHoveredElement } from '@hooks/useHoveredElement';

type NavItem = {
  label: string;
  to?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  {
    label: 'Solutions',
    to: '/solutions/data-protection',
    children: [
      { label: 'Data Protection', to: '/solutions/data-protection' },
      { label: 'Project Management', to: '/solutions/project-management' },
      { label: 'Technology Services', to: '/solutions/technology-services' },
    ],
  },
  {
    label: 'Resources',
    to: '/resources/blog',
    children: [
      { label: 'Blog', to: '/resources/blog' },
      { label: 'CDPO Training', to: '/resources/cdpo-training' },
      { label: 'Educational Technology Training', to: '/resources/educational-technology-training' },
    ],
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeElement, onHover, onLeave, setElementRef } =
    useHoveredElement(500);

  return (
    <div
      id='Nav-section'
      className='max-w-7xl mx-auto w-full px-5 md:px-8 h-fit sticky top-0 z-50'
    >
      <nav className='py-4 w-full bg-white'>
        <section className='flex justify-between items-center mx-auto'>
          <div className='flex items-center gap-x-4'>
            <img src={Logo} alt='logo' />
            <ul className='hidden md:flex space-x-4 ml-20'>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className='relative'
                  onMouseEnter={() => onHover(item.label)}
                  onMouseLeave={onLeave}
                >
                  <Button
                    to={item.to || '#'}
                    as='link'
                    className='text-gray-600 focus:underline ring-0 bg-transparent shadow-none'
                  >
                    {item.label}
                  </Button>
                  {item.children && activeElement === item.label && (
                    <div ref={setElementRef(item.label)}>
                      <Dropdown items={item.children} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden md:block'>
            <Button
              to='/contact'
              as='link'
              className='text-accent-dark-ui text-sm bg-amber-400 hover:text-amber-600 py-3 cursor-pointer px-4'
            >
              Contact Us
            </Button>
          </div>
          <button className='md:hidden' onClick={() => setIsOpen(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 9h16.5m-16.5 6.75h16.5'
              />
            </svg>
          </button>
        </section>
      </nav>
      <SmallNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

const Dropdown = ({ items }: { items: NavItem[] }) => {
  return (
    <div className='absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-1 whitespace-nowrap w-56'>
      {items.map((item, index) => (
        <Button
          key={index}
          as='link'
          to={item.to || '#'}
          className='block px-5 py-2 text-sm text-gray-700 w-full text-left'
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

const SmallNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/60 z-50 flex flex-col justify-start'>
      <button
        className='absolute top-4 right-4 bg-white/80 backdrop-blur-3xl shadow-md p-2 rounded-full'
        onClick={onClose}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-4 text-black'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
      </button>
      <ul className='flex flex-col items-start space-y-4 text-left pt-6 bg-white w-3/4 p-4 rounded-se-lg h-full overflow-y-auto'>
        <li className='w-full'>
          <img src={Logo} alt='logo' />
        </li>
        {navItems.map((item, index) => (
          <RecursiveNavItem key={index} item={item} onClose={onClose} />
        ))}
      </ul>
    </div>
  );
};

const RecursiveNavItem = ({
  item,
  onClose,
  depth = 0,
}: {
  item: NavItem;
  onClose: () => void;
  depth?: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <li className={`w-full ${depth > 0 ? 'ml-4' : ''}`}>
      {item.children ? (
        <>
          <Button
            as='button'
            onClick={toggleOpen}
            className='text-gray-600 hover:text-amber-500 bg-transparent shadow-none flex justify-between items-center w-full p-0 hover:bg-transparent focus:ring-transparent active:bg-transparent active:outline-none'
          >
            {item.label}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </Button>
          {isOpen && (
            <ul className='mt-2 space-y-2'>
              {item.children.map((child, index) => (
                <RecursiveNavItem
                  key={index}
                  item={child}
                  onClose={onClose}
                  depth={depth + 1}
                />
              ))}
            </ul>
          )}
        </>
      ) : (
        <Button
          as='link'
          to={item.to || '#'}
          onClick={onClose}
          className='text-gray-600 hover:text-amber-500 bg-transparent shadow-none '
        >
          {item.label}
        </Button>
      )}
    </li>
  );
};
