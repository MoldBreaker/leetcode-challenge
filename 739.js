/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prev = stack.pop();
            answer[prev] = i - prev;
        }
        stack.push(i);
    }
    return answer;
};

// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));