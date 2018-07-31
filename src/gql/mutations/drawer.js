import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const toggleDrawerMutation = gql`
  mutation ToggleDrawer {
    toggleDrawer @client {
      isOpen
      width
    }
  }
`;
export const withToggleDrawerMutation = graphql(toggleDrawerMutation, {
  props: ({ mutate }) => ({ toggleDrawer: mutate }),
});

export const drawerMutations = {
  toggleDrawerMutation,
  withToggleDrawerMutation,
};

export default drawerMutations;
