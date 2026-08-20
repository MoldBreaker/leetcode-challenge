/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    for(let i=2;i<nums.length;i++){
        if(arr1[arr1.length-1] > arr2[arr2.length-1]){
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }
    return [...arr1, ...arr2]
};

/*
Input: nums = [5,4,3,8]
Output: [5,3,4,8]
Explanation: After the first 2 operations, arr1 = [5] and arr2 = [4].
In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (5 > 4), append nums[3] to arr1, hence arr1 becomes [5,3].
In the 4th operation, as the last element of arr2 is greater than the last element of arr1 (4 > 3), append nums[4] to arr2, hence arr2 becomes [4,8].
After 4 operations, arr1 = [5,3] and arr2 = [4,8].
Hence, the array result formed by concatenation is [5,3,4,8].
 */