/*
anagrams

Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

test_00:

anagrams('restful', 'fluster'); // -> true
test_01:

anagrams('cats', 'tocs'); // -> false
test_02:

anagrams('monkeyswrite', 'newyorktimes'); // -> true
test_03:

anagrams('paper', 'reapa'); // -> false
test_04:

anagrams('elbow', 'below'); // -> true
test_05:

anagrams('tax', 'taxi'); // -> false
test_06:

anagrams('taxi', 'tax'); // -> false
test_07:

anagrams('night', 'thing'); // -> true
test_08:

anagrams('abbc', 'aabc'); // -> false
*/

// My approach
// const anagrams = (s1, s2) => {
//   let wordList01 = s1.split('').sort().join();
//   let wordList02 = s2.split('').sort().join();

//   return wordList01 === wordList02;
// };

// Alvin's approach - counting pattern technique
// Space Time Complexity
// consider n & m the length of the 2 strings
// Time: O(n+m)
// Space: ~O(n+m)
const anagrams = (s1, s2) => {
  const count = {};

  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char] -= 1;
    }
  }

  for (char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  anagrams,
};
