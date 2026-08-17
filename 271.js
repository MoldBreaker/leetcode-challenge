class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode = function(strs) {
        let lenStr=[];
        let strStr='';
        for(let i=0;i<strs.length;i++){
            lenStr.push(strs[i].length);
            strStr+=strs[i];
        }
        return lenStr.join(',') +'#'+ strStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let separator = str.indexOf("#");
        let lengths = str.slice(0, separator);
        let data = str.slice(separator + 1);

        if (lengths === "") return [];
        
        let lenStr = lengths.split(",").map(Number);
        let result = [];
        let index = 0;
        for (let i = 0; i < lenStr.length; i++) {
            let length = lenStr[i];
            result.push(data.slice(index, index + length));
            index += length;
        }
        return result;
    }
}

// var encode = function(strs) {
//     let lenStr=[];
//     let strStr='';
//     for(let i=0;i<strs.length;i++){
//         lenStr.push(strs[i].length);
//         strStr+=strs[i];
//     }
//     return lenStr.join(',') +'#'+ strStr;
// }

// /**
// * @param {string} str
// * @returns {string[]}
// */
// var decode = function(str) {
//     let [lengths, data] = str.split("#");
//     let lenStr = lengths.split(",").map(Number);
//     let result = [];
//     let index = 0;
//     for (let i = 0; i < lenStr.length; i++) {
//         let length = lenStr[i];
//         result.push(data.slice(index, index + length));
//         index += length;
//     }
//     return result;
// }

// console.log(encode(["Hello", "World"]));

/**
Design: <len>,<len>,...#<string>
 */
