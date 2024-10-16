import featImg2 from '@assets/outsourced-dpo-service.png';
import featImg3 from '@assets/ai-ethics&governance.png';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function Features() {
	return (
		<div id='feature' className='pt-12 bg-white'>
			<section className='px-5 mx-auto max-w-7xl md:px-6 lg:px-20 text-pretty'>
				<div id='feature-heading' className='mx-auto mb-12 max-w-3xl'>
					<p className='mb-3 font-semibold text-center text-amber-600'>
						Key Management Services
					</p>
					<h2 className='mb-4 text-3xl font-bold text-center text-gray-800'>
						Maximize Efficiency and Drive Results with 3Consult's Expert Solutions
					</h2>
					<p className='text-lg text-center text-gray-600'>
						We have already helped over 200+ businesses  to achieve remarkable result					</p>
				</div>
				<div id='features-list' className='flex flex-col gap-12 lg:gap-24'>
					<div className='grid grid-cols-1 gap-10 items-center mb-6 feature lg:grid-cols-2 lg:gap-24'>
						<div className='order-first lg:order-last image-section lg:size-full'>
							<DotLottiePlayer
								src="https://lottie.host/b90fb03d-c8a0-4035-aef9-63957d3a8dae/DixaQuFM7M.json"
								autoplay
								loop
								className='object-cover w-full h-full brightness-90 contrast-125 object-top-center'
							/>
						</div>
						<div className='order-last content-section lg:order-first'>
							<div className='content-heading'>
								<h3 className='mb-5 text-2xl font-medium leading-5 text-gray-950'>
									Agile Project Management
								</h3>
								<p className='leading-6 text-gray-700'>
									Our Agile Project Management services allow your organization to stay flexible and responsive to change. By applying Agile methodologies, we ensure your projects are executed smoothly and delivered on time while allowing for adjustments along the way to meet evolving business needs.
								</p>
							</div>
							<div className='pl-2 mb-7 feature-list'>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Rapid Delivery</h4>
										<p className='text-gray-700'>
											Faster project execution with incremental delivery, allowing you to see results sooner
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Adaptability</h4>
										<p className='text-gray-700'>
											Our Agile approach allows for changes and improvements throughout the project lifecycle.
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
										<h4 className='font-medium'>Collaboration</h4>
										<p className='text-gray-700'>
											We encourage close collaboration between stakeholders and our team to ensure that the project stays aligned with your business goals.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-10 items-center mb-6 feature lg:grid-cols-2 lg:gap-24'>
						<div className='order-first lg:order-first image-section lg:size-full'>
							<img
								src={featImg2}
								alt=''
								draggable='false'
								className='object-cover w-full h-full brightness-90 contrast-125 object-top-center'
							/>
						</div>
						<div className='order-last content-section lg:order-last'>
							<div className='content-heading'>
								<h3 className='mb-5 text-2xl font-medium leading-5 text-gray-950'>
									Outsourced Data Protection Officer (DPO) Services
								</h3>
								<p className='leading-6 text-gray-700'>
									Data privacy is more important than ever, but hiring a full-time Data Protection Officer (DPO) can be costly and resource-intensive. Our Outsourced DPO Services offer a flexible, cost-effective solution for organizations that need expert oversight of their data protection programs.
								</p>
							</div>
							<div className='pl-2 mb-7 feature-list'>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Certified DPOs:</h4>
										<p className='text-gray-700'>
											Our DPOs are internationally certified and equipped to manage your data protection compliance, including GDPR, NDPR, and other privacy regulations.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>
											Continuous Monitoring
										</h4>
										<p className='text-gray-700'>
											We provide ongoing support and audits to ensure that your data protection policies are up-to-date and compliant.
										</p>
									</div>
								</div>
								<div className='flex gap-3 mt-7'>
									<i className='text-xl font-bold text-amber-600 bi bi-check-circle'></i>
									<div className='content'>
										<h4 className='font-medium'>Incident Response & Reporting</h4>
										<p className='text-gray-700'>
											In case of a data breach or compliance issue, we handle the response, reporting, and communication with relevant regulatory authorities.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-10 items-center mb-6 feature lg:grid-cols-2 lg:gap-24'>
						<div className='order-first lg:order-last image-section lg:size-full'>
							<img
								src={featImg3}
								alt=''
								draggable='false'
								className='object-cover w-full h-full brightness-90 contrast-125 object-top-center'
							/>
						</div>
						<div className='order-last content-section lg:order-first'>
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

				</div>
			</section>
		</div>
	);
}
