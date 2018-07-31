import { merge } from 'lodash';
import DrawerResolvers from 'gql/resolvers/drawer';

export const resolvers = {
  Mutation: merge(DrawerResolvers),
};

export default resolvers;
