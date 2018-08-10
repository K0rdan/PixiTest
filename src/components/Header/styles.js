import { get } from 'lodash';

const calculatedWidth = (isOpen, small) => {
  if (isOpen) {
    if (small === true) {
      return 135;
    } else {
      return 150;
    }
  } else {
    return 0;
  }
};

const calculateStyles = props => {
  const { drawerData } = props;
  const isOpen = get(drawerData, 'drawer.isOpen', false);
  console.log(props);
  return {
    root: {
      width: `calc(100% - ${calculatedWidth(isOpen)}px)`,
    },
  };
};

export default calculateStyles;
