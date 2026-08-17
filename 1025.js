/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let dp = new Array(n+1);
    dp[1] = false;
    dp[2] = true;
    for(let i=3;i<=n;i++){
        dp[i] = !dp[i-1];
    }
    return dp[n];
};

/*
Example 1:
Input: n = 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.


Example 2:
Input: n = 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
*/