const defaultState = {
  context: null,
  grid: 40,
  count: 0,
  tetrominoSequence: [],
  choisenTetromino: {
    name: '',
    matrix: [],
    row: 0,
    col: 0,
  },
  playfield: [],
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
  count: 0,
  rAF: null,
  gameOver: false,
};

for (let row = -2; row < 20; row++) {
  defaultState.playfield[row] = [];

  for (let col = 0; col < 10; col++) {
    defaultState.playfield[row][col] = 0;
  }
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function isValidMove(matrix, cellRow, cellCol, state) {
  const playfield = state.playfield;
  // проверяем все строки и столбцы
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        matrix[row][col] &&
        // если выходит за границы поля…
        (cellCol + col < 0 ||
          cellCol + col >= playfield[0].length ||
          cellRow + row >= playfield.length ||
          // …или пересекается с другими фигурами
          playfield[cellRow + row][cellCol + col])
      ) {
        // то возвращаем, что нет, так не пойдёт
        return false;
      }
    }
  }
  return true;
}

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NEXT_COUNT':
      console.log(state.count);
      return { ...state, count: state.count + 1 };
    case 'BACK_COUNT':
      console.log(state.count);
      return { ...state, count: 0 };
    case 'GET_CONTEXT':
      const canvas = document.body.querySelector('canvas');
      console.log(canvas);
      const context = canvas.getContext('2d');
      return { ...state, context: context };

    case 'GET_NEXT_TETROMINO':
      const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
      const rand = getRandomInt(0, sequence.length - 1);
      const name = sequence[rand];

      // сразу создаём матрицу, с которой мы отрисуем фигуру
      const matrix = tetrominos[name];

      // I и O стартуют с середины, остальные — чуть левее
      const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

      // I начинает с 21 строки (смещение -1), а все остальные — со строки 22 (смещение -2)
      const row = name === 'I' ? -1 : -2;

      // вот что возвращает функция
      return {
        ...state,
        choisenTetromino: {
          name: name, // название фигуры (L, O, и т.д.)
          matrix: matrix, // матрица с фигурой
          row: row, // текущая строка (фигуры стартуют за видимой областью холста)
          col: col, // текущий столбец
        },
      };
    case 'ROTATE_TETROMINO':
      const prevMatrix = state.choisenTetromino.matrix;
      const N = prevMatrix.length - 1;
      const newMatrix = prevMatrix.map((row, i) =>
        row.map((val, j) => prevMatrix[N - j][i])
      );
      return {
        ...state,
        choisenTetromino: {
          ...state.choisenTetromino,
          matrix: newMatrix,
        },
      };
    case 'PLACE_TETROMINO':

    default:
      return state;
  }
};

export default Reducer;
