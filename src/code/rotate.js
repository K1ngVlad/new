const rotate = (matrix) => {
  // for (let d = matrix.length, a = 0; a < d; a++) {
  //   for (let c = a + 1; c < d; c++) {
  //     let e = matrix[a][c];
  //     matrix[a][c] = matrix[c][a];
  //     matrix[c][a] = e;
  //   }
  // }
  // return matrix;

  const colLength = matrix[0].length;
  const rowLength = matrix.length;

  const newMatrix = matrix.map((e, col) => {
    return e.map((e, row) => {
      return matrix[rowLength - 1 - row][col];
    });
  });
  return newMatrix;
};

export default rotate;
