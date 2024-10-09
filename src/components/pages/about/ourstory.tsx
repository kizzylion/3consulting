const OurStorySection: React.FC = () => {
  return (
    <section className="w-full pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto w-full px-5 md:px-8">
        <div className="container-none ">
          <div className="section-heading w-full mb-8 md:mb-12">
            <div className="heading-subheading max-w-3xl w-full ">
              <h5 className="text-sm text-amber-600 font-semibold mt-2 mb-3 w-fit">
                Our Story
              </h5>
              <h2 className="text-2xl font-semibold leading-[1.2] mb-4 md:mb-5 text-gray-900 md:text-3xl ">
                A Journey of Innovation and Protection
              </h2>
              <p className="text-base text-gray-700 ">
                We have already helped over 200+ businesses to achieve
                remarkable result
              </p>
            </div>
          </div>
          <div className="content-section w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="text-base text-gray-700 leading-[150%]">
              <p className="mb-3">
                At 3Consulting Limited, our story began in 2007 with a clear
                vision: to help businesses navigate the complexities of an
                ever-changing digital world. Founded by a group of passionate
                professionals with expertise in data protection, cybersecurity,
                and technology consulting, we set out to create a firm that
                could blend innovation with security, offering tailored
                solutions that empower organizations to grow confidently.
              </p>
              <p>
                From the start, we understood the increasing need for businesses
                to protect their data and comply with evolving regulatory
                frameworks. This understanding became our driving force, leading
                us to establish 3Consulting as a trusted partner for
                organizations seeking expert guidance in the digital landscape.
              </p>
            </div>
            <div className="purpose-section">
              <h5 className="text-sm text-amber-600 font-semibold mt-2 mb-3 w-fit">
                Our Purpose
              </h5>
              <div className="purpose-list flex flex-col gap-5 ">
                <div className="purpose flex gap-3 max-w-xl ">
                  <i className="bi bi-globe-americas text-2xl text-amber-600 "></i>
                  <p className="text-gray-700">
                    To provide cutting-edge solutions to enhance security,
                    efficiency, and compliance across sectors.
                  </p>
                </div>
                <div className="purpose flex gap-3 max-w-xl ">
                  <i className="bi bi-globe-americas text-2xl text-amber-600 "></i>
                  <p className="text-gray-700">
                    To help businesses meet regulatory standards, ensuring
                    privacy and security.
                  </p>
                </div>
                <div className="purpose flex gap-3 max-w-xl ">
                  <i className="bi bi-globe-americas text-2xl text-amber-600 "></i>
                  <p className="text-gray-700">
                    To keep professionals ahead in data protection and
                    educational technology.
                  </p>
                </div>
                <div className="purpose flex gap-3 max-w-xl ">
                  <i className="bi bi-globe-americas text-2xl text-amber-600 "></i>
                  <p className="text-gray-700">
                    To tailor solutions to meet clients' needs, fostering strong
                    partnerships for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
