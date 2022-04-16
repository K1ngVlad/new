const defaultState = {
  score: 0,
  level: 1,
  levelScore: 100,
};

const scoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SCORE':
      return { ...state, score: action.payload };
    case 'BACK_SCORE':
      return { ...state, score: 0 };
    case 'PLUS_SCORE':
      return { ...state, score: state.score + action.payload };
    case 'LEVEL_UP':
      return {
        ...state,
        level: state.level + 1,
        levelScore: state.levelScore + 100,
      };
    case 'LEVEL_BACK':
      return { ...state, level: 1 };
    default:
      return state;
  }
};

export default scoreReducer;
