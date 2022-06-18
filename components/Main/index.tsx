import React from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import { Layout, Profile, About } from '@components';
import { navMenuStore } from '@components/Common/Layout/Layout.store';
import * as SC from './Main.styles';

const Main: React.FC = () => {
  const navStatus = useRecoilValue(navMenuStore);

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
