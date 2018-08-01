import React from 'react';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
import {
  Drawer as MaterialDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { MoveToInbox } from '@material-ui/icons';
import { queries as DrawerQueries } from 'gql/Drawer/index';

const Drawer = ({ data }) => {
  const { drawer } = data;
  return (
    <MaterialDrawer variant={'persistent'} open={drawer.isOpen}>
      <div>TEST</div>
      <ListItem button>
        <ListItemIcon>
          <MoveToInbox />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </MaterialDrawer>
  );
};

Drawer.propTypes = {
  data: PropTypes.object,
};

export default compose(DrawerQueries.withDrawerQuery)(Drawer);
