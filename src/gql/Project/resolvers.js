import { PROJECT_QUERY } from 'gql/Project/queries';

export const resolvers = {
  openProject: (_, variables, { cache }) => {
    const { project } = cache.readQuery({ query: PROJECT_QUERY });

    if (project) {
      cache.writeData({
        data: {
          project: {
            ...project,
            isOpen: true,
            __typename: 'Project',
          },
        },
      });
    }

    return null;
  },
};

export default resolvers;
