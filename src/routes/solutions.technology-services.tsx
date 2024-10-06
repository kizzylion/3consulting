import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/solutions/technology-services')({
  component: TechnologyServices,
});

function TechnologyServices() {
  return <div className='p-4'>Our Technology Services solutions.</div>;
}
