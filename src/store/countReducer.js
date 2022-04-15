const defaultState = {
  count: null,
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PLUS_COUNT':
      console.log(state.count + 1);
      return { count: state.count + 1 };
    case 'BACK_COUNT':
      console.log(0);
      return { count: 0 };
    case 'CHANGE_COUNT':
      console.log(action.payload);
      return { count: action.payload };
    default:
      return state;
  }
};

export default countReducer;
