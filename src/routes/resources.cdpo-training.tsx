import { createFileRoute } from '@tanstack/react-router'
import AboutCDPO from '@pages/resources/cdpo/about'
import EnrollSection from '@pages/resources/cdpo/enrrolsection'
import Testimony from '@pages/resources/cdpo/testimony'
import StartToday from '@pages/solutions/data-protection/start-today'
import Footer from '@components/ui/Footer'

export const Route = createFileRoute('/resources/cdpo-training')({
  component: CDPOTraining,
})

function CDPOTraining() {
  return (
    <>
      <AboutCDPO />
      <EnrollSection />
      <Testimony />
      <StartToday />
      <Footer />
    </>
  )
}
