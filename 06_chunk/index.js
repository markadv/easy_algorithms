// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// MySolution
function chunk(array, size) {
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
  return temp;
}

module.exports = chunk;

// Alternative solution
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1]; //Retrieve the last element position inserted in chunk array

//     if (!last || last.length === size) {
//       //if the last element position of the array is undefined (!undefined === true) or is equal to the chunk size target
//       chunked.push([element]); //then push a new array to chunked with the current element as a container
//     } else {
//       last.push(element); //else, push the element to the "last" array
//     }
//   }

//   return chunked;
// }
