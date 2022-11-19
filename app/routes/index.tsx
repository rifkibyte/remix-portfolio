import Home from '~/components/home/home';
import PageLayout from '~/components/layout/pagelayout';
import { projects } from '~/data/projects';

export const loader = () => {
  return projects;
};

export default function Index() {
  return (
    <PageLayout title='Rifki'>
      <Home projects={projects} />
    </PageLayout>
  );
}
