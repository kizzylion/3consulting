import { createFileRoute } from "@tanstack/react-router";
import AboutCDPO from "@pages/resources/cdpo/about";
import EnrollSection from "@pages/resources/cdpo/enrrolsection";

export const Route = createFileRoute("/resources/cdpo-training")({
  component: CDPOTraining,
});

function CDPOTraining() {
  return (
    <>
      <AboutCDPO />
      <EnrollSection />
    </>
  );
}
