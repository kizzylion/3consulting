import Button from "@components/ui/button";

export default function Contactus() {
	return (
		<section className='px-8 py-12 mx-auto max-w-7xl lg:px-20 lg:py-24'>
			<div className='w-full'>
				<div className='flex flex-col gap-x-4 text-white bg-orange-900 rounded-xl h-fit lg:flex-row'>
					<div className='flex flex-col justify-center items-start px-5 py-8 space-y-6 lg:w-3/5 lg:px-10 lg:py-16'>
						<div className='space-y-3 lg:space-y-5'>
							<h3 className='text-3xl font-bold lg:text-4xl'>
								Contact Us Today
							</h3>
							<p className='font-medium text-orange-300 text-md lg:text-xl'>
								Start your journey toward efficient project management and expert compliance solutions today.
							</p>
						</div>
						<div className='flex flex-col items-start mt-8 space-y-4 w-full lg:flex-row lg:space-y-0 lg:space-x-4'>
							<Button
								as='link'
								to='/contact'
								className='px-8 py-4 w-full text-lg font-semibold text-center text-amber-900 bg-amber-400 rounded-lg transition duration-300 hover:bg-amber-500 lg:w-auto'
							>
								Contact Us
							</Button>
							<Button
								as='link'
								variant='outline'
								className='flex gap-x-2 justify-center items-center px-8 py-4 w-full text-center text-gray-800 bg-white transition duration-300 lg:text-left lg:border-none lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:w-auto'
								to='/services'
							>
								Learn more
							</Button>
						</div>
					</div>
					<div className='hidden justify-center items-center p-4 lg:flex bg-gray-300/80 lg:w-2/5 lg:h-auto rounded-e-lg'>
						<span className='text-4xl font-bold text-amber-900'>3Consulting</span>
					</div>
				</div>
			</div>
		</section>
	)
}
