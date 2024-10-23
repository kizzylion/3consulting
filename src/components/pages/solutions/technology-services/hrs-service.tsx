import featImg2 from '@assets/streamline-hrs.png'

export default function HrsService() {
	return (
		<div id='feature' className='py-12 w-full bg-white'>
			<section className='px-5 mx-auto max-w-7xl md:px-6 lg:px-8'>
				<div className='grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-16'>
					<div className='order-first lg:order-first image-section w-full h-80'>
						<img
							src={featImg2}
							alt='BAS Service Illustration'
							draggable='false'
							className='object-contain w-full h-full brightness-90 contrast-125'
						/>
					</div>
					<div className='order-last content-section lg:order-last w-full'>
						<div className="w-full">
							<h5 className="mb-4 text-sm font-semibold text-amber-600 lg:w-fit">
								HIRS Service
							</h5>
							<h2 className="text-2xl font-semibold leading-[1.2] mb-4 md:mb-5 text-gray-900 md:text-4xl ">
								Streamline Your Human Resource Management
							</h2>
							<p className="text-lg text-gray-600 md:text-xl">
								Managing human resources effectively is a key challenge for businesses of all sizes. At 3Consult, our HRIS Servicesprovide comprehensive solutions for managing recruitment, performance, learning, and development, helping your HR team operate more efficiently and your business grow
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
