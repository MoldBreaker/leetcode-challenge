/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    const n = sequence.length;
    const m = word.length;

    const dp = new Array(n).fill(0);
    let answer = 0;

    for (let i = m - 1; i < n; i++) {

        const sub = sequence.substring(i - m + 1, i + 1);

        if (sub === word) {

            if (i - m >= 0) {
                dp[i] = dp[i - m] + 1;
            } else {
                dp[i] = 1;
            }

            answer = Math.max(answer, dp[i]);
        }
    }

    return answer;
};
