import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/resources')({
  component: Resources,
});

function Resources() {
  return (
    <div className='p-4'>
      <h2>Resources</h2>
      <ul>
        <li>
          <Link to='/resources/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/resources/cdpo-training'>CDPO Training</Link>
        </li>
        <li>
          <Link to='/resources/educational-technology-training'>
            Educational Technology Training
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
