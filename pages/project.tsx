import type { NextPage } from 'next';
import { Suspense } from 'react';

import Layout from '@/components/layout';
import ComingSoon from '@/components/molecules/ComingSoon';

const Project: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Layout title='Project - Rizkian Akbar'>
        <ComingSoon name='Project' />
      </Layout>
    </Suspense>
  );
};

export default Project;
