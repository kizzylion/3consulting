import React from 'react';
import heroImage from '@assets/home-hero.png';
import OnBaseLogo from '@assets/partners/onbase.png';
import PECBLogo from '@assets/partners/pecb.png';
import DatprofLogo from '@assets/partners/Dataprof.png';
import NorteiLogo from '@assets/partners/norteN.png';
import Button from '@components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className='px-4 md:px-8 lg:px-20 mx-auto max-w-7xl'>
      <div className='grid grid-cols-1 w-full md:grid md:grid-cols-2 items-center justify-between pt-16 md:pt-24'>
        <div className=' mb-6 lg:mb-0 w-full'>
          <div
            id='badge'
            className='inline-flex items-center rounded-lg border-2 max-w-full md:w-fit border-gray-400/40 px-2 py-1 mb-4 '
          >
            <span className='border-2 flex items-center p-1 px-2 rounded-md w-fit '>
              <span className='flex items-center relative '>
                <span className='w-3 h-3 bg-pink-300 animate-ping rounded-full absolute -z-5'></span>
                <span className='w-2 h-2 bg-red-500 rounded-full z-20'></span>
              </span>
              <div className='text-xs font-medium text-nowrap ml-3'>
                <p>What's new?</p>
              </div>
            </span>
            <a href='#' className='text-xs text-gray-600 ml-2 truncate'>
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
          <h1 className='text-4xl lg:text-6xl font-bold mb-6 py-2 leading-tight bg-gradient-to-r from-accent-dark-ui to-accent-ui bg-clip-text text-transparent'>
            Shield Your Business from Cyber Threats
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            Comprehensive Data Protection and Cybersecurity Solutions
          </p>
          <Button
            as='link'
            to='/contact'
            className='bg-amber-400 text-amber-900 font-semibold py-4 px-8 rounded-lg hover:bg-amber-500 transition duration-300 text-lg'
          >
            Book a Free Consultation
          </Button>
          <div className='mt-16'>
            <p className='text-sm text-gray-600 mb-4'>
              <span className='font-bold text-gray-950'>
                Trusted Partners :
              </span>{' '}
              We collaborate with industry-leading partner
            </p>
            <div className='flex items-center gap-6 overflow-auto'>
              {partners.map((partner) => (
                <img
                  src={partner.image}
                  alt={partner.name}
                  className='h-8 aspect-video object-contain'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='w-auto h-full md:pr-16 mt-8 lg:mt-0'>
          <img
            src={heroImage}
            alt='Cybersecurity Illustration'
            className='w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const partners = [
  {
    name: 'OnBase',
    image: OnBaseLogo,
  },
  {
    name: 'PECB',
    image: PECBLogo,
  },
  {
    name: 'Datprof',
    image: DatprofLogo,
  },
  {
    name: 'Nortei',
    image: NorteiLogo,
  },
];
