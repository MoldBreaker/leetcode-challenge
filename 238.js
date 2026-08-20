/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1);
    let prefix = 1;
    for(let i=0;i<nums.length;i++){
        answer[i] = prefix;
        prefix *= nums[i];
    }
    let suffix = 1;
    for(let i=nums.length-1;i>=0;i--){
        answer[i] *= suffix;
        suffix *= nums[i];
    }
    return answer;
};

// productExceptSelf([1, 2, 3, 4])

/*
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
 */