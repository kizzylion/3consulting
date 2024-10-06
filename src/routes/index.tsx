import { createFileRoute } from '@tanstack/react-router';
import Hero from '@route/components/pages/home/Hero';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
      <Hero />
    </div>
  );
}
