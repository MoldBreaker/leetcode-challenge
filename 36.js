/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Map();
    let cols = new Map();
    let boxes = new Map();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value === ".") continue;

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (!rows.has(i)) rows.set(i, new Set());
            if (!cols.has(j)) cols.set(j, new Set());
            if (!boxes.has(boxIndex)) boxes.set(boxIndex, new Set());

            if (rows.get(i).has(value) || cols.get(j).has(value) || boxes.get(boxIndex).has(value)) {
                // console.log(false);
                return false;
            }

            rows.get(i).add(value);
            cols.get(j).add(value);
            boxes.get(boxIndex).add(value);
        }
    }
    // console.log(true);
    return true;
};

// var board = [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]] // true

// var board = board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]] // false
// /*
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// */

isValidSudoku(board)