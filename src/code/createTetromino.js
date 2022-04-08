import { useSelector } from 'react-redux';

export const createTetromino = (tetrominos, colors, grid) => {
  return (dispatch) => {
    const ranNum = (num) => Math.round(Math.random() * num);
    const arr = ['I', 'J', 'L', 'O', 'S', 'Z', 'T'];
    const name = arr[ranNum(6)],
      matrix = tetrominos[name],
      row = grid * 5,
      col = 0,
      color = colors[name];
    dispatch({
      type: 'CREATE_TETROMINO',
      payload: {
        name: name,
        matrix: matrix,
        row: row,
        col: col,
        color: color,
      },
    });
  };
};
