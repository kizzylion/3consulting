import ettImg from '@assets/ettheroimage.png'

const AboutETT: React.FC = () => {
  return (
    <section id="About-ETT" className="pb-12 lg:pb-16">
      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 pt-24 md:px-6 lg:pt-16">
        <div className="container-none grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-2 w-fit text-sm font-semibold text-orange-500">
              About Education Technology Training
            </h5>
            <h2 className="mb-2 text-2xl font-medium text-gray-900 md:mb-4 md:text-3xl">
              Educational Technology Training & Services
            </h2>
            <h3 className="mb-4 text-lg text-gray-900 md:mb-6 md:text-xl">
              Empowering Educators Through Technology
            </h3>
            <p className="font-normal text-gray-700">
              Our Educational Technology Training & Services are designed to
              help educators integrate modern digital tools into their teaching
              methods, enhancing the learning experience for students and
              ensuring institutions are equipped for the future.
            </p>
          </div>
          <div className="image-contents lg:py-auto flex h-full">
            <div className="img-frame relative mx-auto my-auto flex h-fit w-fit lg:w-3/5">
              <img src={ettImg} alt="" className="block h-4/5 shrink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutETT
