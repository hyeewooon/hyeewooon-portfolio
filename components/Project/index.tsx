import React from 'react';

import { Box } from '@base';
import { Layout } from '@components';
import * as SC from './Main.styles';

const Project: React.FC = () => {
  return (
    <Layout>
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
              children={
                <SC.ContentList>
                  <SC.ContentItem>기존 JSP 레거시 프로젝트를 리뉴얼하여 빠른 ERP 웹 어플리케이션 구축</SC.ContentItem>
                </SC.ContentList>
              }
            />
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
              children={
                <SC.ContentList>
                  <SC.ContentItem>react-player 라이브러리를 사용하여 VOD 플레이어 컨트롤러 개발</SC.ContentItem>
                  <SC.ContentItem>Millicast 플랫폼을 사용한 라이브 스트리밍 플레이어 개발</SC.ContentItem>
                </SC.ContentList>
              }
            />
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
              children={
                <SC.ContentList>
                  <SC.ContentItem>유저 로그인 기능 개발</SC.ContentItem>
                  <SC.ContentItem>VOD 컨텐츠 리스트 뷰 구현</SC.ContentItem>
                  <SC.ContentItem>플랫폼 컨텐츠 확보를 위한 업로드 기능 개발</SC.ContentItem>
                </SC.ContentList>
              }
            />
          </SC.BoxWrapper>
          <SC.BoxWrapper>
            <Box
              title="신규 서비스 홍보 랜딩 페이지 제작"
              date="2021.08"
              tag={[
                { name: 'Next.js', color: 'blue' },
                { name: 'Typescript', color: 'blue' },
                { name: 'Styled Components', color: 'red' },
                { name: 'I18n', color: 'yellow' }
              ]}
              children={
                <SC.ContentList>
                  <SC.ContentItem>
                    새로운 라이브러리(Next.js) 도입으로 기존 클라이언트 사이드 렌더링의 취약점 보완
                  </SC.ContentItem>
                  <SC.ContentItem>시맨틱 마크업을 고려하여 검색 엔진 최적화</SC.ContentItem>
                </SC.ContentList>
              }
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
              children={
                <SC.ContentList>
                  <SC.ContentItem>기존 프로젝트의 일부 로직을 공통 컴포넌트로 제작하여 재사용성 향상</SC.ContentItem>
                  <SC.ContentItem>
                    Intersection Observer API를 도입하여 이벤트 호출 주기 개선 및 성능 향상
                  </SC.ContentItem>
                  <SC.ContentItem>검색 최적화를 위한 최소한의 SEO 대책 마련</SC.ContentItem>
                </SC.ContentList>
              }
            />
          </SC.BoxWrapper>
          <SC.BoxWrapper>
            <Box
              title="공식 웹사이트 리뉴얼 및 유지 보수"
              date="2021.05 - 2021.07"
              tag={[
                { name: 'React', color: 'blue' },
                { name: 'Redux', color: 'yellow' },
                { name: 'Styled Components', color: 'red' },
                { name: 'I18n', color: 'yellow' }
              ]}
              children={
                <SC.ContentList>
                  <SC.ContentItem>외주 개발된 서비스를 유지 보수 및 안정화 작업</SC.ContentItem>
                  <SC.ContentItem>릴리즈 직전 컴포넌트 수정 및 반응형 디자인 적용</SC.ContentItem>
                  <SC.ContentItem>폼 유효성 검사를 추가하여 UX 개선</SC.ContentItem>
                  <SC.ContentItem>각종 디자인 버그 개선</SC.ContentItem>
                </SC.ContentList>
              }
            />
          </SC.BoxWrapper>
          <SC.BoxWrapper>
            <Box
              title="채용 사이트 리뉴얼"
              date="2021.02 - 2021.04"
              tag={[{ name: 'React', color: 'blue' }]}
              children={
                <SC.ContentList>
                  <SC.ContentItem>클라이언트 사이드 렌더링을 통한 웹 사이트 반응 속도 개선</SC.ContentItem>
                  <SC.ContentItem>유저 페이지과 관리자 페이지를 라우팅 분류하여 유지보수성 개선</SC.ContentItem>
                  <SC.ContentItem>컴포넌트 목적에 따른 분류로 유지보수성 개선</SC.ContentItem>
                </SC.ContentList>
              }
            />
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
            />
          </SC.BoxWrapper>
        </SC.ProjectContent>
      </SC.ProjectContainer>
    </Layout>
  );
};

export default Project;
