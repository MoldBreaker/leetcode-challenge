/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let pos1 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            pos1.push(i);
        }
    }
    if (pos1.length < k) return "";
    let left = 0;
    let right = k - 1;
    let min = Infinity;
    let result = "";
    while (right < pos1.length) {
        let length = pos1[right] - pos1[left] + 1;
        let candidate = s.slice(pos1[left], pos1[right] + 1);
        if (length < min) {
            min = length;
            result = candidate;
        }
        else if (length === min && candidate < result) {
            result = candidate;
        }
        left++;
        right++;
    }
    return result;
};

// console.log(shortestBeautifulSubstring("100011001", 3));
// console.log(shortestBeautifulSubstring("1011", 2));
// console.log(shortestBeautifulSubstring("000", 1));
