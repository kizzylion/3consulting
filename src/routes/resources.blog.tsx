import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/resources/blog')({
  component: Blog,
});

function Blog() {
  return <div className='p-4'>Our latest blog posts.</div>;
}
