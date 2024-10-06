import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/resources/educational-technology-training'
)({
  component: EducationalTechnologyTraining,
});

function EducationalTechnologyTraining() {
  return (
    <div className='p-4'>
      Information about our Educational Technology Training.
    </div>
  );
}
