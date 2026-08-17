/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = new Array(n + 1);
    result[0] = 0;
    result[1] = 1;
    if(n === 0) return [0];
    if(n === 1) return [0, 1];

    for(let i=2;i<=n;i++){
        if(i % 2 === 0){
            result[i] = result[i / 2];
        } else {
            result[i] = result[Math.floor(i / 2)] + 1;
        }
    }
    return result;

};

/*
Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/