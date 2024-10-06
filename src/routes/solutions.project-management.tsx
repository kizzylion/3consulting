import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/solutions/project-management')({
  component: ProjectManagement,
});

function ProjectManagement() {
  return <div className='p-4'>Our Project Management solutions.</div>;
}
