/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i=0;i<tokens.length;i++){
        switch (tokens[i]) {
            case '+':
                stack.push(Number(stack.pop()) + Number(stack.pop()));
                break;
            case '-':
                let numMinus1 = Number(stack.pop());
                let numMinus2 = Number(stack.pop());
                stack.push(numMinus2 - numMinus1);
                break;
            case '*':
                stack.push(Number(stack.pop()) * Number(stack.pop()));
                break;
            case '/':
                let numDiv1 = Number(stack.pop());
                let numDiv2 = Number(stack.pop());
                stack.push(Math.trunc(numDiv2 / numDiv1));
                break;
            default:
                stack.push(tokens[i]);
                break;
        }
        console.log(stack);
    }
    return Number(stack.pop());
};

// console.log(evalRPN(["4","13","5","/","+"]));
