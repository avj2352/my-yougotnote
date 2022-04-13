//in-place algorithm. mutates the array. side-effects
function selectionSort(array) {
  const arr = [...array];
  // we don't need to compare the last element
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // for j - we do need to go to the last element
    // we assume first element is minIndex, so j=i+1
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap - one-line optimization
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// testing
const input = [1, 4, 2, 8, 345, 123, 32, 5443, 63];
console.log("Sorted", selectionSort(input));
console.log("Original array", input);
