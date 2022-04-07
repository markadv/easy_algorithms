// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//version1
// function reverse(str) {
//   temp = [];
//   str.split("");
//   for (i = str.length - 1; i >= 0; i--) {
//     temp.push(str[i]);
//   }
//   temp = temp.join("");
//   return temp;
// }

//version2
function reverse(str) {
  temp = str.split("");
  temp.reverse();
  temp = temp.join("");
  return temp;
}

module.exports = reverse;
