import FeatureIcon from "@components/ui/featureicon";
import pecbLogo from "@assets/pecb-logo.png";

const EnrollSection: React.FC = () => {
  return (
    <section id="Enroll-CDPO" className="pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto flex w-full h-fit px-5 md:px-6 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 lg:mt-12 w-full">
          <div className="text-contents h-fit">
            <h5 className="text-sm font-semibold  text-orange-500 w-fit mb-5">
              Why Become a Certified Data Protection Officer?
            </h5>
            <div className="reasons flex flex-col gap-10">
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person text-2xl leading-none transition-all duration-300  group-hover:text-orange-500 group-hover:border-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Expertise in Data Privacy
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Gain an in-depth understanding of global data protection
                    laws and principles, ensuring that your organization remains
                    compliant and protects personal data.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-book text-2xl leading-none transition-all duration-300  group-hover:text-orange-500 group-hover:border-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Career Advancement
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    As data privacy becomes increasingly vital, the demand for
                    certified DPOs is rising, making certification a valuable
                    asset for career growth.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person text-2xl leading-none transition-all duration-300  group-hover:text-orange-500 group-hover:border-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Organizational Trust
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Certified DPOs help businesses build trust with customers,
                    partners, and regulatory authorities by demonstrating a
                    commitment to data protection.
                  </p>
                </div>
              </div>
              <div className="benefits grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-mortarboard block mx-auto w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Hands-on-Learning</p>
                </div>
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-trophy block mx-auto w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Certification</p>
                </div>
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-check block mx-auto w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Expert Instructors</p>
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
                        CDPO Training
                      </h3>
                      <div className="badge w-fit px-3 py-1 font-medium text-sm md:text-base bg-orange-50 text-orange-600 border border-orange-600 rounded-full">
                        Open
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Enrol today and take the next step in your career
                    </p>
                  </div>
                  <div className="image-section flex items-center justify-center w-1/2 ml-auto">
                    <img
                      src={pecbLogo}
                      alt="pecb-logo"
                      className=" flex w-auto h-full shrink grow-0"
                    />
                  </div>
                </div>
              </div>
              <div className="course-highlight w-full h-fit p-6 lg:p-8">
                <div className="title-subtitle w-full h-fit mb-6">
                  <h4 className=" font-semibold">Course Highlights</h4>
                  <p className="text-gray-700">
                    Everything you will learn in this course
                  </p>
                </div>
                <div className="course-highlights grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="highlight flex ">
                    <i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
                    <p className="text-gray-700">
                      Understanding Data Protection Regulations
                    </p>
                  </div>
                  <div className="highlight flex ">
                    <i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
                    <p className="text-gray-700">
                      Data Security & Risk Management{" "}
                    </p>
                  </div>
                  <div className="highlight flex ">
                    <i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
                    <p className="text-gray-700">
                      Data subject rights and incident response
                    </p>
                  </div>
                  <div className="highlight flex ">
                    <i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
                    <p className="text-gray-700">Implementation & Compliance</p>
                  </div>
                  <div className="highlight flex ">
                    <i className="bi bi-check-circle text-2xl text-orange-600 mr-3"></i>
                    <p className="text-gray-700">DPO Responsibilities </p>
                  </div>
                </div>
              </div>
              <div className="enroll-cta flex justify-center w-full p-6 lg:p-8 border-t border-gray-200">
                <button className="px-6 py-3 w-full font-medium text-gray-900 bg-amber-400 rounded-lg shadow-md cursor-pointer hover:bg-amber-500 focus:ring-2 focus:ring-offset-2 active:bg-amber-600 active:scale-95 focus:ring-amber-500 ">
                  Enrol Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
