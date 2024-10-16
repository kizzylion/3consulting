import FeatureIcon from "@components/ui/featureicon";


export default function WhyUs() {
	return (
		<section id='why-us' className='pb-12 w-full bg-white md:pb-24'>
			<div className='px-5 mx-auto w-full max-w-7xl md:px-8'>
				<div className='container-none'>
					<div className='mb-8 w-full section-heading md:mb-12'>
						<div className='mx-auto mb-16 w-full max-w-3xl text-center heading-subheading'>
							<h5 className='mx-auto mt-2 mb-3 text-sm font-semibold text-amber-600 w-fit'>
								Why Choose Us
							</h5>

						</div>
					</div>
					<div className='grid grid-cols-1 gap-10 w-full content-section md:grid-cols-2 lg:grid-cols-3 lg:gap-12'>
						<div className='flex flex-col items-center text-center value group'>
							<FeatureIcon
								className='transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md'
								icon={<i className='text-2xl leading-none transition-all duration-300 bi bi-shield group-hover:text-orange-500 group-hover:border-orange-500'></i>}
							/>
							<div className='mt-5 text-center'>
								<h4 className='mb-2 text-xl font-semibold text-gray-900'>
									Certified Expert
								</h4>
								<p className='text-gray-700'>
									Our team consists of licensed and certified Data Protection Officers (DPOs) and consultants with in-depth knowledge of local and global data privacy laws.
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center text-center value group'>
							<FeatureIcon
								className='transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md'
								icon={
									<i className='text-2xl leading-none transition-all duration-300 bi bi-person-check group-hover:text-orange-500 group-hover:border-orange-500'></i>
								}
							/>
							<div className='mt-5 text-center'>
								<h4 className='mb-2 text-xl font-semibold text-gray-900'>
									Tailored Solutions
								</h4>
								<p className='text-gray-700'>
									We create custom solutions designed to meet your organization's specific data protection needs.
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center text-center value group'>
							<FeatureIcon
								className='transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md'
								icon={<i className='text-2xl leading-none transition-all duration-300 bi bi-gear group-hover:text-orange-500 group-hover:border-orange-500'></i>}
							/>
							<div className='mt-5 text-center'>
								<h4 className='mb-2 text-xl font-semibold text-gray-900'>
									Global Compliance
								</h4>
								<p className='text-gray-700'>
									Whether operating in Nigeria, Rwanda, or Zimbabwe, we ensure your organization is compliant with relevant data regulations.
								</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
