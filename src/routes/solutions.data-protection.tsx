import { createFileRoute } from "@tanstack/react-router";
import Hero from "@pages/solutions/data-protection/hero";
import Overview from "@pages/solutions/data-protection/overview";
import Features from "@pages/solutions/data-protection/features";
import GetStarted from "@pages/solutions/data-protection/get-started";
import WhyUs from "@pages/solutions/data-protection/why-us";
import StartToday from "@pages/solutions/data-protection/start-today";
import NewsLetter from "@components/pages/home/NewsLetter";

export const Route = createFileRoute("/solutions/data-protection")({
  component: DataProtection,
});

function DataProtection() {
  return (
    <div id="solutions" className="relative mx-auto">
      <div className="relative z-10">
        <Hero />
        <Overview />
        <Features />
        <GetStarted />
        <WhyUs />
        <StartToday />
        <NewsLetter />
      </div>
    </div>
  );
}
