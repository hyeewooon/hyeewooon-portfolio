import React from 'react';

import { Box } from '@base';

import * as SC from './About.styles';

const About: React.FC = () => {
  return (
    <SC.AboutContainer>
      <SC.AboutTitle>
        Career <SC.UnderLine />
      </SC.AboutTitle>
      <SC.BoxWrapper>
        <Box
          title="1MILLION"
          subTitle="Frontend Developer"
          imageUrl="/images/logo-company.jpg"
          date="2021.02 - 2022.05"
          content="웹사이트, VOD 서비스 개발"
          tag={[
            { name: 'typescript', color: 'gray' },
            { name: 'javascript', color: 'gray' },
            { name: 'react', color: 'gray' },
            { name: 'next.js', color: 'gray' }
          ]}
        />
      </SC.BoxWrapper>
    </SC.AboutContainer>
  );
};

export default About;
