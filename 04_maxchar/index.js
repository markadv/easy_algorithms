// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let temp = str.split("");
  let chars = {};
  for (let n of temp) {
    //if n is not undefined or null, means it is true
    // Version 1
    // if (!chars[n]) {
    //   chars[n] = 1;
    // } else {
    //   chars[n]++;
    // }
    chars[n] = chars[n] + 1 || 1;
  }
  console.log(chars);
  let max = 0;
  let maxKey = "";
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxKey = char;
    }
  }
  return maxKey;
}

module.exports = maxChar;
