import React from 'react';

import { Layout, Profile, About, Head } from '@components';

const Main: React.FC = () => {
  return (
    <Layout>
      <Head title="About" />
      <Profile />
      <About />
    </Layout>
  );
};

export default Main;
