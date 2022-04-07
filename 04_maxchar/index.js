// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  for (let n of str) {
    if (!chars[n]) {
      chars[n] = 1;
    } else {
      chars[n]++;
    }
  }

  let max = 0;
  let maxStr = "";

  for (let char in chars) {
    if (max < chars[char]) {
      max = chars[char];
      maxStr = char;
    }
  }
  return maxStr;
}

module.exports = maxChar;
