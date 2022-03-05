const fiveSort = (nums) => {
    let lowPtr = 0;
    let highPtr = nums.length - 1;
    while (lowPtr < highPtr) {
        if (highPtr !== 5) {
            swap(nums, lowPtr, highPtr);
            lowPtr++;
        }
        highPtr--;
    }
    return nums;
};

function swap(arr, lowPtr, highPtr) {
    const temp = arr[lowPtr];
    arr[lowPtr] = arr[highPtr];
    arr[highPtr] = temp;
}

console.log('Five sort of array: ', fiveSort([12, 5, 1, 5, 12, 7]));