import React from 'react';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  queries as DrawerQueries,
  mutations as DrawerMutations,
} from 'gql/Drawer/index';
import { queries as ProjectQueries } from 'gql/Project/index';
import utils from 'utils/index';

const calculateAppBarStyles = ({ isOpen }) => ({
  width: `calc(100% - ${isOpen ? utils.Drawer.styles.width : 0}px)`,
  transitionDuration: `${
    isOpen ? utils.Drawer.styles.transitionDuration : 0
  }ms`,
});

const Header = ({ drawerData, toggleDrawer, projectData }) => {
  const { drawer } = drawerData;
  const { project } = projectData;
  const appBarStyles = calculateAppBarStyles(drawer);
  return (
    <AppBar className="AppBarWrapper" style={appBarStyles}>
      <Toolbar>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="title">
          {project.isOpen ? project.name : 'Welcome in Online RPG Editor !'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  drawerData: PropTypes.object,
  toggleDrawer: PropTypes.func,
  projectData: PropTypes.object,
};

export default compose(
  DrawerQueries.withDrawerQuery,
  DrawerMutations.withToggleDrawerMutation,
  ProjectQueries.withProjectQuery,
)(Header);
