import React, { useState } from 'react';
import Image from 'next/image';

import * as SC from './NavMenu.styles';

const NavMenu: React.FC = () => {
  const [menuState, setMenuState] = useState({
    open: false
  });

  const changeMenuState = () => {
    setMenuState({
      ...menuState,
      open: !menuState.open
    });
  };

  return (
    <SC.NavMenuContainer menuOpen={menuState.open}>
      <SC.NavMenuFlexBox>
        <SC.NavMenuButton onClick={changeMenuState}>
          <Image src="/images/icon-menu.svg" layout="fill" />
        </SC.NavMenuButton>
        <SC.NavMenuList menuOpen={menuState.open}>
          <SC.NavMenuItem>About</SC.NavMenuItem>
          <SC.NavMenuItem>Project</SC.NavMenuItem>
        </SC.NavMenuList>
      </SC.NavMenuFlexBox>
    </SC.NavMenuContainer>
  );
};

export default NavMenu;
