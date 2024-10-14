import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/solutions')({
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <Outlet />
    </>
  );
}
