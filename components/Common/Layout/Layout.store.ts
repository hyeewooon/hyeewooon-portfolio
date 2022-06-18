import { atom } from 'recoil';

import { NavStatus } from './model';

export const navMenuStore = atom<NavStatus>({
  key: 'navMenu',
  default: {
    currentMenu: 'About',
    currentMenuPath: '/about'
  }
});
