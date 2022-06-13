import styled from 'styled-components';

import { Theme } from '@base';

export const NavMenuContainer = styled.div<{ menuOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  z-index: 1000;

  ${Theme.ThemeResource.mq.mobile} {
    ${({ menuOpen }) => {
      if (menuOpen) {
        return `
          box-shadow: none;
        `;
      }
    }}
  }
`;

export const NavMenuFlexBox = styled.div`
  width: 80%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Theme.ThemeResource.mq.mobile} {
    width: 90%;
  }
`;

export const DefalutButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`;

export const NavMenuButton = styled(DefalutButton)`
  display: none;
  position: relative;
  min-width: 30px;
  min-height: 30px;
  border-radius: 5px;

  ${Theme.ThemeResource.mq.mobile} {
    display: block;
  }

  &:hover {
    background-color: #efefef;
    transition-duration: 0.5s;
    cursor: pointer;
  }
`;

export const NavMenuList = styled.ul<{ menuOpen: boolean }>`
  position: relative;
  display: flex;
  gap: 50px;

  ${Theme.ThemeResource.mq.mobile} {
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 0px;
    background-color: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    ${({ menuOpen }) => {
      if (!menuOpen) {
        return `
          display: none;
        `;
      }
    }}
  }
`;

export const NavMenuItem = styled.li`
  position: relative;
  font-size: 20px;
  color: #2b323f;

  ${Theme.ThemeResource.mq.mobile} {
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
  }

  &:hover {
    color: #bdc8de;
    cursor: pointer;
    transition-duration: 0.5s;
  }
`;

export const IconLink = styled.a`
  position: relative;
  width: 35px;
  height: 35px;

  ${Theme.ThemeResource.mq.mobile} {
    width: 30px;
    height: 30px;
  }
`;
