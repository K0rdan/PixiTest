import React from 'react';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  queries as DrawerQueries,
  mutations as DrawerMutations,
} from 'gql/Drawer/index';
import utils from 'utils/index';

const calculateAppBarStyles = ({ isOpen }) => ({
  width: `calc(100% - ${isOpen ? utils.Drawer.styles.width : 0}px)`,
  transitionDuration: `${
    isOpen ? utils.Drawer.styles.transitionDuration : 0
  }ms`,
});

const Header = ({ data, toggleDrawer }) => {
  const { drawer } = data;
  const appBarStyles = calculateAppBarStyles(drawer);
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
  data: PropTypes.object,
  toggleDrawer: PropTypes.func,
};

export default compose(
  DrawerQueries.withDrawerQuery,
  DrawerMutations.withToggleDrawerMutation,
)(Header);
