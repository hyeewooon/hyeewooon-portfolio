import React from 'react';

import { Box } from '@base';
import { Layout, Head } from '@components';
import * as SC from './Main.styles';

const Project: React.FC = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <SC.ProjectContainer>
        <SC.ProjectContent>
          <SC.ProjectTitle>
            Works <SC.UnderLine />
          </SC.ProjectTitle>
          <SC.BoxWrapper>
            <Box
              title="사내 관리 시스템"
              date="2022.03 - 2022.05"
              tag={[
                { name: 'Next.js', color: 'blue' },
                { name: 'Typescript', color: 'blue' },
                { name: 'React Query', color: 'yellow' },
                { name: 'Recoil', color: 'yellow' },
                { name: 'Styled Components', color: 'red' }
              ]}
            >
              <SC.ContentList>
                <SC.ContentItem>기존 JSP 레거시 프로젝트를 리뉴얼하여 빠른 ERP 웹 어플리케이션 구축</SC.ContentItem>
                <SC.ContentItem>React Query를 이용하여 API 데이터 상태 관리와 네트워크 요청수 개선</SC.ContentItem>
                <SC.ContentItem>모달 컴포넌트 호출시마다 id를 부여하여 다중 모달 제어</SC.ContentItem>
                <SC.ContentItem>Template Literal Type를 적용하여 공통된 타입 재사용성 개선</SC.ContentItem>
              </SC.ContentList>
            </Box>
          </SC.BoxWrapper>
          <SC.BoxWrapper>
            <Box
              title="신규 플랫폼 서비스 웹 어플리케이션"
              date="2021.10 - 2022.02"
              tag={[
                { name: 'Next.js', color: 'blue' },
                { name: 'Typescript', color: 'blue' },
                { name: 'Redux Saga', color: 'yellow' },
                { name: 'Emotion', color: 'red' },
                { name: 'I18n', color: 'yellow' }
              ]}
            >
              <SC.ContentList>
                <SC.ContentItem>react-player 라이브러리를 사용하여 VOD 플레이어 컨트롤러 개발</SC.ContentItem>
                <SC.ContentItem>Millicast 플랫폼을 사용한 라이브 스트리밍 플레이어 개발</SC.ContentItem>
                <SC.ContentItem>웹 소켓 통신 제안 및 해당 로직을 커스텀 훅으로 개발하여 재사용성 증대</SC.ContentItem>
              </SC.ContentList>
            </Box>
          </SC.BoxWrapper>
          <SC.BoxWrapper>
            <Box
              title="신규 플랫폼 서비스 - 콘텐츠 관리 도구"
              date="2021.10 - 2022.02"
              tag={[
                { name: 'React', color: 'blue' },
                { name: 'Typescript', color: 'blue' },
                { name: 'Recoil', color: 'yellow' },
                { name: 'Styled Components', color: 'red' },
                { name: 'React Hook Form', color: 'yellow' },
                { name: 'I18n', color: 'yellow' }
              ]}
            >
              <SC.ContentList>
                <SC.ContentItem>유저 로그인 기능 개발</SC.ContentItem>
                <SC.ContentItem>react-table 라이브러리를 활용하여 리스트 뷰 구현</SC.ContentItem>
                <SC.ContentItem>플랫폼 컨텐츠 확보를 위한 업로드 기능 개발</SC.ContentItem>
                <SC.ContentItem>공통 컴포넌트 개발을 통해 컴포넌트 재사용성과 유지보수성 증대</SC.ContentItem>
              </SC.ContentList>
            </Box>
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
            >
              <SC.ContentList>
                <SC.ContentItem>Intersection Observer API를 도입하여 이벤트 호출 주기 개선 및 성능 향상</SC.ContentItem>
                <SC.ContentItem>react-helmet를 이용하여 메타데이터 수정 및 SEO 개선</SC.ContentItem>
                <SC.ContentItem>
                  react-router-hash-link를 통해 해시 링크를 적용하여 페이지 내 컨텐츠 이동이 쉽도록 사용성 개선
                </SC.ContentItem>
                <SC.ContentItem>
                  CSS의 scroll-snap-type 속성을 사용하여 모바일에서 사용자의 자연스러운 터치 조작이 가능하도록 구현
                </SC.ContentItem>
              </SC.ContentList>
            </Box>
          </SC.BoxWrapper>
          <SC.BoxWrapper>
            <Box
              title="공식 웹사이트 리뉴얼 및 유지 보수"
              date="2021.05 - 2021.07"
              tag={[
                { name: 'React', color: 'blue' },
                { name: 'Redux', color: 'yellow' },
                { name: 'Styled Components', color: 'red' },
                { name: 'React Hook Form', color: 'yellow' },
                { name: 'I18n', color: 'yellow' }
              ]}
            >
              <SC.ContentList>
                <SC.ContentItem>외주 개발된 서비스를 유지 보수 및 안정화 작업</SC.ContentItem>
                <SC.ContentItem>릴리즈 직전 컴포넌트 수정 및 반응형 디자인 적용</SC.ContentItem>
                <SC.ContentItem>react-hook-form을 통해 최적화된 유효성 검사 적용하여 UX 개선</SC.ContentItem>
                <SC.ContentItem>각종 디자인 버그 개선</SC.ContentItem>
              </SC.ContentList>
            </Box>
          </SC.BoxWrapper>
          <SC.BoxWrapper>
            <Box title="채용 사이트 리뉴얼" date="2021.02 - 2021.04" tag={[{ name: 'React', color: 'blue' }]}>
              <SC.ContentList>
                <SC.ContentItem>클라이언트 사이드 렌더링을 통한 웹 사이트 반응 속도 개선</SC.ContentItem>
                <SC.ContentItem>유저 페이지과 관리자 페이지를 라우팅 분류하여 유지보수성 개선</SC.ContentItem>
                <SC.ContentItem>사이트 내에 쓰이는 UI를 목적에 따라 컴포넌트 분류 및 유지보수성 개선</SC.ContentItem>
              </SC.ContentList>
            </Box>
          </SC.BoxWrapper>
        </SC.ProjectContent>
        <SC.ProjectContent>
          <SC.ProjectTitle>
            Projects <SC.UnderLine />
          </SC.ProjectTitle>
          <SC.BoxWrapper>
            <Box
              title="개발 포트폴리오"
              date="2022.06"
              tag={[
                { name: 'Next.js', color: 'blue' },
                { name: 'Typescript', color: 'blue' },
                { name: 'Recoil', color: 'yellow' },
                { name: 'Styled Components', color: 'red' }
              ]}
            >
              <SC.ContentList>
                <SC.ContentItem>Next.js의 Head 컴포넌트를 적용하여 메타 태그 설정</SC.ContentItem>
                <SC.ContentItem>확장성을 고려하여 공통 컴포넌트로 개발</SC.ContentItem>
                <SC.ContentItem>Vercel로 프로젝트 배포</SC.ContentItem>
              </SC.ContentList>
            </Box>
          </SC.BoxWrapper>
        </SC.ProjectContent>
      </SC.ProjectContainer>
    </Layout>
  );
};

export default Project;
