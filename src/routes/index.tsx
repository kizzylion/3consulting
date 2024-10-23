import { createFileRoute } from '@tanstack/react-router'
import Hero from '@pages/home/Hero'
import Features from '@pages/home/features-section'
import Carousel from '@pages/home/Carousel'
import Testimonial from '@pages/home/testimonial'
import FactsAndQuestion from '@pages/home/frequently-asked-questions'
import Metrics from '@pages/home/metrics'
import HomeNewsletter from '@pages/home/NewsLetter'
import Footer from '@components/ui/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relative mx-auto">
      <div
        id="Background"
        className="absolute inset-0 z-0 h-full w-full overflow-hidden"
      >
        <svg
          className="absolute left-1/2 top-0 h-full max-h-screen w-auto max-w-full -translate-x-1/2 transform"
          viewBox="0 0 1440 810"
          preserveAspectRatio="xMidYMin slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <mask
              id="mask0_17_547"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="810"
            >
              <rect
                width="1440"
                height="810"
                fill="url(#paint0_radial_17_547)"
              />
            </mask>
            <g mask="url(#mask0_17_547)">
              <g clipPath="url(#clip0_17_547)">
                <rect
                  width="1920"
                  height="1080"
                  transform="translate(-240 -135)"
                  fill="white"
                />
                <line x1="-240" y1="1.5" x2="1680" y2="1.5" stroke="#D0D5DD" />
                <line
                  x1="-240"
                  y1="81.5"
                  x2="1680"
                  y2="81.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="161.5"
                  x2="1680"
                  y2="161.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="241.5"
                  x2="1680"
                  y2="241.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="321.5"
                  x2="1680"
                  y2="321.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="401.5"
                  x2="1680"
                  y2="401.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="481.5"
                  x2="1680"
                  y2="481.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="561.5"
                  x2="1680"
                  y2="561.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="641.5"
                  x2="1680"
                  y2="641.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="721.5"
                  x2="1680"
                  y2="721.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="-240"
                  y1="801.5"
                  x2="1680"
                  y2="801.5"
                  stroke="#D0D5DD"
                />
                <line
                  x1="0.500244"
                  y1="-78"
                  x2="0.50016"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="80.5005"
                  y1="-78"
                  x2="80.5004"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="160.5"
                  y1="-78"
                  x2="160.5"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="240.5"
                  y1="-78"
                  x2="240.5"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="320.501"
                  y1="-78"
                  x2="320.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="400.501"
                  y1="-78"
                  x2="400.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="480.501"
                  y1="-78"
                  x2="480.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="560.501"
                  y1="-78"
                  x2="560.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="640.501"
                  y1="-78"
                  x2="640.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="720.501"
                  y1="-78"
                  x2="720.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="800.501"
                  y1="-78"
                  x2="800.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="880.501"
                  y1="-78"
                  x2="880.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="960.501"
                  y1="-78"
                  x2="960.501"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="1040.5"
                  y1="-78"
                  x2="1040.5"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="1120.5"
                  y1="-78"
                  x2="1120.5"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="1200.5"
                  y1="-78"
                  x2="1200.5"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="1280.5"
                  y1="-78"
                  x2="1280.5"
                  y2="1842"
                  stroke="#D0D5DD"
                />
                <line
                  x1="1360.5"
                  y1="-78"
                  x2="1360.5"
                  y2="1842"
                  stroke="#D0D5DD"
                />
              </g>
            </g>
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_17_547"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 405) rotate(90) scale(405 720)"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_17_547">
              <rect
                width="1920"
                height="1080"
                fill="white"
                transform="translate(-240 -135)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <section className="relative">
        <Hero />
        <Features />
        <Carousel />
        <Metrics />
        <Testimonial />
        <FactsAndQuestion />
        <HomeNewsletter />
        <Footer />
      </section>
    </div>
  )
}
