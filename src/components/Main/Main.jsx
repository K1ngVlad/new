import { useDispatch, useSelector } from 'react-redux';
import { collision } from '../../code/collision';
import { space, left, right, down } from '../../code/keybord';
import rotate from '../../code/rotate';
import { createTetromino } from '../../code/createTetromino';
import lockedTetromino from '../../code/lockedTetromino';
import render from '../../code/render';
import { calculation } from '../../code/calculation';
import { useEffect } from 'react';
import './Main.css';
import Game from './Game/Game';
import Lose from './Lose/Lose';

const Main = () => {
  const gameOver = useSelector((state) => state.gameOver);
  const dispatch = useDispatch();
  const context = useSelector((state) => state.context.context);
  const count = useSelector((state) => state.count.count);
  const { colors, choisenTetromino, tetrominos } = useSelector(
    (state) => state.tetromino
  );
  const { grid, map } = useSelector((state) => state.map);
  const speed = useSelector((state) => state.speed.speed);
  // const {
  //   context,
  //   count,
  //   colors,
  //   grid,
  //   choisenTetromino,
  //   tetrominos,
  //   speed,
  //   map,
  //   gameOver,
  // } = useSelector((state) => state)
  space.press = () => {
    let matrix = rotate(JSON.parse(JSON.stringify(choisenTetromino.matrix)));

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

  // useEffect(() => {
  //   if (context) {
  //     render(context, choisenTetromino, grid, map);
  //   }
  // }, [choisenTetromino]);

  useEffect(() => {
    if (context) {
      if (choisenTetromino.name) {
        if (count === 1000) {
          dispatch({ type: 'BACK_COUNT' });
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
            // const newMap = lockedTetromino(choisenTetromino, map, grid);
            dispatch(lockedTetromino(choisenTetromino, map, grid));
            // dispatch({ type: 'CHANGE_MAP', payload: newMap });
            // dispatch({ type: 'CHANGE_COUNT', payload: 1000 });
          }
        } else {
          dispatch(calculation());
        }
      } else {
        dispatch({ type: 'BACK_COUNT' });
        dispatch(createTetromino(tetrominos, colors, grid, map));
      }
    } else {
      const canvas = document.body.querySelector('canvas');
      const context = canvas.getContext('2d');
      dispatch({ type: 'GET_CONTEXT', payload: context });
    }
  }, [context, count, map]);
  return <div className="Main">{!gameOver ? <Game /> : <Lose />}</div>;
};

export default Main;
