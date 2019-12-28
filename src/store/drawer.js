const drawerAction = element => ({
  type: 'DRAWER',
  element
});

const drawer = (state = null, action) => {
  switch (action.type) {
    case 'DRAWER':
      return action.element;
    default:
      return null;
  }
};

export { drawerAction };
export default drawer;
