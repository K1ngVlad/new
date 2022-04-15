const defaultState = {
  speed: 60,
};

const speedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SPEED_UP':
      return { speed: state.speed - 2 };
    case 'CHANGE_SPEED':
      return { speed: action.payload };
    case 'BACK_SPEED':
      return { speed: 60 };
    case 'BOOST':
      return { speed: 2 };
    default:
      return state;
  }
};

export default speedReducer;
