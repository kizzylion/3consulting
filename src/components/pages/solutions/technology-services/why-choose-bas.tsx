import FeatureIcon from "@components/ui/featureicon";

const WhyChooseBAS: React.FC = () => {
	return (
		<section id="why-choose-bas" className="pb-12 lg:pb-16">
			<div className="max-w-7xl mx-auto flex w-full h-fit px-5 md:px-6 ">
				<div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 lg:mt-12 w-full">
					<div className="text-contents h-fit">
						<h5 className="text-sm font-semibold  text-orange-500 w-fit mb-5">
							Why Choose Our BAS Service?
						</h5>
						<div className="reasons flex flex-col gap-10">
							<div className="reason flex gap-4">
								<FeatureIcon
									className="flex-shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md"
									icon={
										<i className="bi bi-shield-check text-2xl leading-none transition-all duration-300 group-hover:text-orange-500"></i>
									}
								/>
								<div className="reason-content">
									<h4 className="mb-2 text-xl font-semibold text-gray-900">
										Realistic Cyber Attack Simulations
									</h4>
									<p className="text-gray-700 leading-relaxed">
										We simulate various cyberattacks that mimic real-world threats, helping you understand how well your security measures perform under pressure.
									</p>
								</div>
							</div>
							<div className="reason flex gap-4">
								<FeatureIcon
									className="flex-shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md"
									icon={
										<i className="bi bi-clipboard-data text-2xl leading-none transition-all duration-300 group-hover:text-orange-500"></i>
									}
								/>
								<div className="reason-content">
									<h4 className="mb-2 text-xl font-semibold text-gray-900">
										Comprehensive Risk Assessment
									</h4>
									<p className="text-gray-700 leading-relaxed">
										Our team conducts a thorough evaluation of your security infrastructure, identifying weak points and providing actionable recommendations for improvement.
									</p>
								</div>
							</div>
							<div className="reason flex gap-4">
								<FeatureIcon
									className="flex-shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md"
									icon={
										<i className="bi bi-lightning-charge text-2xl leading-none transition-all duration-300 group-hover:text-orange-500"></i>
									}
								/>
								<div className="reason-content">
									<h4 className="mb-2 text-xl font-semibold text-gray-900">
										Enhanced Incident Response
									</h4>
									<p className="text-gray-700 leading-relaxed">
										By simulating breaches, we help your organization improve its incident response capabilities, ensuring quicker reaction times and more effective damage control.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="training-content">
						<div className="enrol-card flex flex-col bg-white shadow-xl rounded-2xl border border-gray-200">
							<div className="enrol-card-header">
								<div className="header-content grid grid-cols-4 justify-between items-center w-full h-fit p-6 pt-8 lg:p-8 lg:pb-6 border-b border-gray-200 ">
									<div className="heading-subtext col-span-3 flex flex-col gap-2 w-full h-fit">
										<div className="heading-badge flex items-center">
											<h3 className="text-xl font-semibold mr-4">
												Breach Attack & Simulation
											</h3>
										</div>
										<p className="text-gray-700">
											We provide a proactive approach to cybersecurity
										</p>
									</div>
									<div className="image-section flex items-center justify-center w-1/2 ml-auto">
									</div>
								</div>
							</div>
							<div className="course-highlight w-full h-fit p-6 lg:p-8">
								<div className="title-subtitle w-full h-fit mb-6">
									<h4 className=" font-semibold">What we offer</h4>
									<p className="text-gray-700">
										Ready to see how our BAS services can help protect your business?
									</p>
								</div>
								<div className="course-highlights grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
									<div className="highlight flex ">
										<i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
										<p className="text-gray-700">
											Simulated Security Breaches
										</p>
									</div>
									<div className="highlight flex ">
										<i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
										<p className="text-gray-700">
											Detailed Reports
										</p>
									</div>
									<div className="highlight flex ">
										<i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
										<p className="text-gray-700">
											Continuous Testing
										</p>
									</div>
									<div className="highlight flex ">
										<i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
										<p className="text-gray-700">Proactive Protection</p>
									</div>
								</div>
							</div>
							<div className="enroll-cta flex justify-center w-full p-6 lg:p-8 border-t border-gray-200">
								<button className="px-6 py-3 w-full font-medium text-gray-900 bg-amber-400 rounded-lg shadow-md cursor-pointer hover:bg-amber-500 focus:ring-2 focus:ring-offset-2 active:bg-amber-600 active:scale-95 focus:ring-amber-500 ">
									Request a demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseBAS;
