/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = new Map();
    for(let i=0;i<nums.length;i++){
        hashMap.set(nums[i], (hashMap.get(nums[i]) +1 || 0))
        if(hashMap.get(nums[i]) > 0) return true;
    }
    return false;
};

// console.log(containsDuplicate([1,2,3,1]))

/**
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.


Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.


Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */