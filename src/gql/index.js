import { merge } from 'lodash';
import Drawer from 'gql/Drawer';
import Project from 'gql/Project';

export const defaults = merge(Drawer.defaults, Project.defaults);
export const resolvers = {
  Mutation: merge(Drawer.resolvers, Project.resolvers),
};

export const gql = {
  resolvers,
  defaults,
};

export default gql;
