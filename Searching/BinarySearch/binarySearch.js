// Method 1 -  Iterative Method
// S = O(1)
// T = O(log n)

const binarySearchIterative = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        if (target < nums[middle]) right = middle - 1;
        else left = middle + 1;
    }
    return -1;
}

console.log(binarySearchIterative([1, 2, 3, 4, 7, 8, 9, 10], 6));