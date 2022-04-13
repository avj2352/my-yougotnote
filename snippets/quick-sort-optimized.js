// quick sort algorithm
function quickSort(inputArr) {
  if (inputArr.length <= 1) {
    return inputArr;
  }

  const pivot = inputArr[inputArr.length - 1];
  const leftArr = [];
  const rightArr = [];
  // optimization #1 - we use for...of loop with a clone of array, excluding last item
  for (let el of inputArr.slice(0, inputArr.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
  // optimization #2 - since we changed our base case, we just need this recursive case
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const input = [1, 4, 2, 543, 56, 324, 76, 91, 13, 256];
console.log("quick sort: ", quickSort(input));
