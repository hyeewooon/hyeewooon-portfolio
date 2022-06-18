import styled from 'styled-components';
import Image from 'next/image';

import { Theme } from '@base';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${Theme.ThemeResource.mq.mobile} {
    flex-direction: column;
  }
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  min-width: 150px;
  min-height: 150px;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export const ProfileTextBox = styled.div``;
export const ProfileTitle = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: #2b323f;
  line-height: 2;
  text-decoration-line: underline;
  text-decoration-color: #e9e9e9;
  text-underline-position: under;
`;
export const ProfileText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 2;
  color: #2b323f;
`;

export const ProfileStrongText = styled.strong`
  font-weight: 500;
`;
