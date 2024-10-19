import Logo from '@assets/Logo.png';
import { useState, useCallback, useEffect } from 'react';
import Button from './button';
import { useHoveredElement } from '@hooks/useHoveredElement';
import { motion, AnimatePresence } from 'framer-motion';

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

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div
      id='Nav-section'
      className='sticky top-0 z-50 px-5 mx-auto w-full max-w-7xl md:px-8 h-fit'
    >
      <nav className='py-4 w-full bg-white'>
        <section className='flex justify-between items-center mx-auto'>
          <div className='flex gap-x-4 items-center'>
            <img src={Logo} alt='logo' />
            <ul className='hidden ml-20 space-x-4 md:flex'>
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
                    className='text-gray-600 bg-transparent ring-0 shadow-none focus:underline'
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
              className='px-4 py-3 text-sm bg-amber-400 cursor-pointer text-accent-dark-ui hover:text-amber-600'
            >
              Contact Us
            </Button>
          </div>
          <button
            className="inline-flex z-50 justify-center items-center text-center bg-white rounded-full transition size-10 md:hidden group text-slate-800"
            aria-pressed={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            <svg className="pointer-events-none fill-current size-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]" y="7" width="9" height="2" rx="1"></rect>
              <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45" y="7" width="16" height="2" rx="1"></rect>
              <rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:-rotate-[225deg]" y="7" width="9" height="2" rx="1"></rect>
            </svg>
          </button>
        </section>
      </nav>
      <SmallNav isOpen={isOpen} onClose={toggleMenu} />
    </div>
  );
}

const Dropdown = ({ items }: { items: NavItem[] }) => {
  return (
    <div className='absolute left-0 top-full py-2 mt-1 w-56 whitespace-nowrap bg-white rounded-md shadow-md'>
      {items.map((item, index) => (
        <Button
          key={index}
          as='link'
          to={item.to || '#'}
          className='block px-5 py-2 w-full text-sm text-left text-gray-700'
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='flex fixed inset-0 z-40 flex-col justify-start'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className='absolute inset-0 bg-black/60'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className='overflow-y-auto w-3/4 h-full bg-white'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <AnimatePresence>
              {showContent && (
                <motion.ul
                  className='flex flex-col items-start p-4 pt-8 space-y-4 text-left rounded-se-lg'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <li className='mb-4 w-full size-6'>
                    <img src={Logo} alt='logo' />
                  </li>
                  {navItems.map((item, index) => (
                    <RecursiveNavItem key={index} item={item} onClose={onClose} />
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
            className='flex justify-between items-center p-0 w-full text-gray-600 bg-transparent shadow-none hover:text-amber-500 hover:bg-transparent focus:ring-transparent active:bg-transparent active:outline-none'
          >
            {item.label}
            <motion.svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </motion.svg>
          </Button>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className='mt-2 space-y-2'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.children.map((child, index) => (
                  <RecursiveNavItem
                    key={index}
                    item={child}
                    onClose={onClose}
                    depth={depth + 1}
                  />
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Button
          as='link'
          to={item.to || '#'}
          onClick={onClose}
          className='text-gray-600 bg-transparent shadow-none hover:text-amber-500'
        >
          {item.label}
        </Button>
      )}
    </li>
  );
};
