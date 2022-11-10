import type { MetaFunction } from '@remix-run/node';
import Achievements from '~/components/achievements/achievements';
import PageLayout from '~/components/layout/pagelayout';

const Archievement = () => {
  return (
    <PageLayout title='Achievements' keywords='My achievements'>
      <Achievements />
    </PageLayout>
  );
};

export const meta: MetaFunction = () => {
  return { title: `Achivements | Rifki` };
};

export default Archievement;
