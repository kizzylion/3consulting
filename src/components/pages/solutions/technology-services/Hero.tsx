import React from 'react';
import heroImage from '@assets/techservices-hero.png'

import Button from '@components/ui/button';

const Hero: React.FC = () => {
	return (<section
		id='data-protection-hero'
		className="bg-gray-700"
	>
		<div
			className='px-4 py-12 mx-auto max-w-7xl md:px-8 lg:px-20 md:py-16 lg:py-24'
		>
			<div className='grid grid-cols-1 gap-8 justify-between items-center pt-10 w-full md:grid md:grid-cols-2 md:pt-16'>
				<div className='mb-6 lg:mb-0'>
					<div
						id='badge'
						className='inline-flex items-center px-2 py-1 mb-4 max-w-full text-gray-900 bg-white rounded-lg shadow-md md:w-fit group'
					>
						<div className='flex items-center px-2 py-1 rounded-md border-2 border-gray-400/40'>
							<span className='inline-flex relative justify-center items-center w-3 h-3'>
								<span className='absolute w-full h-full bg-pink-300 rounded-full opacity-75 animate-ping'></span>
								<span className='relative w-2 h-2 bg-red-500 rounded-full'></span>
							</span>
							<div className='ml-3 text-xs font-medium text-nowrap'>
								<p>What's new?</p>
							</div>
						</div>
						<a href='#' className='ml-2 text-xs truncate'>
							Technology Services
						</a>
						<svg
							className='ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'
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
					<h1 className='py-2 mb-6 text-4xl font-bold leading-tight text-transparent text-white  md:text-3xl lg:text-5xl'>
						Technology Services
					</h1>
					<p className='mb-8 text-2xl font-semibold text-gray-200 md:text-4xl'>
						Innovative Solutions for a Secure and Efficient Future
					</p>
					<Button
						as='link'
						to='/contact'
						className='px-8 py-4 text-lg font-semibold text-amber-900 bg-amber-400 rounded-lg transition duration-300'
					>
						Book a Free Consultation
					</Button>
				</div>
				<div className='flex justify-center items-center mt-8 h-full lg:mt-0'>
					<img
						src={heroImage}
						draggable='false'
						alt='Cybersecurity Illustration'
						className='max-w-full h-auto'
					/>
				</div>
			</div>
		</div>
	</section>
	);
};

export default Hero;
