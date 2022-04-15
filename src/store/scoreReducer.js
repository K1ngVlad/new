const defaultState = {
  score: 0,
};

const scoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SCORE':
      return { ...state, score: action.payload };
    case 'BACK_SCORE':
      return { ...state, score: 0 };
    default:
      return state;
  }
};

export default scoreReducer;
