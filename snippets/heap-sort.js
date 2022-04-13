// function heapSort
function heapSort(inputArr) {
  // base case
  if (inputArr.length < 2) return inputArr;
  let arrLength = inputArr.length;
  // build-max-heap #1 - call heapify first time
  for (let i = Math.floor(inputArr.length / 2) - 1; i >= 0; i--) {
    heapify(inputArr, arrLength, i);
  }
  // build-max-heap #2 - after calling heapify again
  for (let i = inputArr.length - 1; i > 0; i--) {
    swap(inputArr, 0, i);
    arrLength--;
    heapify(inputArr, arrLength, 0);
  }
  return inputArr;
}

// recursive function heapify
/**
 *
 * @param {Array<number>} inputArr - input array
 * @param {number} arrLength - array length
 * @param {number} pi - parent index
 */
function heapify(inputArr, arrLength, pi) {
  const leftIndex = pi * 2 + 1;
  const rightIndex = pi * 2 + 2;
  let maxIndex = pi;
  if (leftIndex < arrLength && inputArr[leftIndex] > inputArr[maxIndex]) {
    maxIndex = leftIndex;
  }
  if (rightIndex < arrLength && inputArr[rightIndex] > inputArr[maxIndex]) {
    maxIndex = rightIndex;
  }
  if (maxIndex !== pi) {
    // perform swap
    swap(inputArr, pi, maxIndex);
    // recursively call on the child elements
    heapify(inputArr, arrLength, maxIndex);
  }
}

// swap function
/**
 *
 * @param {Array<number>} arr - input array
 * @param {number} leftIndex - index
 * @param {number} rightIndex - index
 * @returns {Array<number>}
 */
function swap(arr, leftIndex, rightIndex) {
  [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
  return arr;
}

const input = [1, 4, 2, 543, 56, 324, 76, 91, 13, 256];
console.log("heap sort: ", heapSort(input));
// console.log('original array: ', input);
