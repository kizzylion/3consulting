import AboutETT from '@components/pages/resources/ett/about'
import EnrolETTSection from '@components/pages/resources/ett/enrrolsection'
import EttTestimony from '@components/pages/resources/ett/testimony'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/resources/educational-technology-training'
)({
  component: EducationalTechnologyTraining,
})

function EducationalTechnologyTraining() {
  return (
    <>
      <AboutETT />
      <EnrolETTSection />
      <EttTestimony />
    </>
  )
}
