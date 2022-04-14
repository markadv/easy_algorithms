// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, rows = 0, level = "") {
  //what is the base case
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//using recursion
// function pyramid(n, rows = 0, level = "") {
//   const levelWidth = n + (n - 1);
//   const midpoint = Math.floor(levelWidth / 2);
//   if (n === rows) {
//     return;
//   }

//   if (levelWidth === level.length) {
//     console.log(level);
//     return pyramid(n, rows + 1);
//   }

//   const add =
//     midpoint - rows <= level.length && midpoint + rows >= level.length
//       ? "#"
//       : " ";
//   pyramid(n, rows, level + add);
// }

module.exports = pyramid;

// //iterative solution, use range and math
// function pyramid(n) {
//   const levelWidth = n + (n - 1);
//   const midpoint = Math.floor(levelWidth / 2);
//   for (let rows = 0; rows < n; rows++) {
//     let level = "";
//     for (let cols = 0; cols < levelWidth; cols++) {
//       if (midpoint - rows <= cols && midpoint + rows >= cols) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
