import styled from 'styled-components';

import { Theme } from '@base';

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f7f8fa;
`;

export const LayoutContentBox = styled.div`
  padding-top: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LayoutContentInner = styled.div`
  width: 80%;
  max-width: 900px;

  ${Theme.ThemeResource.mq.mobile} {
    width: 90%;
  }
`;

export const footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 14px;
  color: #d4dae7;
  font-weight: 400;
  padding-bottom: 30px;
`;
