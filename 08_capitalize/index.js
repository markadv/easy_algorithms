// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//brute force
function capitalize(str) {
  temp = str.split(" ");
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].split("");
    temp[i][0] = temp[i][0].toUpperCase();
    temp[i] = temp[i].join("");
  }
  return temp.join(" ");
}

module.exports = capitalize;

// js.library
// function capitalize(str) {
//   temp = str.split(" ");
//   for (let i = 0; i < temp.length; i++) {
//     temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
//   }
//   return temp.join(" ");
// }
