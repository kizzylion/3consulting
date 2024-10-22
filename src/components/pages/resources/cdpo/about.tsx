import pecbLogo from "@assets/pecb-logo.png";
import cdpoAgent from "@assets/cdpo-agent.png";

const AboutCDPO: React.FC = () => {
  return (
    <section id="About-CDPO" className="pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto flex w-full h-fit px-5 md:px-6 pt-24 lg:pt-16 ">
        <div className="container-none grid grid-cols-1 lg:grid-cols-2 gap-12 lg:mt-12">
          <div className="text-contents h-fit">
            <h5 className=" mb-2 text-sm font-semibold  text-orange-500 w-fit">
              About CDPO Training
            </h5>
            <h2 className="text-2xl font-medium mb-2 text-gray-900 md:text-3xl md:mb-4 ">
              PECD Certified Data Protection Officer (CDPO) Training
            </h2>
            <h3 className="text-gray-900 text-lg mb-4 md:text-xl md:mb-6">
              Become a Certified Data Protection Officer (CDPO)
            </h3>
            <p className="text-gray-700 font-normal">
              In an era where data privacy is more critical than ever, the role
              of a Data Protection Officer (DPO) has become essential to
              organizations worldwide. At 3Consult, we offer
              comprehensive Certified Data Protection Officer (CDPO) Training,
              designed to equip professionals with the skills and knowledge
              needed to ensure compliance with data protection laws, including
              GDPR and other relevant privacy regulations.
            </p>
          </div>
          <div className="image-contents flex h-full lg:py-auto">
            <div className="img-frame relative flex  w-fit h-fit mx-auto lg:w-3/5 my-auto ">
              <img
                src={pecbLogo}
                alt=""
                className="absolute bottom-0 shrink  size-40 md:-translate-x-1/2"
              />
              <img src={cdpoAgent} alt="" className="block shrink h-4/5 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCDPO;
