import React from 'react';
import heroImage from '@assets/home-hero.png';

const Hero: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between'>
      <div className='lg:w-1/2 mb-8 lg:mb-0'>
        <div className='inline-flex items-center  rounded-lg border-2 border-gray-400/40 px-2 py-1 mb-6'>
          <span className='border-2 flex items-center p-1 px-2 rounded-md'>
            <span className='flex items-center relative mr-3'>
              <span className='w-3 h-3 bg-pink-300 animate-ping rounded-full absolute -z-5'></span>
              <span className='w-2 h-2 bg-red-500 rounded-full z-20'></span>
            </span>
            <span className='text-sm font-medium'>What's new?</span>
          </span>
          <a href='#' className='text-sm text-gray-600 ml-2 hover:underline'>
            Lorem ipsum dolor sit amet
          </a>
          <svg
            className='w-4 h-4 ml-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
        <h1 className='text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
          Shield Your Business from Cyber Threats
        </h1>
        <p className='text-xl text-gray-600 mb-8'>
          Comprehensive Data Protection and Cybersecurity Solutions
        </p>
        <button className='bg-yellow-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-yellow-600 transition duration-300 text-lg'>
          Book a Free Consultation
        </button>
        <div className='mt-12'>
          <p className='text-sm text-gray-600 mb-4'>
            Trusted Partners : We collaborate with industry-leading partner
          </p>
          <div className='flex flex-wrap items-center gap-6'>
            <img src='/path/to/onbase-logo.png' alt='OnBase' className='h-8' />
            <img src='/path/to/pecb-logo.png' alt='PECB' className='h-8' />
            <img
              src='/path/to/datprof-logo.png'
              alt='DATPROF'
              className='h-8'
            />
            <img src='/path/to/nortei-logo.png' alt='NORTEI' className='h-8' />
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 mt-8 lg:mt-0'>
        <img
          src={heroImage}
          alt='Cybersecurity Illustration'
          className='w-full'
        />
      </div>
    </div>
  );
};

export default Hero;
