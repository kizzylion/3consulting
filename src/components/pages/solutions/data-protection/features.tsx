import featImg1 from '@assets/Audit-amico 1.png';
import featImg2 from '@assets/Insurance-bro 1.png';
import featImg3 from '@assets/skills.png';
import featImg4 from '@assets/consultancy.png';

export default function Features() {
	return (
		<div id='feature' className='pt-12 bg-white'>
			<section className='px-5 mx-auto max-w-7xl md:px-6 lg:px-20 text-pretty'>
				<div id='feature-heading' className='mx-auto mb-12 max-w-3xl'>
					<p className='mb-3 font-semibold text-center text-amber-600'>
						Key Data Protection Services
					</p>
					<h2 className='mb-4 text-3xl font-bold text-center text-gray-800'>
						Protect Your Business, Secure Your Future
					</h2>
					<p className='text-lg text-center text-gray-600'>
						We have already helped over 200+ businesses  to achieve remarkable result
					</p>
				</div>
				<div id='features-list' className='flex flex-col gap-12 lg:gap-24'>
					<div className='grid grid-cols-1 gap-10 items-center mb-6 feature lg:grid-cols-2 lg:gap-24'>
						<div className='order-first lg:order-first image-section aspect-video lg:aspect-square lg:size-full'>
							<img
								src={featImg1}
								alt=''
								draggable='false'
								className='object-cover w-full h-full brightness-90 contrast-125 object-top-center'
							/>
						</div>
						<div className='order-last content-section lg:order-last'>
							<div className='content-heading'>
								<h3 className='mb-5 text-2xl font-medium leading-5 text-gray-950'>
									Data Protection Services
								</h3>
								<p className='leading-6 text-gray-700'>
									Our experts ensure compliance with global data privacy
									regulations, protecting your data and strengthening your
									operations.
								</p>
							</div>
							<div className='pl-2 mb-7 feature-list'>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Data Protection Audit</h4>
										<p className='text-gray-700'>
											Our Data Protection Audit service provides a comprehensive review of your organization's data handling processes, identifying potential risks and ensuring alignment with relevant data protection regulations like GDPR, NDPR, and more.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Risk Identification</h4>
										<p className='text-gray-700'>
											Uncover vulnerabilities in data storage, transfer, and processing.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Compliance Check</h4>
										<p className='text-gray-700'>
											Ensure alignment with local and global standards.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Actionable Audit</h4>
										<p className='text-gray-700'>
											Receive recommendations to improve data security and minimize risks.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-10 items-center mb-6 feature lg:grid-cols-2 lg:gap-24'>
						<div className='order-first lg:order-last image-section aspect-video lg:aspect-square lg:size-full'>
							<img
								src={featImg2}
								alt=''
								draggable='false'
								className='object-cover w-full h-full brightness-90 contrast-125 object-top-center'
							/>
						</div>
						<div className='order-last content-section lg:order-first'>
							<div className='content-heading'>
								<h3 className='mb-5 text-2xl font-medium leading-5 text-gray-950'>
									Policy Development
								</h3>
								<p className='leading-6 text-gray-700'>
									Developing robust and compliant data protection policies is critical to securing your business operations. We help you craft policies that meet legal requirements and adapt to evolving regulatory landscapes.
								</p>
							</div>
							<div className='pl-2 mb-7 feature-list'>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Custom Policy Creation:</h4>
										<p className='text-gray-700'>
											Tailored policies that fit your business's unique needs.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>
											Regulatory Adherence
										</h4>
										<p className='text-gray-700'>
											Ensure that your policies comply with GDPR, NDPR, and other regulations.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Periodic Reviews</h4>
										<p className='text-gray-700'>
											Ongoing policy reviews to keep up with legal updates.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-10 items-center mb-6 feature lg:grid-cols-2 lg:gap-24'>
						<div className='order-first lg:order-first image-section aspect-video lg:aspect-square lg:size-full'>
							<img
								src={featImg3}
								alt=''
								draggable='false'
								className='object-cover w-full h-full brightness-90 contrast-125 object-top-center'
							/>
						</div>
						<div className='order-last content-section lg:order-last'>
							<div className='content-heading'>
								<h3 className='mb-5 text-2xl font-medium leading-5 text-gray-950'>
									Capacity Building
								</h3>
								<p className='leading-6 text-gray-700'>
									Empower your team with the skills and knowledge needed to handle sensitive data securely. Our capacity-building services offer comprehensive training programs tailored to your organization's specific needs.
								</p>
							</div>
							<div className='pl-2 mb-7 feature-list'>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>
											Team Training
										</h4>
										<p className='text-gray-700'>
											Equip your staff with data protection best practices.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>
											Workshops & Seminars
										</h4>
										<p className='text-gray-700'>
											Practical sessions on data security, privacy, and compliance.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>
											Continous Learning
										</h4>
										<p className='text-gray-700'>
											Ensure your team stays ahead of regulatory changes.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-10 items-center mb-6 feature lg:grid-cols-2 lg:gap-24'>
						<div className='order-first lg:order-last image-section aspect-video lg:aspect-square lg:size-full'>
							<img
								src={featImg4}
								alt=''
								draggable='false'
								className='object-cover w-full h-full brightness-90 contrast-125 object-top-center'
							/>
						</div>
						<div className='order-last content-section lg:order-first'>
							<div className='content-heading'>
								<h3 className='mb-5 text-2xl font-medium leading-5 text-gray-950'>
									Data Consulting Services
								</h3>
								<p className='leading-6 text-gray-700'>
									Our Data Consulting Services cover a wide range of expertise
									across Nigeria, Rwanda, and Zimbabwe, helping businesses
									navigate local and international data protection
									requirements.
								</p>
							</div>
							<div className='pl-2 mb-7 feature-list'>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Nigeria</h4>
										<p className='text-gray-700'>
											Licensed as a Data Protection Compliance Organization (DPCO), we offer consulting services that ensure NDPR compliance and adherence to Nigerian data laws.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>
											Rwanda & Zimbabwe
										</h4>
										<p className='text-gray-700'>
											Our certified professionals help organizations stay ahead of privacy regulations and implement best practices for secure data management.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>AI Ethics & Governance</h4>
										<p className='text-gray-700'>
											Navigate AI challenges with our ethical AI consultancy and
											assessments.{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
