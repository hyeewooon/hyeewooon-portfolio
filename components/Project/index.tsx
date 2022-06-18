import React from 'react';

import { Box } from '@base';
import { Layout } from '@components';
import * as SC from './Main.styles';

const Project: React.FC = () => {
  return (
    <Layout>
      <SC.ProjectContainer>
        <SC.ProjectContent>
          <SC.ProjectWorkWrapper>
            <SC.ProjectWorkContent>
              <SC.ProjectTitle>
                Works <SC.UnderLine />
              </SC.ProjectTitle>
              <SC.BoxWrapper>
                <Box
                  title="사내 관리 시스템"
                  date="2021.03 - 2022.05"
                  tag={[
                    { name: 'Next.js', color: 'blue' },
                    { name: 'TypeScript', color: 'blue' },
                    { name: 'React Query', color: 'yellow' },
                    { name: 'Recoil', color: 'yellow' },
                    { name: 'Styled Components', color: 'red' }
                  ]}
                />
              </SC.BoxWrapper>
              <SC.BoxWrapper>
                <Box
                  title="신규 플랫폼 서비스 웹 어플리케이션"
                  date="2021.10 - 2022.02"
                  tag={[
                    { name: 'Next.js', color: 'blue' },
                    { name: 'TypeScript', color: 'blue' },
                    { name: 'Redux-Saga', color: 'yellow' },
                    { name: 'Emotion', color: 'red' },
                    { name: 'I18n', color: 'yellow' }
                  ]}
                />
              </SC.BoxWrapper>
              <SC.BoxWrapper>
                <Box
                  title="신규 플랫폼 서비스 - 콘텐츠 관리 도구"
                  date="2021.10 - 2022.02"
                  tag={[
                    { name: 'React', color: 'blue' },
                    { name: 'TypeScript', color: 'blue' },
                    { name: 'Recoil', color: 'yellow' },
                    { name: 'Styled Components', color: 'red' },
                    { name: 'I18n', color: 'yellow' }
                  ]}
                />
              </SC.BoxWrapper>
              <SC.BoxWrapper>
                <Box
                  title="신규 서비스 홍보 랜딩 페이지 제작"
                  date="2021.08"
                  tag={[
                    { name: 'React', color: 'blue' },
                    { name: 'Styled Components', color: 'red' },
                    { name: 'I18n', color: 'yellow' }
                  ]}
                />
              </SC.BoxWrapper>
              <SC.BoxWrapper>
                <Box
                  title="서비스 소개 랜딩 페이지 제작"
                  date="2021.07"
                  tag={[
                    { name: 'React', color: 'blue' },
                    { name: 'Styled Components', color: 'red' },
                    { name: 'I18n', color: 'yellow' }
                  ]}
                />
              </SC.BoxWrapper>
              <SC.BoxWrapper>
                <Box
                  title="공식 웹사이트 리뉴얼 및 유지 보수"
                  date="2021.05 - 2022.07"
                  tag={[
                    { name: 'React', color: 'blue' },
                    { name: 'Redux', color: 'yellow' },
                    { name: 'Styled Components', color: 'red' },
                    { name: 'I18n', color: 'yellow' }
                  ]}
                />
              </SC.BoxWrapper>
              <SC.BoxWrapper>
                <Box title="채용 사이트 리뉴얼" date="2021.02 - 2022.04" tag={[{ name: 'React', color: 'blue' }]} />
              </SC.BoxWrapper>
            </SC.ProjectWorkContent>
            <SC.ProjectWorkContent>
              <SC.ProjectTitle>
                Projects <SC.UnderLine />
              </SC.ProjectTitle>
              <SC.BoxWrapper>
                <Box
                  title="개발 포트폴리오"
                  date="2021.06"
                  tag={[
                    { name: 'Next.js', color: 'blue' },
                    { name: 'Typescript', color: 'blue' },
                    { name: 'Recoil', color: 'yellow' },
                    { name: 'Styled Components', color: 'red' }
                  ]}
                />
              </SC.BoxWrapper>
            </SC.ProjectWorkContent>
          </SC.ProjectWorkWrapper>
        </SC.ProjectContent>
      </SC.ProjectContainer>
    </Layout>
  );
};

export default Project;
