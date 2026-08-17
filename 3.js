/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    let maxLength = 0;
    let left = 0;
    let result =[];
    for(let right=0; right < s.length; right++) {
        while(result.includes(s[right])) {
            result.shift();
            left++;
        }
        result.push(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        //console.log(`left: ${left}, right: ${right}, maxLength: ${maxLength}, result: ${result}`);
    }
    return maxLength;
};

// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

abcabcbb
l
  r

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/