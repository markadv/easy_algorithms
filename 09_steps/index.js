// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursion solution
function steps(n, i = 1) {
  if (n === 0) return;
  console.log("#".repeat(i) + " ".repeat(n - 1));
  steps(n - 1, i + 1);
}

module.exports = steps;

// // for... loop solution
// function steps(n) {
//   //iterate to each rows
//   for (rows = 0; rows < n; rows++) {
//     stairSteps = ""; //this is our string to pring out
//     //iterate through
//     for (columns = 0; columns < n; columns++) {
//       //iterate to each columns
//       if (rows >= columns) {
//         //if row is more than column (r0,c0:#, r1,c0: #, r0,c1:" ")
//         stairSteps += "#";
//       } else {
//         stairSteps += " ";
//       }
//     }

//     console.log(stairSteps);
//   }
// }

// my own solution
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let hash = i + 1;
//     let space = n - hash;
//     console.log("#".repeat(hash) + " ".repeat(space));
//   }
// }
