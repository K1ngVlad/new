const defaultState = {
  gameOver: false,
};

const gameModeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_OVER':
      return { state, gameOver: true };
    case 'START_GAME':
      return { state, gameOver: false };
    default:
      return state;
  }
};

export default gameModeReducer;
