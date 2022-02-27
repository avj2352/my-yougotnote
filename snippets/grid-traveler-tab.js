/**
 * Grid Traveler using Tabulation
 * @param {*} m 
 * @param {*} n 
 * @returns {number}
 */
const gridTraveler = (m,n) => {
    // step1: pre-fill n+1 array
    const table = Array(m+1).fill().map(() => Array(n+1).fill(0));
    // step2: provide a seed value
    table[1][1] = 1;
    // step3: come up with a logic for sub-problem to solve large problem
    for (let i=0; i<=m; i++){
      for(let j=0; j<=n; j++) {
        const current = table[i][j];
        if (j+1<=n) table[i][j+1] += current;
        if (i+1<=m) table[i+1][j] += current;
      }
    }
    // step4: return the final element to solve the problem
    return table[m][n];
    };
    
    console.log(gridTraveler(1,1)); // 1
    console.log(gridTraveler(2,3)); // 3
    console.log(gridTraveler(3,2)); // 3
    console.log(gridTraveler(3,3)); // 6
    console.log(gridTraveler(18,18)); //