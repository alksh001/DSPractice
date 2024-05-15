// Time = O(n! * n)
// Space = O(n! * n)

const allPermutation = (nums) => {
    const permutations = [];

    const helper = (nums, i) => {
        if (i === nums.length) {
            permutations.push(nums.slice());
            return;
        }
        for (let j = i; j < nums.length; j++){
            // swap
            [nums[i], nums[j]] = [nums[j], nums[i]];
            // recursive
            helper(nums, i + 1);
            // swap
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    helper(nums, 0);
    return permutations;
}

console.log(allPermutation([]));