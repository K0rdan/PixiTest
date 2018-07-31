import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const DRAWER_QUERY = gql`
  query Drawer {
    drawer @client {
      isOpen
      __typename
    }
  }
`;
export const withDrawerQuery = graphql(DRAWER_QUERY);

export const DRAWER_ISOPEN = gql`
  query Drawer {
    drawer @client {
      isOpen
      __typename
    }
  }
`;

export const drawerQueries = {
  DRAWER_QUERY,
  withDrawerQuery,
  DRAWER_ISOPEN,
};

export default drawerQueries;
