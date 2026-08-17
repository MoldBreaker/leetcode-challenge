/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    const descSorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    return [...descSorted.keys()].slice(0, k);
};

// console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2))
// console.log(topKFrequent([1], 1))
// console.log(topKFrequent([1,1,1,2,2,3], 2))
// console.log(topKFrequent([3,0,1,0], 1))

/*
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]


Example 2:
Input: nums = [1], k = 1
Output: [1]


Example 3:
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]
*/