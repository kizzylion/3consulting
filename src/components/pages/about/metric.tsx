const MetricSection: React.FC = () => {
  return (
    <section id="metrics-section" className="w-full h-fit  pb-12  md:pb-16 ">
      <div className="max-w-7xl mx-auto w-full h-fit   md:px-8 ">
        <div className="container-none  ">
          <div className="metrics grid grid-cols-1 md:grid-cols-3  md:rounded-lg bg-gray-50 px-5 py-6 md:px-8 md:py-12 lg:p-16">
            <div className="metric p-4 ">
              <h2 className="text-3xl text-amber-500 font-semibold lg:text-5xl md:text-center mb-3">
                15+
              </h2>
              <p className="text-lg md:text-center text-gray-900">
                Years of industry leadership
              </p>
            </div>
            <div className="metric p-4 border-y border-gray-300 md:border-y-0 md:border-x ">
              <h2 className="text-3xl text-amber-500 font-semibold lg:text-5xl md:text-center mb-3">
                200+
              </h2>
              <p className="text-lg md:text-center text-gray-900">
                Secured businesses globally
              </p>
            </div>
            <div className="metric p-4 ">
              <h2 className="text-3xl text-amber-500 font-semibold lg:text-5xl md:text-center mb-3">
                100+
              </h2>
              <p className="text-lg md:text-center text-gray-900">
                Delivered product & services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricSection;
