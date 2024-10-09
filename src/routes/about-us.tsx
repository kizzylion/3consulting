import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about-us')({
  component: AboutUs,
});

function AboutUs() {
  return (
    <div className='p-4 pt-24 md:pt-32'>Learn more about our company.</div>
  );
}
