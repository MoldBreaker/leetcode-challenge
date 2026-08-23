/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    const arr = Array.from(String(n), Number);
    let sum = 0;
    let add = 1;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        add*=arr[i];
    }
    return n % (sum + add) == 0;
};

/**
Input: n = 99
Output: true
Explanation:
Since 99 is divisible by the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), the output is true.


Input: n = 23
Output: false
Explanation:
Since 23 is not divisible by the sum (2 + 3 = 5) plus product (2 * 3 = 6) of its digits (total 11), the output is false.
 */