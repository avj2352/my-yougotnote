/**
 * Memoized approach of canSum
 * @param {number} targetSum
 * @param {number[]} numbers
 * @param {Object<{number:boolean}>} memo
 * @returns {boolean} result
 */
const canSum = (targetSum, numbers, memo = {}) => {
  // retrieval
  if (targetSum in memo) return memo[targetSum];
  // base case #1
  if (targetSum === 0) return true;
  // base case #2
  if (targetSum < 0) return false;
  // recursive case
  for (num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
console.log(canSum(300, [7, 14])); // false

/**
 * Space Time Complexity
 * Time Complexity - O(nxm) - since we still traverse through child nodes
 * Space Complexity - O(n) - recursive stack call
 */
