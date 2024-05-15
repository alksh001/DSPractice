const powerSet = nums => {
    const result = [];

    const helper = (nums, i, sub) => {
        if (i === nums.length) {
            result.push(sub.slice());
            return;
        }
        // dont add
        helper(nums, i + 1, sub);
        
        // add
        sub.push(nums[i]);
        helper(nums, i + 1, sub);
        sub.pop();
    }
    helper(nums, 0, []);
    return result;
}

console.log(powerSet([1,8,7]));