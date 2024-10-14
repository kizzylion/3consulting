export default function Newsletter() {
  return (
    <section id='newsletter' className='pb-16 w-full md:pb-24'>
      <div className='px-5 mx-auto w-full max-w-7xl md:px-8'>
        <div className='px-5 py-10 bg-gray-50 rounded-xl container-none md:rounded-3xl lg:p-16'>
          <div className='w-full section-heading'>
            <div className='mx-auto mb-8 w-full max-w-3xl text-center heading-subheading'>
              <h5 className='mx-auto mb-5 text-3xl font-semibold text-gray-900 lg:text-4xl w-fit'>
                Join our newsletter
              </h5>
              <p className='text-base text-gray-700 md:text-lg'>
                Subscribe to stay updated on the latest in data protection and
                consulting
              </p>
            </div>
            <form
              action='#'
              className='gap-4 items-start mx-auto max-w-md lg:flex'
            >
              <div className='flex flex-col gap-4 w-full'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='
                    px-[0.875rem] py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 w-full
                  '
                />
                <p className='text-sm text-gray-600'>
                  We care about your privacy policy.
                </p>
              </div>
              <button className='px-4 py-3 mt-8 w-full font-medium text-gray-900 bg-amber-400 rounded-lg shadow-md cursor-pointer md:mt-0 hover:bg-amber-500 focus:ring-2 focus:ring-offset-2 active:bg-amber-600 active:scale-95 focus:ring-amber-500 min-w-50 lg:w-fit'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

