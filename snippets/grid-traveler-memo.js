
/**
 * function to find number of ways to travel from top left
 * to bottom right in a MxN grid
 * constraints - can only travel down / right
 * @param {number} m 
 * @param {number} n 
 * @param {Object || null} memo 
 */
const gridTraveler = (m,n,memo={}) => {
    // prep a unique key
    const rowCol = `${m}:${n}`;
    if (rowCol in memo) return memo[rowCol];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[rowCol] = gridTraveler(m-1, n, memo) + gridTraveler(m,n-1, memo);
    return memo[rowCol];
};

[m,n] = [18,18];
console.log(`Number of ways in a ${m} x ${n} is: `, gridTraveler(m,n));


// Space Time Complexity
// Time = O(N+M) -> since we're always memoizing one side of the binary tree
// Space = O(N+M) -> We are calling the stacks recursively and going through one height at a time