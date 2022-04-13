/**
 * Helper function to sort 2 arrays, combine
 * & return them as one array
 * this function will be called recursively
 * @param {number[]} left array
 * @param {number[]} right array
 * @return {number[]}
 */
const merge = (leftArr, rightArr) => {
  const outputArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // loop iteratively
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];
    if (leftEl < rightEl) {
      outputArr.push(leftEl);
      leftIndex++;
    } else {
      outputArr.push(rightEl);
      rightIndex++;
    }
  }
  // add in the remaining values
  // if we have used up either left / right array, then the slice will just return empty array
  return [
    ...outputArr,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

/**
 * in place algorithm for merge sort
 */
function mergeSort(array) {
  // just return empty or single element array
  if (array.length <= 1) return array;
  // as per merge sort, we need to divide the input array into 2
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);
  // call our helper function recursively
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// testing
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123]));
