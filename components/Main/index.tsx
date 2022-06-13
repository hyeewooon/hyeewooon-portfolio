import React from 'react';

import { Layout, Profile, About } from '@components';
import * as SC from './Main.styles';

const Main: React.FC = () => {
  return (
    <Layout>
      <SC.MainContainer>
        <SC.MainContent>
          <Profile />
          <About />
        </SC.MainContent>
      </SC.MainContainer>
    </Layout>
  );
};

export default Main;
