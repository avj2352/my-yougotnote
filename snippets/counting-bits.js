function countOnesInBit (num) {
  const binaryString = (num >>> 0).toString(2);  //10  
  let count = 0;
  for (let char of binaryString) {
    if (char === '1') count++;
  }
  return count;
}

function countingBits (n) {  // 2
  const arrList = Array(n+1).fill(0); // [0,0,0]
  for (let i=1; i<=n; i++) {
    arrList[i] = countOnesInBit(i);
  }
  return arrList;
}

const n = 5;
console.log(`counting bits of ${n} is: `, countingBits(n));
