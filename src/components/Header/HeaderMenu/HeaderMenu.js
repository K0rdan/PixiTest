import React from 'react';
import HeaderMenuList from 'components/Header/HeaderMenuList';

import 'components/Header/HeaderMenu/HeaderMenu.css';

export const HeaderMenu = () => (
  <menu>
    <HeaderMenuList className="HeaderMenuItem" />
  </menu>
);

export default HeaderMenu;
