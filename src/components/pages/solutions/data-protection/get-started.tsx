import Button from "@components/ui/button";

export default function GetStarted() {
	return (
		<section className="py-16 w-full bg-white md:py-24">
			<div className="max-w-7xl lg:mx-auto md:px-8">
				<div className="p-8 bg-gray-900 md:rounded-2xl md:p-12">
					<div className="flex flex-col gap-8 justify-between items-center w-full md:flex-row">
						<div className="text-left">
							<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
								Start your CDPO training today
							</h2>
							<p className="text-lg text-gray-300">
								Enrol Now and take the next step in securing your future.
							</p>
						</div>
						<div className="flex flex-col-reverse gap-4 w-full md:w-fit md:flex-row">
							<Button className="w-full text-gray-900 bg-white md:w-fit">
								Learn More
							</Button>
							<Button className="w-full md:w-fit">
								Enrol Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
