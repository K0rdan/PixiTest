import gql from 'graphql-tag';

const DRAWER_ISOPEN = gql`
  query Drawer {
    drawer @client {
      isOpen
      __typename
    }
  }
`;

export const DrawerResolvers = {
  toggleDrawer: (_, variables, { cache }) => {
    const { drawer } = cache.readQuery({ query: DRAWER_ISOPEN });
    console.log('RESOLVERS, DRAWER, TOGGLEDRAWER, drawer', drawer.isOpen);

    if (drawer) {
      const { isOpen } = drawer;
      cache.writeData({
        data: {
          drawer: {
            ...drawer,
            isOpen: !isOpen,
            __typename: 'Drawer',
          },
        },
      });
    }

    return null;
  },
};

export default DrawerResolvers;
