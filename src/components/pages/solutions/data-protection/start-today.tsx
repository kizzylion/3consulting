import Button from "@components/ui/button";

export default function StartToday() {
  return (
    <section className="py-16 w-full bg-gray-900">
      <div className="px-5 mx-auto max-w-7xl md:px-8">
        <div className=" md:rounded-2xl ">
          <div className="flex flex-col gap-8 justify-between items-center w-full md:flex-row">
            <div className="text-left">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Start your CDPO training today
              </h2>
              <p className="text-lg text-gray-300">
                Enroll Now and take the next step in securing your future.
              </p>
            </div>
            <div className="flex flex-col shrink-0 gap-4 w-full md:w-auto lg:flex-row ">
              <Button className="w-full text-gray-900 bg-white md:w-auto">
                Learn More
              </Button>
              <Button className="w-full md:w-auto">Enrol Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
