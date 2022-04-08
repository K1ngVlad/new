const defaultState = {
  context: null,
  grid: 40,
  count: null,
  speed: 30,
  choisenTetromino: {
    name: '',
    matrix: [],
    row: 0,
    col: 0,
    color: '',
  },
  tetrominos: {
    I: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    J: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    L: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    O: [
      [1, 1],
      [1, 1],
    ],
    S: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    Z: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    T: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  },
  colors: {
    I: 'cyan',
    O: 'yellow',
    T: 'purple',
    S: 'green',
    Z: 'red',
    J: 'blue',
    L: 'orange',
  },
  map: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  gameOver: false,
};

const Reducer2 = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CONTEXT':
      console.log(action.payload);
      return { ...state, context: action.payload };
    case 'CREATE_TETROMINO':
      return { ...state, choisenTetromino: action.payload };
    case 'DELETE_TETROMINO':
      return {
        ...state,
        choisenTetromino: {
          name: '',
          matrix: [],
          row: 0,
          col: 0,
          color: '',
        },
      };
    case 'PLUS_COUNT':
      return { ...state, count: ++state.count };
    case 'BACK_COUNT':
      return { ...state, count: 0 };
    case 'CHANGE_ROW':
      return {
        ...state,
        choisenTetromino: { ...state.choisenTetromino, row: action.payload },
      };
    case 'CHANGE_COL':
      return {
        ...state,
        choisenTetromino: { ...state.choisenTetromino, col: action.payload },
      };
    case 'CHANGE_SPEED':
      return {
        ...state,
        speed: action.payload,
      };
    case 'CHANGE_MAP':
      return {
        ...state,
        map: action.payload,
      };
    case 'GET_TETROMINO':
      return { ...state, choisenTetromino: action.payload };
    case 'CHANGE_TETROMINO_MATRIX':
      return {
        ...state,
        choisenTetromino: { ...state.choisenTetromino, matrix: action.payload },
      };
    case 'GAME_OVER':
      return { state, gameOver: true };
    case 'START_GAME':
      return { state, gameOver: false };
    default:
      return state;
  }
};

export default Reducer2;
