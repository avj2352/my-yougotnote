
function searchSuggestions(repository, customerQuery) {
    // Write your code here
    if (customerQuery.length <2) return [[]];
    let totalWays = [];
    for (let word of repository.sort()) {
        if (word.indexOf(customerQuery) === 0) {
            const suffix = customerQuery.slice(0,customerQuery.length-1);
            let suffixWays = searchSuggestions(repository, suffix);
            // console.log('Suffix ways', suffixWays);
            let targetWays = suffixWays.map(way => [word, ...way]);
            if (targetWays.length > 3) targetWays = targetWays.slice(0,3);
            totalWays.push(...targetWays);
        }   
    }
    
    return totalWays;
}

const repository = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad' ];
const customerQuery = 'mouse';
console.log('Search Suggestion: ', searchSuggestions(repository, customerQuery));