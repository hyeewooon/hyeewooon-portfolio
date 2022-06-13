import styled from 'styled-components';

export const BoxContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
`;

export const ContentWrapper = styled.div`
  margin-left: 10px;
  width: 100%;
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const BoxTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
export const BoxSubTitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const BoxContent = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Date = styled.p`
  font-size: 15px;
  color: #888888;
`;
export const TagList = styled.ul`
  display: flex;
  gap: 10px;
`;
export const TagItem = styled.li`
  color: #404040;
  background-color: #ecf1f5;
  padding: 3px;
  font-size: 13px;
  border-radius: 5px;
`;
