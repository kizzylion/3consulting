import { createFileRoute } from '@tanstack/react-router';
import AboutHeading from '@pages/about/heading';
import PartnersSection from '@pages/about/partners';
import MetricSection from '@pages/about/metric';
import OurStorySection from '@pages/about/ourstory';
import OurValueSection from '@pages/about/ourvalues';
import OurTeamSection from '@pages/about/ourteam';
import AboutNewsletter from '@pages/about/newsletter';

export const Route = createFileRoute('/about-us')({
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
