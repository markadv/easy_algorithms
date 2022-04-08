// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //slice the array based on chunk size then return a new array
  // array.length / size for the number of slices (this is constant)
  let temp = [];
  let splice = [];
  const div = array.length / size;
  for (i = 0; i < div; i++) {
    if (array.length >= size) {
      splice = array.splice(0, size);
      temp.push(splice);
    } else {
      splice = array.splice(0, array.length % size);
      temp.push(splice);
    }
  }
  console.log(temp);
  return temp;
}

module.exports = chunk;
