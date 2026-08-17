/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    let hashMap = new Map();
    for(let i=0;i<s.length;i++){
        hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
        hashMap.set(t[i], (hashMap.get(t[i]) || 0) - 1);
    }
    for (const [key, value] of hashMap) {
        if(value!==0) return false;
    }
    return true;
};

// console.log(isAnagram("anagram", "nagaram"))

// console.log(isAnagram('rat', 'car'))

/*
Input: s = "anagram", t = "nagaram"
Output: true


Input: s = "rat", t = "car"
Output: false
*/