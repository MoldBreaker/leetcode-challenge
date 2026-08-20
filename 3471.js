/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    if(k == nums.length) return Math.max(...nums);
    let map = new Map();
    if(k == 1){
        for(let i=0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
    } else {
        let left = 0;
        let right = k;
        while(right <= nums.length){
            for(let i=left;i<right;i++){
                map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            }
            left++;
            right++;
        }
    }
    let arr=[];
    for (const [key, value] of map) {
        if(value == 1) arr.push(key);
    }
    if(arr.length ==  0) return -1;
    return Math.max(...arr);
};

// largestInteger([3,9,2,1,7], 3); //Output = 7
// largestInteger([3,9,7,2,1,7], 4); //Output = 3
// largestInteger([0,0], 1); //Output = -1
// largestInteger([5,11,6], 2);

/**
decrale map, left=0, right=k-1
while right<nums.length:
    from number from left to right:
        map.set(number, (map.get(number) || 0) + 1)
    right++
    left++
declare arr=[]
for key, valuue from map:
    if value == 1:
        arr.push(key)
return max(arr)
 */

/**
Input: nums = [3,9,2,1,7], k = 3

Output: 7

Explanation:

1 appears in 2 subarrays of size 3: [9, 2, 1] and [2, 1, 7].
2 appears in 3 subarrays of size 3: [3, 9, 2], [9, 2, 1], [2, 1, 7].
3 appears in 1 subarray of size 3: [3, 9, 2].
7 appears in 1 subarray of size 3: [2, 1, 7].
9 appears in 2 subarrays of size 3: [3, 9, 2], and [9, 2, 1].
We return 7 since it is the largest integer that appears in exactly one subarray of size k.
 */