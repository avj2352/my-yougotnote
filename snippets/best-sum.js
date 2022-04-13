const bestSum = (targetSum, numbers) => {
  // base case #1
  if (targetSum === 0) return [];
  // base case #2
  if (targetSum < 0) return null;
  let shortestCombination = null;
  // recursive within loop
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])); // 7
console.log(bestSum(8, [2, 3, 5])); // [3,5]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
// console.log(bestSum(100, [1,2,5,25])); // [25,25,25,25]
