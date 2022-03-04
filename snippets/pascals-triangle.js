/**
 * Function to generate pascal's triangle array based on the row input
 * @param {number} row 
 * @returns {number[]}
 */
const pascalsTriangle = (row) => {
    // base case if 
    if (row === 1) return [1];
    // recursive
    const prevLine = pascalsTriangle(row-1);
    let currLine = [1];
    for (let i=0; i<prevLine.length-1; i++) {
        currLine.push(prevLine[i] + prevLine[i+1]);    
    }
    currLine.push(1);
    return currLine;
};



// Testing

const row = 5;
console.log(`Pascal's triangle for row ${row} is: `, pascalsTriangle(row));