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

import 'components/Drawer/Drawer.css';

const Drawer = ({ data }) => {
  const { drawer } = data;
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
      <ListItem button dense>
        <ListItemIcon>
          <Save />
        </ListItemIcon>
        <ListItemText primary="Save" />
      </ListItem>
    </MaterialDrawer>
  );
};

Drawer.propTypes = {
  data: PropTypes.object,
};

export default compose(DrawerQueries.withDrawerQuery)(Drawer);
