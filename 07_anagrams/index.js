// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Using arrays
// function anagrams(stringA, stringB) {
//   //Convert the characters to lower case
//   //Remove the spaces and punctuations
//   let tempA = stringA.replace(/\W/g, "").toLowerCase().split("").sort();
//   let tempB = stringB.replace(/\W/g, "").toLowerCase().split("").sort();
//   console.log(tempA, tempB);
//   if (tempA.length !== tempB.length) {
//     return false;
//   }
//   for (let i = 0; i < tempA.length; i++) {
//     if (tempA[i] !== tempB[i]) {
//       return false;
//     }
//   }
//   return true;
// }

//for.. of strings
function anagrams(stringA, stringB) {
  stringA = stringA.replace(/\W/g, "").toLowerCase();
  stringB = stringB.replace(/\W/g, "").toLowerCase();
  objA = {};
  objB = {};

  if (stringA.length !== stringB.length) {
    return false;
  }

  for (let charA of stringA) {
    if (objA[charA]) {
      objA[charA]++;
    } else {
      objA[charA] = 1;
    }
  }

  for (let charB of stringB) {
    if (objB[charB]) {
      objB[charB]++;
    } else {
      objB[charB] = 1;
    }
  }

  for (test in objA) {
    if (objA[test] !== objB[test]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
