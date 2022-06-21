import React from 'react';

import { Layout, Profile, About } from '@components';

const Main: React.FC = () => {
  return (
    <Layout>
      <Profile />
      <About />
    </Layout>
  );
};

export default Main;
