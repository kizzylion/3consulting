import FeatureIcon from "@components/ui/featureicon";

const EnrollSection: React.FC = () => {
  return (
    <section id="Enroll-CDPO" className="pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto flex w-full h-fit px-5 md:px-6 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:mt-12">
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
          <div className="training-content"></div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
