import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import * as SC from './NavMenu.styles';

const menuInfo: { menuName: string; pageURL: string; target?: '_blank' }[] = [
  { menuName: 'About', pageURL: '/about' },
  { menuName: 'Projects', pageURL: '/projects' },
  { menuName: 'Blog', pageURL: 'https://hyeewooon.tistory.com', target: '_blank' }
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

  return (
    <SC.NavMenuContainer menuOpen={menuState.open}>
      <SC.NavMenuFlexBox>
        <div>
          <SC.NavMenuButton onClick={changeMenuState}>
            <Image src="/images/icon-menu.svg" fill alt="menu" />
          </SC.NavMenuButton>
          <SC.NavMenuList menuOpen={menuState.open}>
            {menuInfo.map(({ menuName, pageURL, target }) => {
              return (
                <SC.NavMenuLink
                  key={menuName}
                  href={pageURL}
                  target={target ?? '_self'}
                  active={router.pathname === pageURL ? 'true' : 'false'}
                  replace
                >
                  {menuName}
                </SC.NavMenuLink>
              );
            })}
          </SC.NavMenuList>
        </div>
        <SC.IconLink href="https://github.com/hyeewooon" target="_blank">
          <Image src="/images/icon-github.svg" fill alt="github" />
        </SC.IconLink>
      </SC.NavMenuFlexBox>
    </SC.NavMenuContainer>
  );
};

export default NavMenu;
