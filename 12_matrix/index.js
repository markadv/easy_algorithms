// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  counter = 1;
  startRow = 0;
  endRow = n - 1;
  startColumn = 0;
  endColumn = n - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    //Top row
    for (i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //Right column
    for (j = startRow; j <= endRow; j++) {
      results[j][endColumn] = counter;
      counter++;
    }
    endColumn--;

    //Bot row
    for (k = endColumn; k >= startColumn; k--) {
      results[endRow][k] = counter;
      counter++;
    }
    endRow--;

    //Left column
    for (l = endRow; l >= startRow; l--) {
      results[l][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;

// function matrix(n) {
//   const results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }
//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   while (startColumn <= endColumn && startRow <= endRow) {
//     //toprow
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//     //rightcolumn
//     for (let j = startRow; j <= endRow; j++) {
//       results[j][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
//     //botrow
//     for (let k = endColumn; k >= startColumn; k--) {
//       results[endRow][k] = counter;
//       counter++;
//     }
//     endRow--;
//     //letcolumn
//     for (let l = endRow; l >= startRow; l--) {
//       results[l][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }
//   return results;
// }
