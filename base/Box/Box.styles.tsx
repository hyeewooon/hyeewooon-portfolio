import styled from 'styled-components';

import { Theme } from '@base';

export const BoxContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  margin-right: 20px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  ${Theme.ThemeResource.mq.mobile} {
    font-size: 10px;
    display: block;
  }
`;
export const BoxTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
export const BoxSubTitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 1.2;
`;

export const BoxContent = styled.p`
  font-size: 14px;
  line-height: 1.2;
`;

export const Date = styled.p`
  font-size: 15px;
  color: #888888;
`;
export const TagList = styled.ul`
  display: flex;
  padding-top: 10px;
  flex-flow: wrap;
  gap: 10px;

  ${Theme.ThemeResource.mq.mobile} {
    gap: 5px;
  }
`;
export const TagItem = styled.li`
  color: #404040;
  background-color: #ecf1f5;
  padding: 3px;
  font-size: 13px;
  border-radius: 5px;

  ${Theme.ThemeResource.mq.mobile} {
    font-size: 10px;
  }
`;
