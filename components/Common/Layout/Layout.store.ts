import { atom } from 'recoil';

import { NavStatus } from './model';

export const navMenuStore = atom<NavStatus>({
  key: 'navMenu',
  default: {
    open: false,
    currentMenu: 'DASHBOARD',
    currentMenuPath: ['DashBoard']
  }
});
