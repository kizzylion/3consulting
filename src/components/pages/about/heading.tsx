const AboutHeading: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full px-5 md:px-8 pt-10 md:pt-16">
        <div className="container-none grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="content-section w-full">
            <h5 className="text-sm text-amber-600 font-semibold mt-2 mb-3">
              About us
            </h5>
            <h1 className="text-2xl font-semibold leading-[1.2] mb-4 text-gray-900 md:text-4xl lg:text-5xl ">
              Our mission is to secure your operation while maximizing their
              growth potential
            </h1>
            <p className="text-base text-gray-700 ">
              At 3Consulting, our mission is to provide tailored, cutting-edge
              solutions that empower our clients to thrive in today’s digital
              landscape. We focus on innovation, data protection, and ethical
              governance to ensure our clients can operate securely while
              maximizing their growth potential.
            </p>
          </div>
          <div className="img-section relative w-full aspect-video md:aspect-auto bg-gray-100">
            <img src="" alt="" />
            <span className="absolute w-full text-center top-1/2  text-gray-500">
              Founders Image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeading;
