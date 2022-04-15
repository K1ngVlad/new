import { useEffect } from 'react';
import { calculation } from '../../../code/calculation';
import { createTetromino } from '../../../code/createTetromino';
import { collision } from '../../../code/collision';
import { left, right, down, space } from '../../../code/keybord';
import { useDispatch, useSelector } from 'react-redux';
import Reducer from '../../../store/Reducer';
import './Game.css';
import render from '../../../code/render';
import rotate from '../../../code/rotate';
import lockedTetromino from '../../../code/lockedTetromino';
const Game = () => {
  const context = useSelector((state) => state.context.context);
  const count = useSelector((state) => state.count.count);
  const choisenTetromino = useSelector(
    (state) => state.tetromino.choisenTetromino
  );
  const { grid, map } = useSelector((state) => state.map);
  useEffect(() => {
    if (context) {
      render(context, choisenTetromino, grid, map);
    }
  }, [count]);
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
