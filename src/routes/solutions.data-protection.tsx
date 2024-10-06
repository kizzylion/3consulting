import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/solutions/data-protection')({
  component: DataProtection,
});

function DataProtection() {
  return <div className='p-4'>Our Data Protection solutions.</div>;
}
