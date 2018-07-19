import React from 'react';
import HeaderMenuButton from 'components/Header/HeaderMenuButton';

import 'components/Header/HeaderMenuList/HeaderMenuList.css';

const commonButtonStyles = {
  height: '100%',
};

export const HeaderMenuList = () => (
  <li style={{ 'list-style': 'none' }}>
    <ul className="MenuList">
      <li className="MenuListItem">
        <HeaderMenuButton value="File" styles={commonButtonStyles} />
      </li>
      <li className="MenuListItem">
        <HeaderMenuButton value="TEST2" styles={commonButtonStyles} />
      </li>
    </ul>
  </li>
);

export default HeaderMenuList;
