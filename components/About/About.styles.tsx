import styled from 'styled-components';

import { Theme } from '@base';

export const AboutContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
  gap: 70px;
  display: flex;
  flex-direction: column;

  ${Theme.ThemeResource.mq.mobile} {
    margin-top: 70px;
    gap: 50px;
  }
`;

export const AboutContent = styled.div``;

export const AboutTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #2b323f;
  line-height: 1.5;
  position: relative;
  width: fit-content;
`;

export const UnderLine = styled.span`
  display: block;
  position: absolute;
  background-color: #e9e9e9;
  width: 100%;
  height: 1px;
`;

export const BoxWrapper = styled.div`
  margin-top: 20px;

  ${Theme.ThemeResource.mq.mobile} {
    margin-top: 20px;
  }
`;
