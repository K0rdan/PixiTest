import React from 'react';
import {
  Drawer as MUIDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { MoveToInbox } from '@material-ui/icons';

export const Drawer = () => (
  <MUIDrawer variant={'persistent'} open={false}>
    <div>TEST</div>
    <ListItem button>
      <ListItemIcon>
        <MoveToInbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
  </MUIDrawer>
);

export default Drawer;
