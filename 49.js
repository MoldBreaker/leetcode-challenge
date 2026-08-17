/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length==1) return [strs]
    var map=new Map();
    for(let i=0;i<strs.length;i++){
        let org = strs[i]
        let sorted = strs[i].split('').sort().join('')
        if(!map.has(sorted)){
            map.set(sorted, [org])
        } else {
            map.set(sorted, [...map.get(sorted), org])
        }
    }
    var result=[];
    for (const [key, value] of map) {
        result.push(value);
    }
    return result;
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// console.log(groupAnagrams([""]))
// console.log(groupAnagrams(["a"]))

/**
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.


Input: strs = [""]
Output: [[""]]


Input: strs = ["a"]
Output: [["a"]]
 */