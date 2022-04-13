function insertionSort(array) {
  // pure function
  const arr = [...array]; // or array.slice();
  // we cannot start from 0 index, since no array to compare to
  // so start from 1st index
  for (let i = 1; i < arr.length; i++) {
    // keep inserting el from right, so start from the last of i
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // one-liner swap
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      } // not necessary
    }
  }
  return arr;
}

const input = [1, 4, 2, 543, 56, 324, 76, 91, 13, 256];
console.log("insertion sort: ", insertionSort(input));
console.log("original array: ", input);
