import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const openProjectMutation = gql`
  mutation OpenProject {
    openProject @client {
      isOpen
      name
    }
  }
`;
export const withOpenProjectMutation = graphql(openProjectMutation, {
  props: ({ mutate }) => ({ openProject: mutate }),
});

export const mutations = {
  withOpenProjectMutation,
};

export default mutations;
