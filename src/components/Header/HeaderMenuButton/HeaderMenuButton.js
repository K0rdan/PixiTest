import React from 'react';
import { object } from 'prop-types';

import Button from 'components/Button';

export const HeaderMenuButton = props => (
  <Button styles={props.styles} {...props} />
);

Button.defaultProps = {
  styles: {},
};

Button.propTypes = {
  styles: object,
};

export default HeaderMenuButton;
