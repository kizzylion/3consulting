import FeatureIcon from '../../ui/featureicon';

const OurValueSection: React.FC = () => {
  return (
    <section id='values-section' className='w-full pb-16 md:pb-24'>
      <div className='max-w-7xl mx-auto w-full px-5 md:px-8'>
        <div className='container-none '>
          <div className='section-heading w-full mb-8 md:mb-12'>
            <div className='heading-subheading max-w-3xl mx-auto text-center w-full mb-16'>
              <h5 className='text-sm text-amber-600 font-semibold mt-2 mb-3 w-fit mx-auto'>
                Our Value
              </h5>
              <h2 className='text-2xl font-semibold leading-[1.2] mb-4 md:mb-5 text-gray-900 md:text-3xl '>
                Integrity, Innovation, and Excellence
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                Our commitment to quality and ethical standards
              </p>
            </div>
          </div>
          <div className='content-section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-12'>
            <div className='value flex flex-col items-center text-center'>
              <FeatureIcon
                icon={<i className='bi bi-shield text-2xl leading-none'></i>}
              />
              <div className='mt-5 text-center'>
                <h4 className='mb-2 text-xl font-semibold text-gray-900'>
                  Integrity
                </h4>
                <p className='text-gray-700'>
                  We ensure that every solution we provide is transparent,
                  honest, and aligned with the best practices.
                </p>
              </div>
            </div>
            <div className='value flex flex-col items-center text-center'>
              <FeatureIcon
                icon={
                  <i className='bi bi-person-check text-2xl leading-none'></i>
                }
              />
              <div className='mt-5 text-center'>
                <h4 className='mb-2 text-xl font-semibold text-gray-900'>
                  Client-Centric Approach
                </h4>
                <p className='text-gray-700'>
                  We deliver tailored solutions that meet specific business
                  needs, ensuring success and long-term growth.
                </p>
              </div>
            </div>
            <div className='value flex flex-col items-center text-center'>
              <FeatureIcon
                icon={<i className='bi bi-lightbulb text-2xl leading-none'></i>}
              />
              <div className='mt-5 text-center'>
                <h4 className='mb-2 text-xl font-semibold text-gray-900'>
                  Innovation
                </h4>
                <p className='text-gray-700'>
                  We stay ahead of the curve by integrating the latest
                  technological advancements and industry trends into our
                  service offerings.
                </p>
              </div>
            </div>
            <div className='value flex flex-col items-center text-center'>
              <FeatureIcon
                icon={<i className='bi bi-trophy text-2xl leading-none'></i>}
              />
              <div className='mt-5 text-center'>
                <h4 className='mb-2 text-xl font-semibold text-gray-900'>
                  Excellence
                </h4>
                <p className='text-gray-700'>
                  We are committed to delivering high-quality services with
                  precision and care.
                </p>
              </div>
            </div>
            <div className='value flex flex-col items-center text-center'>
              <FeatureIcon
                icon={<i className='bi bi-people text-2xl leading-none'></i>}
              />
              <div className='mt-5 text-center'>
                <h4 className='mb-2 text-xl font-semibold text-gray-900'>
                  Collaboration
                </h4>
                <p className='text-gray-700'>
                  We believe in fostering strong partnerships with our clients,
                  working together to solve challenges and achieve success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValueSection;
