import FeatureIcon from '@components/ui/featureicon'
import pecbLogo from '@assets/pecb-logo.png'

const EnrollSection: React.FC = () => {
  return (
    <section id="Enroll-CDPO" className="pb-12 lg:pb-16">
      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 md:px-6">
        <div className="grid w-full grid-cols-1 gap-16 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-5 w-fit text-sm font-semibold text-orange-500">
              Why Become a Certified Data Protection Officer?
            </h5>
            <div className="reasons flex flex-col gap-10">
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Expertise in Data Privacy
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Gain an in-depth understanding of global data protection
                    laws and principles, ensuring that your organization remains
                    compliant and protects personal data.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-book text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Career Advancement
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    As data privacy becomes increasingly vital, the demand for
                    certified DPOs is rising, making certification a valuable
                    asset for career growth.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Organizational Trust
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Certified DPOs help businesses build trust with customers,
                    partners, and regulatory authorities by demonstrating a
                    commitment to data protection.
                  </p>
                </div>
              </div>
              <div className="benefits grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-mortarboard mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Hands-on-Learning</p>
                </div>
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-trophy mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Certification</p>
                </div>
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-check mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Expert Instructors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="training-content flex items-center justify-center">
            <div className="enrol-card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="enrol-card-header">
                <div className="header-content grid h-fit w-full grid-cols-4 items-center justify-between border-b border-gray-200 p-6 pt-8 lg:p-8 lg:pb-6">
                  <div className="heading-subtext col-span-3 flex h-fit w-full flex-col gap-2">
                    <div className="heading-badge flex items-center">
                      <h3 className="mr-4 text-xl font-semibold">
                        CDPO Training
                      </h3>
                      <div className="badge w-fit rounded-full border border-orange-600 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600 md:text-base">
                        Open
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Enrol today and take the next step in your career
                    </p>
                  </div>
                  <div className="image-section ml-auto flex w-1/2 items-center justify-center">
                    <img
                      src={pecbLogo}
                      alt="pecb-logo"
                      className="flex h-full w-auto shrink grow-0"
                    />
                  </div>
                </div>
              </div>
              <div className="course-highlight h-fit w-full p-6 lg:p-8">
                <div className="title-subtitle mb-6 h-fit w-full">
                  <h4 className="font-semibold">Course Highlights</h4>
                  <p className="text-gray-700">
                    Everything you will learn in this course
                  </p>
                </div>
                <div className="course-highlights grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Understanding Data Protection Regulations
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Data Security & Risk Management{' '}
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Data subject rights and incident response
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">Implementation & Compliance</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">DPO Responsibilities </p>
                  </div>
                </div>
              </div>
              <div className="enroll-cta flex w-full justify-center border-t border-gray-200 p-6 lg:p-8">
                <button className="w-full cursor-pointer rounded-lg bg-amber-400 px-6 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600">
                  Enrol Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnrollSection
