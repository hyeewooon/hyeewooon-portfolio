import React from 'react';

import { Box } from '@base';

import * as SC from './About.styles';

const About: React.FC = () => {
  return (
    <SC.AboutContainer>
      <SC.AboutContent>
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
              { name: 'Typescript', color: 'gray' },
              { name: 'Javascript', color: 'gray' },
              { name: 'React', color: 'gray' },
              { name: 'Next.js', color: 'gray' }
            ]}
          />
        </SC.BoxWrapper>
      </SC.AboutContent>
      <SC.AboutContent>
        <SC.AboutTitle>
          Education <SC.UnderLine />
        </SC.AboutTitle>
        <SC.BoxWrapper>
          <Box
            title="아주대학교"
            subTitle="디지털미디어전공"
            imageUrl="/images/logo-ajou.png"
            date="2017.02 - 2021.02"
            tag={[
              { name: 'Programming', color: 'gray' },
              { name: 'Computer Science', color: 'gray' },
              { name: 'UX/UI Design', color: 'gray' }
            ]}
          />
        </SC.BoxWrapper>
      </SC.AboutContent>
      <SC.AboutContent>
        <SC.AboutTitle>
          Experience <SC.UnderLine />
        </SC.AboutTitle>
        <SC.BoxWrapper>
          <Box
            title="CJ올리브네트웍스 CJ UNIT 1기 수료"
            content="SW 교육 강사부문 수료. 중학생 대상 아두이노, 모바일 앱 개발 강의 진행 및 SW 교안 개발에 참여."
            date="2019"
          />
        </SC.BoxWrapper>
        <SC.BoxWrapper>
          <Box
            title="아주대학교 방문SW교육 참여연구원"
            content="SW 교재 연구 개발에 참여 및 방과후 강의 진행. 아두이노 센서보드를 이용하여 게임 제작 프로젝트를 진행하였고, 기획과 제작 과정에서 강사로 참여하여 일정 관리와 개발 지도 및 학생들의 프로젝트 출품과 전시, 발표를 도움."
            date="2018 - 2019"
          />
        </SC.BoxWrapper>
      </SC.AboutContent>
    </SC.AboutContainer>
  );
};

export default About;
