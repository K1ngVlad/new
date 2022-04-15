import { combineReducers } from 'redux';
import contextReducer from './contextReducer';
import countReducer from './countReducer';
import gameModeReducer from './gameModeReducer';
import mapReducer from './mapReducer';
import scoreReducer from './scoreReducer';
import speedReducer from './speedReducer';
import tetrominoReducer from './tetrominoReducer';

console.log(tetrominoReducer);

const rootReducer = combineReducers({
  context: contextReducer,
  count: countReducer,
  gameMode: gameModeReducer,
  map: mapReducer,
  score: scoreReducer,
  speed: speedReducer,
  tetromino: tetrominoReducer,
});

export default rootReducer;
