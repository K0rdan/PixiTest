import React from 'react';
import HeaderMenuButton from 'components/Header/HeaderMenuButton';

import 'components/Header/HeaderMenuList/HeaderMenuList.css';

export const HeaderMenuList = () => (
  <ul>
    <li>
      <HeaderMenuButton value="TEST" styles={{ height: '100%' }} />
    </li>
    <li>
      <HeaderMenuButton value="TEST2" />
    </li>
  </ul>
);

export default HeaderMenuList;
