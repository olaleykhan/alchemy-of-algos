function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map[comp] !== undefined) {
            return [i, map[comp]]
        }
        map[nums[i]] = i;

    }

};