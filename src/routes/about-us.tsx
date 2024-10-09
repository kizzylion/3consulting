import { createFileRoute } from "@tanstack/react-router";
import AboutHeading from "@components/pages/about/heading";
import PartnersSection from "@components/pages/about/partners";
import MetricSection from "@components/pages/about/metric";
import OurStorySection from "@components/pages/about/ourstory";
import OurValueSection from "@components/pages/about/ourvalues";
import OurTeamSection from "@components/pages/about/ourteam";
import AboutNewsletter from "@components/pages/about/newsletter";

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
});

function AboutUs() {
  return (
    <>
      {/* <div className="p-4 pt-24 md:pt-32">Learn more about our company.</div> */}
      <AboutHeading />
      <PartnersSection />
      <MetricSection />
      <OurStorySection />
      <OurValueSection />
      <OurTeamSection />
      <AboutNewsletter />
    </>
  );
}
