import { cn } from '@utils/index';
import React from 'react';
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import { toast } from 'sonner';

const MAILCHIMP_API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY as string

const SimpleForm = ({ status, message, onSubmitted }: { status?: "sending" | "error" | "success" | null, message: string | Error | null, onSubmitted: (formData: EmailFormFields) => void }) => {
  const [email, setEmail] = React.useState('');
  const regex = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm)
  const [invalidEmail, setInvalidEmail] = React.useState(false)

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (regex.test(email)) {
      onSubmitted({ EMAIL: email })
      if (status === 'success') {
        toast.success("Email subscribed successfully")
      }
    } else {
      setInvalidEmail(true)
      console.log(message)
    }
  }

  return (
    <form onSubmit={submit} className='flex flex-col gap-4 items-center mx-auto max-w-md'>
      <div className='flex flex-col gap-4 w-full md:flex-row'>
        <input
          disabled={status === "sending"}
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn('px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 active:border-amber-500 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200', status === "sending" && "animate-pulse", status === "error" || invalidEmail && "border-red-500")}
        />
        <button
          disabled={status === "sending"}
          className={cn('px-6 py-3 w-full font-medium text-gray-900 bg-amber-400 rounded-lg shadow-md cursor-pointer hover:bg-amber-500 focus:ring-2 focus:ring-offset-2 active:bg-amber-600 active:scale-95 focus:ring-amber-500 lg:w-auto disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200', status === "sending" && "animate-pulse")}
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <p className='text-sm text-center text-gray-600 lg:text-left'>
        We care about your privacy policy.
      </p>
    </form>
  );
};

const Newsletter: React.FC = () => {
  const url = MAILCHIMP_API_KEY;

  return (
    <section id='newsletter' className='py-16 w-full bg-gray-50 md:py-24'>
      <div className='px-5 mx-auto w-full max-w-7xl md:px-8'>
        <div className=''>
          <div className='w-full section-heading'>
            <div className='mx-auto mb-8 w-full max-w-3xl text-center heading-subheading'>
              <h5 className='mx-auto mb-5 text-3xl font-semibold text-gray-900 lg:text-4xl'>
                Join our newsletter
              </h5>
              <p className='text-base text-gray-700 md:text-lg'>
                Subscribe to stay updated on the latest in data protection and
                consulting
              </p>
            </div>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <SimpleForm onSubmitted={formData => subscribe(formData)} status={status} message={message} />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
