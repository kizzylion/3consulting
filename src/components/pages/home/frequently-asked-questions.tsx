import Accordion from '@components/ui/Accordion';
import Icon from '@components/ui/icons';

export default function FactsAndQuestion() {
  return (
    <section className=' md:px-8 lg:px-20 lg:py-24  py-12 mx-auto max-w-7xl'>
      <div className='flex flex-col gap-y-3 text-center'>
        <h2 className='text-3xl font-bold'>Frequently Asked Questions</h2>
        <p className='text-md text-gray-500'>
          Everything you need to know about 3Consulting
        </p>
      </div>
      <div className='flex justify-center md:max-w-3xl mx-auto divide-y divide-gray-200'>
        <Accordion className='mt-10 w-full'>
          <Accordion.Item index={0} className='border-none py-4 '>
            <Accordion.Trigger
              triggerOpen={<Icon.PlusIcon />}
              triggerClose={<Icon.MinusIcon />}
            >
              <p className='text-md font-medium'>
                What is Our expertise in NDPA?
              </p>
            </Accordion.Trigger>
            <Accordion.Content>
              <p>
                We specialize in helping organizations achieve compliance with
                data protection regulations such as the GDPR and Nigeria Data
                Protection Regulation (NDPR). Our services include Data
                Protection Audits, Policy Development, Outsourced DPO (Data
                Protection Officer) services, CDPO Training, and Capacity
                Building to ensure your data is safeguarded and your team is
                well-equipped to handle privacy concerns.
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <div className='border border-gray-200 ' />
          <Accordion.Item index={1} className='border-none py-4'>
            <Accordion.Trigger
              triggerOpen={<Icon.PlusIcon />}
              triggerClose={<Icon.MinusIcon />}
            >
              <p className='text-md font-medium'>
                Why should I outsource my Data Protection Officer (DPO) services
                to 3Consulting?
              </p>
            </Accordion.Trigger>
            <Accordion.Content>
              <span>
                Outsourcing your DPO to 3Consulting allows you to access
                certified and experienced consultants without the expense of
                hiring a full-time in-house expert. Our DPO services include
                compliance monitoring, risk assessments, policy development, and
                responding to data subject requests. We also provide ongoing
                support to ensure you stay compliant with ever-changing
                regulations.
              </span>
            </Accordion.Content>
          </Accordion.Item>
          <div className='border border-gray-200' />
          <Accordion.Item index={2} className='border-none py-4'>
            <Accordion.Trigger
              triggerOpen={<Icon.PlusIcon />}
              triggerClose={<Icon.MinusIcon />}
            >
              <p className='text-md font-medium'>
                How do our Project Management Services work?
              </p>
            </Accordion.Trigger>
            <Accordion.Content>
              <span>
                Our Project Management Services are designed to streamline and
                enhance your project execution. We use the Agile Methodology to
                ensure flexibility and adaptability while providing resource
                augmentation to meet your project needs. Our team ensures that
                your projects are delivered on time, within scope, and with high
                efficiency.
              </span>
            </Accordion.Content>
          </Accordion.Item>
          <div className='border border-gray-200' />
          <Accordion.Item index={3} className='border-none py-4'>
            <Accordion.Trigger
              triggerOpen={<Icon.PlusIcon />}
              triggerClose={<Icon.MinusIcon />}
            >
              <p className='text-md font-medium'>
                What is the CDPO Training Program?
              </p>
            </Accordion.Trigger>
            <Accordion.Content>
              <span>
                Our Certified Data Protection Officer (CDPO) Training Program
                equips individuals with the knowledge and skills needed to
                manage data protection frameworks within organizations. The
                program covers GDPR,data privacy regulations, data security,
                risk management, data subject rights, and incident response.
                It's perfect for those looking to advance their careers in data
                privacy or strengthen their organization's compliance efforts.
              </span>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}
