/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const count = new Array(26).fill(0);
    for (const ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }
    let matched = 0;

    while (matched < target.length) {
        const index = target.charCodeAt(matched) - 97;

        if (count[index] === 0) {
            break;
        }

        count[index]--;
        matched++;
    }
    for (let i = matched; i >= 0; i--) {
        if (i < matched) {
            const index = target.charCodeAt(i) - 97;
            count[index]++;
        }
        const targetIndex = target.charCodeAt(i) - 97;
        for (let c = targetIndex + 1; c < 26; c++) {
            if (count[c] > 0) {
                count[c]--;
                let result =
                    target.slice(0, i) +
                    String.fromCharCode(c + 97);
                for (let j = 0; j < 26; j++) {
                    result += String.fromCharCode(j + 97).repeat(count[j]);
                }

                return result;
            }
        }
    }
    return "";
};