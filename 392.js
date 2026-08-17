/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let queue = [];
    for(let i=0;i<s.length;i++){
        queue.push(s[i]);
    }
    let queueIndex=0;
    for(let i=0;i<t.length;i++){
        // console.log(t[i] + " == " + queue[queueIndex]);
        if(t[i] == queue[queueIndex]){
            queue.shift();
        }
    }
    return queue.length === 0;
};

// console.log(isSubsequence("axc","ahbgdc"));

/*
Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false
*/