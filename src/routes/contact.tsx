import { createFileRoute } from '@tanstack/react-router'
import ContactUs from '@components/pages/contactus/ContactUs'
import Footer from '@components/ui/Footer'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <>
      <ContactUs />
      <Footer />
    </>
  )
}
