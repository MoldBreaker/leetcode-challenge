/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let xor = 0;
    let hasNonZero = false;

    for (let num of nums) {
        xor ^= num;

        if (num !== 0) {
            hasNonZero = true;
        }
    }

    if (xor !== 0) {
        return nums.length;
    }

    if (hasNonZero) {
        return nums.length - 1;
    }

    return 0;
};


/*
Input: nums = [1,2,3]

Output: 2

Explanation:

One longest subsequence is [2, 3]. The bitwise XOR is computed as 2 XOR 3 = 1, which is non-zero.



Input: nums = [2,3,4]

Output: 3

Explanation:

The longest subsequence is [2, 3, 4]. The bitwise XOR is computed as 2 XOR 3 XOR 4 = 5, which is non-zero.
*/