// Time = O(log n)
// Space = O(1)

const searchRotatedSortedArray = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        if (nums[left] <= nums[middle]) {
            // left is sorted
            if (target >= nums[left] && target < nums[middle]) {
                // explore left
                right = middle - 1;
            } else {
                // explore right
                left = middle + 1;
            }
        } else {
            // right is sorted
            if (target <= nums[right] && target > nums[middle]) {
                // explore right part
                left = middle + 1;
            } else {
                // explore left 
                right = middle - 1;
            }
        }
    }
    return -1;
}

console.log(searchRotatedSortedArray([4,5,1,2,3], 4));