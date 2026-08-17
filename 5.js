/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    let result = "";

    for (let i = 0; i < s.length; i++) {

        let left = i;
        let right = i;

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        let odd = s.slice(left + 1, right);

        if (odd.length > result.length) {
            result = odd;
        }

        left = i;
        right = i + 1;

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        let even = s.slice(left + 1, right);

        if (even.length > result.length) {
            result = even;
        }
    }

    return result;
};

// console.log(longestPalindrome("cbbd")); // Output: "bab"

/**
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

babad
l   r

Input: s = "cbbd"
Output: "bb"
 */