const allConstruct = (target, wordBank) => {
    // base case #1
    if (target === '') return [[]];
    // kinda - base case #2
    let totalWays = [];
    // recursive case
    for (let word of wordBank) {
        // if the target begins with the word
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            totalWays.push(...targetWays);
        }        
    }
    return totalWays;
};


console.log(allConstruct('purple',['purp','p','le','ur','purpl'])); // 2
console.log(allConstruct('',['ab','abc','cd','def','abcd'])); // 1
console.log(allConstruct('skateboard',['bo','rd','ate','r','sk', 'boar'])); //0
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeeee','eeee'])); 