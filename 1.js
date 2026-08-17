/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    for(let i=0;i<nums.length;i++){
        let x=target-nums[i];
        if(map.has(x)) return [map.get(x), i];
        map.set(nums[i], i);
    }
};

/**Normal way
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let x=target-nums[i];
        console.log(x)
        if(nums.slice(i + 1).includes(x)){
            return [i, nums.lastIndexOf(x)]
        }
    }
    return [];
};
 */

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))


/**
for i, val from nums:
    x=targer-val
    if nums.contains(x)
    return [i, num.getIndexOf(x)]
return []
*/

/**
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Input: nums = [3,2,4], target = 6
Output: [1,2]


Input: nums = [3,3], target = 6
Output: [0,1]
 */