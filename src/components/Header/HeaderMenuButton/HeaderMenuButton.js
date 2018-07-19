import React from 'react';
import { object } from 'prop-types';
import Button from 'components/Button';

import 'components/Header/HeaderMenuButton/HeaderMenuButton.css';

export const HeaderMenuButton = props => {
  return <Button styles={props.styles} {...props} />;
};

Button.defaultProps = {
  styles: {},
};

Button.propTypes = {
  styles: object,
};

export default HeaderMenuButton;
