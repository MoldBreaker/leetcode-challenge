/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let map = new Map();
    while(right<s.length){
        map.set(s[right], (map.get(s[right]) || 0)+1);
        while(map.get(s[right]) > 2){
            map.set(s[left], map.get(s[left])-1);
            left++;
        }
        maxLength = Math.max(maxLength, right-left+1);
        right++;
    }
    return maxLength
};

/*step by step
declare left, right, maxLength, map

while right<s.length
    map.set(s[right],repeat+1)
    while get(s[right]) > 2
        set(s[left],-1)
        left++
    maxlength = max(maxLength, right - left + 1)
    right++
return maxLength
*/

/**
Input: s = "bcbbbcba"

Output: 4

Explanation:

The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".



Input: s = "aaaa"

Output: 2

Explanation:

The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".
 */