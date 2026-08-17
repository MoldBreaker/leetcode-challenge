/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let lsp=[];
    let prev=nums[0];
    let breakI=0;
    lsp.push(prev);
    for(let i=1;i<nums.length;i++){
        if(nums[i] == prev + 1){
            prev = nums[i];
            lsp.push(prev);
        } else {
            breakI = i;
            break;
        }
    }
    let sum = 0;
    for(let i=0;i<lsp.length;i++){
        sum += lsp[i];
    }
    while (nums.includes(sum)) {
        sum++;
    }

    return sum;
};

// console.log(missingInteger([3,4,5,1,12,14,13]));

/*
Input: nums = [1,2,3,2,5]
Output: 6

Input: nums = [3,4,5,1,12,14,13]
Output: 15
*/