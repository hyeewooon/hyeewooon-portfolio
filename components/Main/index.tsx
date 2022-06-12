import React from 'react';

import { Layout, Profile } from '@components';
import * as SC from './Main.styles';

const Main: React.FC = () => {
  return (
    <Layout>
      <SC.MainContainer>
        <SC.MainContent>
          <Profile />
        </SC.MainContent>
      </SC.MainContainer>
    </Layout>
  );
};

export default Main;
