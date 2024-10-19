import FeatureIcon from "@components/ui/featureicon";

const EnrollSection: React.FC = () => {
  return (
    <section id="Enroll-CDPO" className="pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto flex w-full h-fit px-5 md:px-6 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:mt-12">
          <div className="text-contents h-fit">
            <h5 className=" mb-2 text-sm font-semibold  text-orange-500 w-fit mb-5">
              Why Become a Certified Data Protection Officer?
            </h5>
            <div className="reasons flex flex-col">
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person text-2xl leading-none transition-all duration-300  group-hover:text-orange-500 group-hover:border-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2">Expertise in Data Privacy</h4>
                  <p>
                    Gain an in-depth understanding of global data protection
                    laws and principles, ensuring that your organization remains
                    compliant and protects personal data.
                  </p>
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
