import React from 'react';

import { Layout } from '@components';
import * as SC from './Main.styles';

const Project: React.FC = () => {
  return (
    <Layout>
      <SC.ProjectContainer>
        <SC.ProjectContent></SC.ProjectContent>
      </SC.ProjectContainer>
    </Layout>
  );
};

export default Project;
