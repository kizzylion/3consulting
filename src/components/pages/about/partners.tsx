import { partners } from "@utils/index";

const PartnersSection: React.FC = () => {
  return (
    <section
      id="partners"
      className="w-full h-fit pt-8 pb-12 md:pt-12 md:pb-16 "
    >
      <div className="max-w-7xl mx-auto w-full h-fit px-5  md:px-8 ">
        <div className="container-none">
          <div className="max-w-5xl w-full mx-auto justify-center flex-wrap flex gap-8 md:gap-12">
            {partners.map((partner) => (
              <img
                draggable="false"
                src={partner.image}
                alt={partner.name}
                className="h-8 w-auto object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
