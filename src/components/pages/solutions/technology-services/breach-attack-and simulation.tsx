import featImg2 from '@assets/bas-service.png';


export default function BreachAttackAndSimulation() {
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
							<h5 className="mb-2 text-sm font-semibold text-amber-600">
								BAS service
							</h5>
							<h2 className="text-2xl font-semibold leading-tight mb-4 text-gray-900 md:text-3xl lg:text-4xl">
								Breach Attack & Simulation (BAS) Services
							</h2>
							<p className="mt-4 text-base text-gray-700 md:text-lg">
								At 3Consult, our Breach Attack & Simulation (BAS) Services provide a proactive approach to cybersecurity, enabling organizations to test their security systems through simulated real-world attacks. This allows us to identify vulnerabilities, test response protocols, and ensure your business is protected against the latest threats.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
