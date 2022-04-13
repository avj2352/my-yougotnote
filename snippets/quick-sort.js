// quick sort algorithm
function quickSort(inputArr) {
  if (inputArr.length === 1) {
    return inputArr;
  }

  const pivot = inputArr[inputArr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < inputArr.length - 1; i++) {
    if (inputArr[i] < pivot) {
      leftArr.push(inputArr[i]);
    } else {
      rightArr.push(inputArr[i]);
    }
  }

  // recursive case
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
}

const input = [1, 4, 2, 543, 56, 324, 76, 91, 13, 256];
console.log("quick sort: ", quickSort(input));
