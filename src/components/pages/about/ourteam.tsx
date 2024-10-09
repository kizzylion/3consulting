const OurTeamSection: React.FC = () => {
  return (
    <section id="team-section" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full px-5 md:px-8">
        <div className="container-none grid grid-cols-1 lg:grid-cols-3  ">
          <div className="section-heading w-full mb-16 lg:mb-0  ">
            <div className="heading-subheading mx-auto text-center lg:text-left lg:mx-0 w-full ">
              <h5 className="text-sm text-amber-600 font-semibold mt-2 mb-3 lg:w-fit ">
                Our Value
              </h5>
              <h2 className="text-2xl font-semibold leading-[1.2] mb-4 lg:mb-5 text-gray-900 lg:text-3xl ">
                Meet Our Dedicated Team
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                A diverse group of experts committed to your success
              </p>
            </div>
            {/* Make this button our primary component button later  */}
            <button className="mt-8 bg-amber-400 hover:bg-amber-500 shadow-md  focus:ring-2 focus:ring-offset-2 active:bg-amber-600 active:scale-95 focus:ring-amber-500 text-gray-900 rounded-lg font-medium px-4 py-3 min-w-50 w-full lg:w-3/4 cursor-pointer">
              Contact us
            </button>
          </div>
          <div className="content-section w-full col-span-2 gap-12 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pl-24">
            <div className="member flex gap-5 lg:flex-col">
              <div className="avatar size-20 lg:size-24 shrink-0 rounded-full mb-5 bg-gray-200 text-gray-700"></div>
              <div className="text-left">
                <h4 className="text-lg font-semibold">Marvin John </h4>
                <h5 className="text-base text-amber-600">Founder & CEO</h5>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Cursus at elit
                  vehicula nulla orci amet
                </p>
                <div className="flex mt-4 gap-4">
                  <a href="#" className="text-gray-600 text-2xl">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="text-gray-600 text-2xl">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="member flex gap-5 lg:flex-col">
              <div className="avatar size-20 lg:size-24 shrink-0 rounded-full mb-5 bg-gray-200 text-gray-700"></div>
              <div className="text-left">
                <h4 className="text-lg font-semibold">Marvin John </h4>
                <h5 className="text-base text-amber-600">Founder & CEO</h5>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Cursus at elit
                  vehicula nulla orci amet
                </p>
                <div className="flex mt-4 gap-4">
                  <a href="#" className="text-gray-600 text-2xl">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="text-gray-600 text-2xl">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="member flex gap-5 lg:flex-col">
              <div className="avatar size-20 lg:size-24 shrink-0 rounded-full mb-5 bg-gray-200 text-gray-700"></div>
              <div className="text-left">
                <h4 className="text-lg font-semibold">Marvin John </h4>
                <h5 className="text-base text-amber-600">Founder & CEO</h5>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Cursus at elit
                  vehicula nulla orci amet
                </p>
                <div className="flex mt-4 gap-4">
                  <a href="#" className="text-gray-600 text-2xl">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="text-gray-600 text-2xl">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
