import { merge } from 'lodash';
import Drawer from 'gql/Drawer';

export const defaults = merge(Drawer.defaults);
export const resolvers = {
  Mutation: merge(Drawer.resolvers),
};

export const gql = {
  resolvers,
  defaults,
};

export default gql;
