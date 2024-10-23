import FeatureIcon from '@components/ui/featureicon'

const EnrolETTSection: React.FC = () => {
  return (
    <section id="Enroll-ETT" className="pb-12 lg:pb-16">
      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 md:px-6">
        <div className="grid w-full grid-cols-1 gap-16 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-5 w-fit text-sm font-semibold text-orange-500">
              Why Choose 3Consult for Educational Technology Training?
            </h5>
            <div className="reasons flex flex-col gap-10">
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-card-checklist text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Customized Training Programs
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    We tailor our training to meet the unique needs of your
                    institution, ensuring that educators are fully equipped to
                    integrate technology into their teaching.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person-check text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Expert Trainers
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Our trainers are experienced professionals in educational
                    technology, bringing industry best practices to the
                    classroom.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-cpu text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    End-to-End Solutions
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    From initial consultation to implementation, we provide
                    comprehensive support to ensure the success of your
                    technology initiatives.
                  </p>
                </div>
              </div>
              <div className="benefits grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-video3 mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Online Training</p>
                </div>

                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-workspace mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">In-Person Training</p>
                </div>
              </div>
            </div>
          </div>
          <div className="training-content flex items-center justify-center">
            <div className="enrol-card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="enrol-card-header">
                <div className="header-content grid h-fit w-full grid-cols-4 items-center justify-between border-b border-gray-200 p-6 pt-8 lg:p-8 lg:pb-6">
                  <div className="heading-subtext col-span-4 flex h-fit w-full flex-col gap-2">
                    <div className="heading-badge flex items-center">
                      <h3 className="mr-4 text-xl font-semibold">
                        Educational Technology Training
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      Contact us today to learn more
                    </p>
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
                    <p className="text-gray-700">Teacher Training Program</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">Technology Provision</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Program Design & Implementation
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Ongoing Support & Professional Development
                    </p>
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

export default EnrolETTSection
