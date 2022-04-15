const defaultState = {
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
};

const tetrominoReducer = (state = defaultState, action) => {
  switch (action.type) {
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
    case 'CHANGE_TETROMINO_MATRIX':
      return {
        ...state,
        choisenTetromino: { ...state.choisenTetromino, matrix: action.payload },
      };
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
    default:
      return state;
  }
};

export default tetrominoReducer;
