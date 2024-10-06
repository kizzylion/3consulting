import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/solutions')({
  component: Solutions,
});

function Solutions() {
  return (
    <div className='p-4'>
      <h2>Our Solutions</h2>
      <ul>
        <li>
          <Link to='/solutions/data-protection'>Data Protection</Link>
        </li>
        <li>
          <Link to='/solutions/project-management'>Project Management</Link>
        </li>
        <li>
          <Link to='/solutions/technology-services'>Technology Services</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
