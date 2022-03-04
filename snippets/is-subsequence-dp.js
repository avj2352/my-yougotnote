/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const isSubsequence = function(text1, text2) {
    return checkSubsequence(text1.split(''), text2.split(''));
};

/**
 * Using Dynamic Programming to find the solution
 * @param {*} str1 
 * @param {*} str2 
 * @param {*} pos1 
 * @param {*} pos2 
 * @param {*} memo 
 * @returns 
 */
function checkSubsequence(str1, str2, pos1=0, pos2=0, memo={}) {
    // retrieve
    const key = str1[pos1] + "," + str2[pos2];
    if (key in memo) return memo[key];

    // base cases #1
    if (pos1 >=str1.length && pos2 >=str2.length) return true;
    // base cases #2
    if (pos1 >= str1.length) return false;
    // base cases #3
    if (pos2 >= str2.length) return true;
    // recursive case
    if (str2[pos2] === str1[pos1]) {
        memo[key] = checkSubsequence(str1, str2, pos1+1, pos2+1, memo);        
    } else {
        memo[key] = checkSubsequence(str1, str2, pos1+1, pos2, memo);        
    }
    return memo[key];
}
  
console.log('LCS', isSubsequence("ahbgdc", 'axc'));
  