/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    let diff = 0;
    let leftQ = 0;
    let rightQ = 0;

    const half = num.length / 2;

    for (let i = 0; i < half; i++) {
        if (num[i] === '?') {
            leftQ++;
        } else {
            diff += Number(num[i]);
        }
    }

    for (let i = half; i < num.length; i++) {
        if (num[i] === '?') {
            rightQ++;
        } else {
            diff -= Number(num[i]);
        }
    }

    if ((leftQ + rightQ) % 2 === 1) {
        return true;
    }

    return diff !== 9 * (rightQ - leftQ) / 2;
};