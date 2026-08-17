/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let value=0;
  let prev=0;
  for(let i=s.length-1;i>=0;i--){
    let current = romanMap.get(s[i])
    if(current<prev){
        value-=current
    } else {
        value+=current
    }
    prev=current
  }
  return value;
};

/*
decralre value, prev, map
for from s.length-1 down to 0:
    current=map(s[i])
    if(current<prev)
        value = value - current
    else 
        value = value + current
    prev=current
return value
*/

/*
Input: s = "III"
Output: 3
Explanation: III = 3.

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
