import { useEffect } from 'react';
import { calculation } from '../../../code/calculation';
import { createTetromino } from '../../../code/createTetromino';
import { collision } from '../../../code/collision';
import { left, right, down, space } from '../../../code/keybord';
import { useDispatch, useSelector } from 'react-redux';
import Reducer from '../../../store/Reducer';
import './Game.css';

const Game = () => {
  const dispatch = useDispatch();
  const {
    context,
    count,
    colors,
    grid,
    choisenTetromino,
    tetrominos,
    speed,
    map,
  } = useSelector((state) => state);
  const render = () => {
    context.clearRect(0, 0, 400, 800);
    context.fillStyle = choisenTetromino.color;
    choisenTetromino.matrix.forEach((e, row) => {
      e.forEach((e, col) => {
        if (e) {
          context.fillRect(
            choisenTetromino.row + row * grid,
            choisenTetromino.col + col * grid,
            grid,
            grid
          );
        }
      });
    });
  };
  const rotate = (matrix) => {
    console.log('переворот');
    for (let d = matrix.length, a = 0; a < d; a++) {
      for (let c = a + 1; c < d; c++) {
        let e = matrix[a][c];
        matrix[a][c] = matrix[c][a];
        matrix[c][a] = e;
      }
    }
    return matrix;
  };

  space.press = () => {
    let matrix = rotate(choisenTetromino.matrix.slice());
    if (collision(map, { ...choisenTetromino, matrix: matrix }, grid)) {
      dispatch({
        type: 'CHANGE_TETROMINO_MATRIX',
        payload: matrix,
      });
    }
  };

  left.press = () => {
    if (
      collision(
        map,
        { ...choisenTetromino, row: choisenTetromino.row - grid },
        grid
      )
    ) {
      dispatch({
        type: 'CHANGE_ROW',
        payload: choisenTetromino.row - grid,
      });
    }
  };

  right.press = () => {
    if (
      collision(
        map,
        { ...choisenTetromino, row: choisenTetromino.row + grid },
        grid
      )
    ) {
      dispatch({
        type: 'CHANGE_ROW',
        payload: choisenTetromino.row + grid,
      });
    }
  };

  down.press = () => {
    dispatch({ type: 'CHANGE_SPEED', payload: 5 });
  };
  down.release = () => {
    dispatch({ type: 'CHANGE_SPEED', payload: 30 });
  };

  useEffect(() => {
    if (context) {
      render();
    }
  }, [choisenTetromino]);

  useEffect(() => {
    if (context) {
      if (choisenTetromino.name) {
        if (count === 0) {
          // render();
          dispatch(calculation());
        } else if (count >= speed) {
          if (
            collision(
              map,
              { ...choisenTetromino, col: choisenTetromino.col + grid },
              grid
            )
          ) {
            dispatch({ type: 'BACK_COUNT' });
            dispatch({
              type: 'CHANGE_COL',
              payload: choisenTetromino.col + grid,
            });
          } else {
            dispatch({ type: 'PLUS_COUNT' });
            dispatch({ type: 'DELETE_TETROMINO' });
          }
        } else {
          dispatch(calculation());
        }
      } else {
        dispatch({ type: 'BACK_COUNT' });
        dispatch(createTetromino(tetrominos, colors, grid));
      }
    } else {
      const canvas = document.body.querySelector('canvas');
      const context = canvas.getContext('2d');
      dispatch({ type: 'GET_CONTEXT', payload: context });
    }
  }, [context, count]);

  return (
    <div className="Game">
      <div className="gameTitle">
        <div className="gameTitleContainer">
          <h1 className="gameTitleText">Тетрис</h1>
        </div>
      </div>
      <div className="gameBox">
        <canvas width="400px" height="800px" className="gameRender"></canvas>
      </div>
    </div>
  );
};

export default Game;
