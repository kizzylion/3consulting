import { createFileRoute } from '@tanstack/react-router'
import Hero from '@components/pages/solutions/project-management/hero'
import Overview from '@components/pages/solutions/project-management/overview'
import Features from '@components/pages/solutions/project-management/features'
import Contactus from '@components/pages/solutions/project-management/contactus'
import Newsletter from '@components/ui/NewsLetter'
import Footer from '@components/ui/Footer'

export const Route = createFileRoute('/solutions/project-management')({
  component: ProjectManagement,
})

function ProjectManagement() {
  return (
    <div id="project-management" className="">
      <div className="">
        <Hero />
        <Overview />
        <Features />
        <Contactus />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}
