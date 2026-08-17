/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let count=0;
    let left=0;
    let map=new Map();
    for( let right=0; right<nums.length; right++){
        let num=nums[right];
        map.set(num, (map.get(num) || 0) + 1);
        while(map.get(num) > k){
            let leftNum=nums[left];
            map.set(leftNum, map.get(leftNum) - 1);
            if(map.get(leftNum) === 0){
                map.delete(leftNum);
            }
            left++;
        }
        count=Math.max(count, right - left + 1);
        console.log(`left: ${left}, right: ${right}, count: ${count}, map: ${JSON.stringify(Array.from(map.entries()))}`);
    }
    return count;
};

console.log(maxSubarrayLength([1,2,3,1,2,3,1,2], 2)); // Output: 6
/*

Input: nums = [1,2,3,1,2,3,1,2], k = 2
Output: 6
Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this subarray. Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
It can be shown that there are no good subarrays with length more than 6.

[1,2,3,1,2,3,1,2]
l
   r

Input: nums = [1,2,1,2,1,2,1,2], k = 1
Output: 2
Explanation: The longest possible good subarray is [1,2] since the values 1 and 2 occur at most once in this subarray. Note that the subarray [2,1] is also good.
It can be shown that there are no good subarrays with length more than 2.


Input: nums = [5,5,5,5,5,5,5], k = 4
Output: 4
Explanation: The longest possible good subarray is [5,5,5,5] since the value 5 occurs 4 times in this subarray.
It can be shown that there are no good subarrays with length more than 4.
 */