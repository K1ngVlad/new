import { useSelector } from 'react-redux';
import { collision } from './collision';

export const createTetromino = (tetrominos, colors, grid, map) => {
  return (dispatch) => {
    const ranNum = (num) => Math.floor(Math.random() * num);
    const arr = ['I', 'J', 'L', 'O', 'S', 'Z', 'T'];
    const name = arr[ranNum(7)],
      matrix = tetrominos[name],
      row = grid * 5,
      col = 0,
      color = colors[name];

    const newTetromino = {
      name: name,
      matrix: matrix,
      row: row,
      col: col,
      color: color,
    };

    if (collision(map, newTetromino, grid)) {
      dispatch({
        type: 'CREATE_TETROMINO',
        payload: newTetromino,
      });
    } else {
      dispatch({ type: 'GAME_OVER' });
    }
  };
};
