const lockedTetromino = (choisenTetromino, map, grid) => {
  return (dispatch) => {
    const newMap = JSON.parse(JSON.stringify(map));
    const colIndex = choisenTetromino.col / grid;
    const rowIndex = choisenTetromino.row / grid;
    choisenTetromino.matrix.forEach((e, col) => {
      e.forEach((e, row) => {
        if (choisenTetromino.matrix[col][row]) {
          newMap[colIndex + col][rowIndex + row] = e;
        }
      });
    });
    let score = 0;
    newMap.forEach((e, col) => {
      let full = true;
      e.forEach((e) => {
        if (!e) {
          full = false;
        }
      });
      if (full) {
        for (let i = col; i >= 0; i--) {
          if (i) {
            newMap[i] = newMap[i - 1];
          } else {
            newMap[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            score += 10;
          }
        }
        // newMap[col] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // console.log(newMap.col);
      }
    });
    dispatch({ type: 'CHANGE_MAP', payload: newMap });
    dispatch({ type: 'DELETE_TETROMINO' });
    dispatch({ type: 'PLUS_SCORE', payload: score });
    // dispatch({ type: 'PLUS_COUNT' });
  };
};

export default lockedTetromino;
