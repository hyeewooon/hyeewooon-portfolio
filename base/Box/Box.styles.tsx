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
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 15px;
  color: #888888;

  ${Theme.ThemeResource.mq.mobile} {
    margin-top: 10px;
  }
`;

export const BoxSubTitle = styled.p`
  font-size: 16px;
`;

export const BoxContent = styled.p`
  font-size: 14px;
  line-height: 1.2;
  margin-top: 10px;
`;
export const TagList = styled.ul`
  display: flex;
  margin-top: 10px;
  flex-flow: wrap;
  gap: 10px;

  ${Theme.ThemeResource.mq.mobile} {
    gap: 5px;
  }
`;
export const TagItem = styled.li<{ tagColor: string }>`
  ${({ tagColor }) => {
    if (tagColor === 'red') {
      return `
        color: #df6d6d;
        background-color: #fde9e9;
      `;
    } else if (tagColor === 'yellow') {
      return `
        color: #c2963e;
        background-color: #fff8ce;
      `;
    } else if (tagColor === 'blue') {
      return `
        color: #5881bf;
        background-color: #dbeef5;
      `;
    } else if (tagColor === 'gray') {
      return `
        color: #404040;
        background-color: #ecf1f5;
      `;
    }
  }}
  padding: 3px;
  font-size: 13px;
  border-radius: 5px;

  ${Theme.ThemeResource.mq.mobile} {
    font-size: 10px;
  }
`;
