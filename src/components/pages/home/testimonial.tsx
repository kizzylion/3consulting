import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaDotButton';

//Assets
import mrs_amina from '@assets/mrs_amina.png';
import star from '@assets/ic_round_star.svg';

const testimonial = [
  {
    name: 'Mrs. Amina',
    image: mrs_amina,
    quote:
      "3Consulting's tailored solutions helped us confidently address the complex challenges of data protection laws. Their expertise in policy and training aligned our practices with international standards.",
    role: 'COO, FinServe Nigeria',
    rating: 5,
  },
  {
    name: 'Mrs. Amina',
    image: mrs_amina,
    quote:
      "3Consulting's tailored solutions helped us confidently address the complex challenges of data protection laws. Their expertise in policy and training aligned our practices with international standards.",
    role: 'COO, FinServe Nigeria',
    rating: 3,
  },
  {
    name: 'Mrs. Amina',
    image: mrs_amina,
    quote:
      "3Consulting's tailored solutions helped us confidently address the complex challenges of data protection laws. Their expertise in policy and training aligned our practices with international standards.",
    role: 'COO, FinServe Nigeria',
    rating: 4,
  },
];

export default function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section id='testimonial-section' className='bg-gray-50 '>
      <div className='embla max-w-7xl mx-auto md:px-8 h-fit pb-12 md:pb-16'>
        <div className='embla__viewport overflow-hidden' ref={emblaRef}>
          <div className='embla__container flex gap-4'>
            {testimonial.map((data, index) => (
              <div
                className={`embla__slide flex items-center gap-4 w-full flex-[0_0_100%] justify-center flex-col px-5 lg:px-10 space-y-3 lg:space-y-8`}
                key={index}
              >
                <div className=''>
                  <div
                    id='stars'
                    className='flex items-center mx-auto mb-8 w-fit'
                  >
                    {Array.from({ length: data.rating }).map((_, index) => (
                      <img
                        key={index}
                        src={star}
                        className='w-6 h-6 object-contain'
                      />
                    ))}
                  </div>
                  <p className='text-2xl lg:text-3xl font-medium text-center'>
                    {data.quote}
                  </p>
                </div>
                <div>
                  <div className='flex flex-col items-center gap-2'>
                    <img src={data.image} className='w-10 h-10 object-cover' />
                    <div className='text-center'>
                      <p className='text-lg font-semibold'>{data.name}</p>
                      <p className='text-sm text-gray-500'>{data.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='embla__controls w-full flex justify-center items-center mt-4 gap-8 space-x-4'>
          <div className='embla__dots'>
            {Array.from({ length: testimonial.length }).map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`h-3 w-3 rounded-full text-white embla__dot ml-2 ${
                  index === selectedIndex ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
