import React from 'react';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
import {
  Drawer as MaterialDrawer,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { FolderOpen, Save } from '@material-ui/icons';
import { queries as DrawerQueries } from 'gql/Drawer/index';
import {
  queries as ProjectQueries,
  mutations as ProjectMutations,
} from 'gql/Project/index';

import 'components/Drawer/Drawer.css';

const Drawer = ({ drawerData, projectData, openProject }) => {
  const { drawer } = drawerData;
  const { project } = projectData;
  return (
    <MaterialDrawer variant={'persistent'} open={drawer.isOpen}>
      <Typography className="SectionTitle" variant="title">
        Project
      </Typography>
      <ListItem button dense>
        <ListItemIcon>
          <FolderOpen />
        </ListItemIcon>
        <ListItemText primary="Open" />
      </ListItem>
      <ListItem button dense disabled={!project.isOpen}>
        <ListItemIcon>
          <Save />
        </ListItemIcon>
        <ListItemText primary="Save" />
      </ListItem>
    </MaterialDrawer>
  );
};
Drawer.propTypes = {
  drawerData: PropTypes.object,
  projectData: PropTypes.object,
};

export default compose(
  DrawerQueries.withDrawerQuery,
  ProjectQueries.withProjectQuery,
  ProjectMutations.withOpenProjectMutation,
)(Drawer);
