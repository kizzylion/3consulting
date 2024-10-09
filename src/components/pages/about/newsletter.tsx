const AboutNewsletter: React.FC = () => {
  return (
    <section id="newsletter" className="w-full pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto w-full px-5 md:px-8">
        <div className="container-none bg-orange-800 rounded-xl md:rounded-3xl px-5 py-10 lg:p-16">
          <div className="section-heading w-full ">
            <div className="heading-subheading max-w-3xl mx-auto text-center w-full mb-8 text-white">
              <h5 className="text-3xl lg:text-4xl text-white font-semibold mb-5 w-fit mx-auto">
                Join our newsletter
              </h5>
              <p className="text-base text-orange-200 md:text-lg">
                Subscribe to stay updated on the latest in data protection and
                consulting
              </p>
            </div>
            <form
              action="#"
              className="max-w-md mx-auto lg:flex items-start gap-4"
            >
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    px-[0.875rem] py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 w-full
                  "
                />
                <p className="text-sm text-orange-100">
                  We care about your privacy policy.
                </p>
              </div>
              <button className="mt-8 md:mt-0 bg-amber-400 hover:bg-amber-500 shadow-md  focus:ring-2 focus:ring-offset-2 active:bg-amber-600 active:scale-95 focus:ring-amber-500 text-gray-900 rounded-lg font-medium px-4 py-3 min-w-50 w-full lg:w-fit cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNewsletter;
