import Button from '@components/ui/button'

export default function StartToday() {
  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="md:rounded-2xl">
          <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-left">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Start your CDPO training today
              </h2>
              <p className="text-lg text-gray-300">
                Enroll Now and take the next step in securing your future.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-4 md:w-auto lg:flex-row">
              <Button className="w-full bg-white text-gray-900 md:w-auto">
                Learn More
              </Button>
              <Button className="w-full md:w-auto">Enrol Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
