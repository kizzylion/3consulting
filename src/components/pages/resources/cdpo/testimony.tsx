import testimonyImage from '@assets/groupImages1.png'
import testifier1 from '@assets/testifier1.png'
import testifier2 from '@assets/testifier2.png'
import TestifiersCard from './TestifiersCard'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'

const testifiers = [
  {
    name: '_Mrs. Amina',
    position: 'Student',
    image: testifier1,
    stars: '✭✭✭✭✭',
    quote:
      "I've learned so much about data protection regulation and implementation from this course. It's been a game-changer for me.",
  },
  {
    name: '_Mr. John',
    position: 'Student',
    image: testifier2,
    stars: '✭✭✭✭✭',
    quote:
      'The course was very informative and practical. It helped me understand the importance of data protection and how to implement it in my organization.',
  },
]

const Testimony = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ])

  const { prevBtnDisabled, nextBtnDisabled, onPrevBtnClick, onNextBtnClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto flex max-w-7xl px-5 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <TestifiersCard
              testifiers={testifiers}
              prevButton={
                <PrevButton
                  onClick={onPrevBtnClick}
                  disabled={prevBtnDisabled}
                />
              }
              nextButton={
                <NextButton
                  onClick={onNextBtnClick}
                  disabled={nextBtnDisabled}
                />
              }
            />
            <div className="embla__controls mt-5">
              <div className="action flex w-full items-center justify-between lg:w-auto">
                <PrevButton
                  onClick={onPrevBtnClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextBtnClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>
          <div className="image-content order-first flex items-center justify-center lg:order-last">
            <img
              src={testimonyImage}
              alt="testimony"
              className="mx-auto my-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimony
