const defaultState = {
  context: null,
};

const contextReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CONTEXT':
      console.log(action.payload);
      return { ...state, context: action.payload };
    default:
      return state;
  }
};

export default contextReducer;
