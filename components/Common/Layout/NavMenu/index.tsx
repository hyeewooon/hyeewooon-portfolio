import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { useRouter } from 'next/router';

import * as SC from './NavMenu.styles';
import { navMenuStore } from '@components/Common/Layout/Layout.store';
import { NavMenu } from '@components/Common/Layout/model';

const menuInfo: { menuName: NavMenu; pageURL: string }[] = [
  { menuName: 'About', pageURL: '/about' },
  { menuName: 'Projects', pageURL: '/projects' }
];

const NavMenu: React.FC = () => {
  const [menuState, setMenuState] = useState({
    open: false
  });
  const [navStatus, setNavStatus] = useRecoilState(navMenuStore);
  const router = useRouter();

  const changeMenuState = () => {
    setMenuState({
      ...menuState,
      open: !menuState.open
    });
  };

  const moveToPageURL = (menuName: NavMenu, pageURL: string) => {
    setNavStatus({
      ...navStatus,
      currentMenu: menuName,
      currentMenuPath: pageURL
    });

    router.push(pageURL);
  };

  return (
    <SC.NavMenuContainer menuOpen={menuState.open}>
      <SC.NavMenuFlexBox>
        <div>
          <SC.NavMenuButton onClick={changeMenuState}>
            <Image src="/images/icon-menu.svg" layout="fill" alt="menu" />
          </SC.NavMenuButton>
          <SC.NavMenuList menuOpen={menuState.open}>
            {menuInfo.map(({ menuName, pageURL }) => {
              return (
                <SC.NavMenuItem
                  active={router.pathname === pageURL}
                  key={menuName}
                  onClick={() => moveToPageURL(menuName, pageURL)}
                >
                  {menuName}
                </SC.NavMenuItem>
              );
            })}
          </SC.NavMenuList>
        </div>
        <SC.IconLink href="https://github.com/hyeewooon" target="_blank">
          <Image src="/images/icon-github.svg" layout="fill" alt="github" />
        </SC.IconLink>
      </SC.NavMenuFlexBox>
    </SC.NavMenuContainer>
  );
};

export default NavMenu;
