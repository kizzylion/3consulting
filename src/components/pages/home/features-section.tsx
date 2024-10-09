import featImg1 from "../../../assets/features-1.jpg";
import featImg2 from "../../../assets/features-2.jpg";
import featImg3 from "../../../assets/features-3.jpg";

const Features: React.FC = () => {
  return (
    <div id="feature" className="bg-white pt-12">
      <section className="max-w-7xl mx-auto px-5 md:px-6 lg:px-20 text-pretty">
        <div id="feature-heading" className="mx-auto max-w-3xl mb-12">
          <p className="text-center text-amber-600 font-semibold mb-3">
            Solution
          </p>
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-4 ">
            Empowering Your Business in the Digital Age
          </h2>
          <p className="text-lg text-center text-gray-600">
            we provide a wide range of services designed to ensure your business
            operates securely, efficiently, and in compliance with ever-evolving
            regulations.
          </p>
        </div>
        <div id="features-list" className=" flex flex-col gap-5 lg:gap-24">
          <div className="feature grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-12">
            <div className="content-section">
              <div className="content-heading">
                <h3 className="text-2xl font-medium mb-5 text-gray-950 leading-5">
                  Data Protection Services
                </h3>
                <p className="text-gray-700 leading-6">
                  Our experts ensure compliance with global data privacy
                  regulations, protecting your data and strengthening your
                  operations.
                </p>
              </div>
              <div className="feature-list pl-2 mb-7">
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">Data Protection Audit</h4>
                    <p className="text-gray-700">
                      Comprehensive audits to assess rist and ensure regulatory
                      alignment
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">Policy Development & Review</h4>
                    <p className="text-gray-700">
                      Custom policies to meet compliance standards and support
                      business growth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">Capacity Building</h4>
                    <p className="text-gray-700">
                      Training programs to equip your team with the skills
                      needed for responsible data management.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <a className="font-medium text-amber-600 hover:text-amber-700 cursor-pointer ">
                Learn more <i className="bi bi-arrow-right"></i>{" "}
              </a>
            </div>
            <div className="image-section lg:mt-0 aspect-video lg:aspect-square lg:size-full  border-2  border-red-400">
              <img
                src={featImg1}
                alt=""
                draggable="false"
                className="w-full h-full brightness-90 contrast-125  object-top-center object-cover"
              />
            </div>
          </div>
          <div className="feature grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-6">
            <div className="image-section lg:mt-0 aspect-video lg:aspect-square lg:size-full order-2 lg:order-none">
              <img
                src={featImg2}
                alt=""
                draggable="false"
                className="w-full h-full brightness-90 contrast-125  object-top-center object-cover"
              />
            </div>
            <div className="content-section">
              <div className="content-heading">
                <h3 className="text-2xl font-medium mb-5 text-gray-950 leading-5">
                  Project Management & Outsourcing
                </h3>
                <p className="text-gray-700 leading-6">
                  Optimize your operations with our outsourced DPO, project
                  management, and AI ethics services. Our certified
                  professionals will help you manage compliance and drive
                  business outcomes
                </p>
              </div>
              <div className="feature-list pl-2 mb-7">
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">Agile Methodology</h4>
                    <p className="text-gray-700">
                      We use Agile for seamless, adaptive project execution.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      Outsourced Data Protection Officer (DPO) Services
                    </h4>
                    <p className="text-gray-700">
                      Certified DPOs provide expert guidance, reducing
                      compliance costs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">AI Ethics & Governance</h4>
                    <p className="text-gray-700">
                      Navigate AI challenges with our ethical AI consultancy and
                      assessments.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <a className="font-medium text-amber-600 hover:text-amber-700 cursor-pointer ">
                Learn more <i className="bi bi-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
          <div className="feature grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-12">
            <div className="content-section">
              <div className="content-heading">
                <h3 className="text-2xl font-medium mb-5 text-gray-950 leading-5">
                  Technology Servvices Services
                </h3>
                <p className="text-gray-700 leading-6">
                  Harness the power of cutting-edge technology to streamline
                  your HR processes and secure your infrastructure.
                </p>
              </div>
              <div className="feature-list pl-2 mb-7">
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      HRIS (Human Resources Information System)
                    </h4>
                    <p className="text-gray-700">
                      End-to-end HR management with seamless data integration
                      and compliance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-7">
                  <i className="bi bi-check-circle text-xl text-amber-600 font-bold"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      Breach Attack Simulation (BAS) Services
                    </h4>
                    <p className="text-gray-700">
                      Simulate real-world attacks to assess and enhance your
                      security measures.
                    </p>
                  </div>
                </div>
              </div>
              <a className="font-medium text-amber-600 hover:text-amber-700 cursor-pointer ">
                Learn more <i className="bi bi-arrow-right"></i>{" "}
              </a>
            </div>
            <div className="image-section lg:mt-0 aspect-video lg:aspect-square lg:size-full ">
              <img
                src={featImg3}
                alt=""
                draggable="false"
                className="w-full h-full brightness-90 contrast-125  object-top-center object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
