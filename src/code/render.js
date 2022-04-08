const render = (context, choisenTetromino, grid, map) => {
  // context.clearRect(0, 0, map[0].length * grid, map.length * grid);
  map.forEach((e, col) => {
    e.forEach((e, row) => {
      if (!e) {
        context.clearRect(row * grid, col * grid, grid, grid);
      }
    });
  });
  context.fillStyle = choisenTetromino.color;
  choisenTetromino.matrix.forEach((e, col) => {
    e.forEach((e, row) => {
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

export default render;
