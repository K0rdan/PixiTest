import React from 'react';
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { FolderOpen } from '@material-ui/icons';

export const MyDrawer = ({ open }) => (
  <Drawer variant={'persistent'} open={open}>
    <ListItem>Project</ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderOpen />
      </ListItemIcon>
      <ListItemText primary="Open" />
    </ListItem>
    <Divider />
  </Drawer>
);

export default MyDrawer;
