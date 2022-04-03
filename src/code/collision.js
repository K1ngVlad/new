export const collision = (map, choisenTetromino, grid) => {
  const colLength = map.length;
  const rowLength = map[0].length;
  const { row, col, matrix } = choisenTetromino;
  console.log(row);
  let valid = true;
  matrix.forEach((e, tetrominoRow) => {
    if (!valid) return;
    e.forEach((e, tetrominoCol) => {
      if (!valid) return;
      if (e) {
        if (
          row / grid + tetrominoRow < 0 ||
          row / grid + tetrominoRow >= rowLength ||
          col / grid + tetrominoCol >= colLength
        ) {
          valid = false;
        }
        if (map[row / grid + tetrominoRow]) {
          if (map[row / grid + tetrominoRow][col / grid + tetrominoCol]) {
            valid = false;
          }
        }
      }
    });
  });
  return valid;
};
