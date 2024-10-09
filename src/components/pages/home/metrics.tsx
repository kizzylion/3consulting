export default function Metrics() {
  return (
    <section
      id='metrics-section'
      className='w-full h-fit  pb-12 bg-gray-50 md:pb-16 '
    >
      <div className='max-w-7xl mx-auto w-full h-fit  md:px-8 '>
        <div className='container-none '>
          <div className='section-heading w-full mb-6 md:mb-12 px-4 '>
            <div className='heading-subheading max-w-3xl mx-auto text-center w-full'>
              <div className='flex items-center justify-center p-3 mb-4 md:mb-6 '>
                <i className='bi bi-lightbulb text-amber-500 text-xl lg:text-2xl'></i>
              </div>
              <h2 className='text-2xl font-semibold leading-[1.2] mb-4 md:mb-5 text-gray-900 md:text-3xl '>
                Delivering Innovative Solutions
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                With over 15 years of expertise, we've empowered businesses
                worldwide with tailored data protection, AI ethics, and project
                management solutions.
              </p>
            </div>
          </div>
          <div className='metrics grid grid-cols-1 md:grid-cols-3  md:rounded-lg  px-5 py-6 md:px-8 '>
            <div className='metric p-4 '>
              <h2 className='text-3xl text-amber-500 font-semibold lg:text-5xl md:text-center mb-3'>
                15+
              </h2>
              <p className='text-lg md:text-center text-gray-900'>
                Years of industry leadership
              </p>
            </div>
            <div className='metric p-4 border-y border-gray-300 md:border-y-0 md:border-x '>
              <h2 className='text-3xl text-amber-500 font-semibold lg:text-5xl md:text-center mb-3'>
                200+
              </h2>
              <p className='text-lg md:text-center text-gray-900'>
                Secured businesses globally
              </p>
            </div>
            <div className='metric p-4 '>
              <h2 className='text-3xl text-amber-500 font-semibold lg:text-5xl md:text-center mb-3'>
                100+
              </h2>
              <p className='text-lg md:text-center text-gray-900'>
                Delivered product & services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
