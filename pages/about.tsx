import type { NextPage } from 'next';
import { Suspense } from 'react';

import Layout from '@/components/layout';
import CommingSoon from '@/components/molecules/ComingSoon';

const About: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Layout title='About me - Rizkian Akbar'>
        <CommingSoon name='About' />
      </Layout>
    </Suspense>
  );
};

export default About;