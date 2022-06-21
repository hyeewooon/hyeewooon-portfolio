import React from 'react';

import * as SC from './Layout.styles';
import NavMenu from './NavMenu';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <SC.LayoutContainer>
      <NavMenu />
      <SC.LayoutContentBox>
        <SC.LayoutContentInner>{children}</SC.LayoutContentInner>
      </SC.LayoutContentBox>
      <SC.footer>&copy; 2022 HYEWON PORTFOLIO</SC.footer>
    </SC.LayoutContainer>
  );
};

export default Layout;
