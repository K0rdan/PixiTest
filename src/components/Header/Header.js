import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import 'components/Header/Header.css';

const calculateAppBarStyles = ({ width, open }) => ({
  width: `calc(100% - ${width}px)`,
  transitionDuration: `${open ? 225 : 0}ms`,
});

export const Header = ({ drawer }) => {
  const { drawerState, toggleDrawer } = drawer;
  const appBarStyles = calculateAppBarStyles(drawerState);

  return (
    <AppBar className="AppBarWrapper" style={appBarStyles}>
      <Toolbar>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="title">TEST</Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  drawer: PropTypes.shape({
    drawerState: PropTypes.shape({
      open: PropTypes.bool.isRequired,
      width: PropTypes.number.isRequired,
    }),
    toggleDrawer: PropTypes.func.isRequired,
  }),
};

export default Header;
