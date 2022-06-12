import React from 'react';

import * as SC from './Layout.styles';
import NavMenu from './NavMenu';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <SC.LayoutContainer>
      <NavMenu />
      <SC.ContentWrapper>{children}</SC.ContentWrapper>
    </SC.LayoutContainer>
  );
};

export default Layout;
