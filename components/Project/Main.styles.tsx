import styled from 'styled-components';

import { Theme } from '@base';

export const ProjectContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProjectContent = styled.div`
  width: 80%;
  max-width: 900px;

  ${Theme.ThemeResource.mq.mobile} {
    width: 90%;
  }
`;
