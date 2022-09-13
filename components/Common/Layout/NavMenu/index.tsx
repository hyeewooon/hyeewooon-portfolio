import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import * as SC from './NavMenu.styles';

const menuInfo: { menuName: string; pageURL: string; target?: '_blank' }[] = [
  { menuName: 'About', pageURL: '/about' },
  { menuName: 'Projects', pageURL: '/projects' },
  { menuName: 'Blog', pageURL: 'https://velog.io/@hyeewooon', target: '_blank' }
];

const NavMenu: React.FC = () => {
  const [menuState, setMenuState] = useState({
    open: false
  });
  const router = useRouter();

  const changeMenuState = () => {
    setMenuState({
      ...menuState,
      open: !menuState.open
    });
  };

  const moveToPageURL = (menuName: string, pageURL: string, target?: '_blank') => {
    if (target) {
      window.open(pageURL, '_blank');
      return;
    }

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
            {menuInfo.map(({ menuName, pageURL, target }) => {
              return (
                <SC.NavMenuItem
                  active={router.pathname === pageURL}
                  key={menuName}
                  onClick={() => moveToPageURL(menuName, pageURL, target)}
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
