import contactimg from '@assets/contactimg.png'

const ContactUs: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32">
      <div className="grid w-full grid-cols-1 items-center justify-between gap-12 lg:grid lg:grid-cols-2">
        <div className="h-fit w-full lg:mb-0">
          <div className="content pb-12 lg:px-12">
            <div className="heading mb-12">
              <h2 className="mb-5 text-3xl font-bold text-gray-900">
                Contact Us
              </h2>
              <p className="text-lg text-gray-700">
                Our team will love to hear from you.
              </p>
            </div>
            <div className="form flex flex-col gap-8">
              <div className="form-field @container/form-field grid grid-cols-2 gap-6">
                <p className="@md/form-field:col-span-1 col-span-2 flex w-full flex-col">
                  <label
                    htmlFor="FName"
                    className="mb-[6px] text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FName"
                    placeholder="First name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="@md/form-field:col-span-1 col-span-2 flex w-full flex-col">
                  <label
                    htmlFor="LName"
                    className="mb-[6px] text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LName"
                    placeholder="Last name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="@2xl/form-field:col-span-1 col-span-2 flex w-full flex-col">
                  <label
                    htmlFor="email"
                    className="mb-[6px] text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="@2xl/form-field:col-span-1 col-span-2 flex w-full flex-col">
                  <label htmlFor="tel" className="mb-[6px] text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    placeholder="+234 8012345678"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="@2xl/form-field:col-span-1 col-span-2 flex w-full flex-col">
                  <label
                    htmlFor="message"
                    className="mb-[6px] text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Leave us a message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
              </div>
              <button className="min-w-50 mt-8 w-full cursor-pointer rounded-lg bg-amber-400 px-4 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600 md:mt-0">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 hidden h-full w-full lg:mt-0 lg:flex">
          <img
            src={contactimg}
            draggable="false"
            alt="Cybersecurity Illustration"
            className="h-auto w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
