import React from 'react';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { drawerQueries } from 'gql/queries/index';
import { drawerMutations } from 'gql/mutations/index';

const calculateAppBarStyles = ({ isOpen }) => ({
  width: `calc(100% - ${isOpen ? 160 : 0}px)`,
  transitionDuration: `${isOpen ? 225 : 0}ms`,
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
  drawerQueries.withDrawerQuery,
  drawerMutations.withToggleDrawerMutation,
)(Header);
