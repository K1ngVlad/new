export const collision = (map, choisenTetromino, grid) => {
  const colLength = map.length;
  const rowLength = map[0].length;
  const { row, col, matrix } = choisenTetromino;
  let valid = true;
  matrix.forEach((e, tetrominoCol) => {
    if (!valid) return;
    e.forEach((e, tetrominoRow) => {
      if (!valid) return;
      if (e) {
        if (
          row / grid + tetrominoRow < 0 ||
          row / grid + tetrominoRow >= rowLength ||
          col / grid + tetrominoCol >= colLength
        ) {
          valid = false;
        }
        if (map[col / grid + tetrominoCol]) {
          if (map[col / grid + tetrominoCol][row / grid + tetrominoRow]) {
            valid = false;
          }
        }
      }
    });
  });
  return valid;
};
