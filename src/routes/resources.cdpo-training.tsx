import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/resources/cdpo-training')({
  component: CDPOTraining,
});

function CDPOTraining() {
  return <div className='p-4'>Information about our CDPO Training.</div>;
}
