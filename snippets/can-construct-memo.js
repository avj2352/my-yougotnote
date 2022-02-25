/**
 * canCount - Memoization
 * @param {string} target 
 * @param {string[]} wordBank
 * @param {Object} memo 
 * @returns {boolean} true or false
 */
const canConstruct = (target, wordBank, memo={}) => {
    // retrieve
    if (target in memo) return memo[target];
    if (target === '') return true;
    // recursive
    for (word of wordBank) {
        if (target.indexOf(word) === 0) {
            // starting of word, remove from target
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
              memo[target] = true;
              return true;
            }
            
        }
    }
    memo[target] = false;
    return false;
};

console.log(canConstruct('',['ab','abc','cd','def','abcd'])); // true
console.log(canConstruct('skateboard',['bo','rd','ate','r','sk', 'boar'])); //false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeeee','eeee'])); // false