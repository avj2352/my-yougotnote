// counting sort
function countingSort(unorderedScores) {

    // Step 1 - get the maxValue in the array
    let maxValue = 0;
    unorderedScores.forEach(item => {
        if (item > maxValue) maxValue = item;
    });

    // Populate our occurance array with it's length = maxValue+1
    const occurance = new Array(maxValue+1).fill(0);
    
    // Step 2 - Populate occurance - range 
    unorderedScores.forEach(item => {
        occurance[item]++;
    });
        
    // Populate the final sorted array
    const sortedList = [];

    // Step 3 - For each item in occurance
    for (let score = 0; score < occurance.length; score++) {
      const count = occurance[score];      
      for (let time = 0; time < count; time++) {
        sortedList.push(score);
      }
    }

    return sortedList;
  }

const input = [1, 4, 4, 2];
console.log('counting sort: ', countingSort(input));
// console.log('original array: ', input);