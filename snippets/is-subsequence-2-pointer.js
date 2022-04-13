/**
 * Is Subsequence using 2 pointer approach
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const isSubsequence = function (t, s) {
  if (s.length === 0) return true;
  let i = 0;
  let j = 0;
  while (j < t.length && i < s.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

// TESTING
console.log("LCS", isSubsequence("ahbgdc", "abc"));
