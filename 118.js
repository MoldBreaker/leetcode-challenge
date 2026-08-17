/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];

    for (let row = 0; row < numRows; row++) {
        const currentRow = new Array(row + 1).fill(1);

        for(let col = 1; col < row; col++) {
            currentRow[col] = result[row-1][col-1] + result[row-1][col];
        }
        result.push(currentRow);
    }
    return result;
};

/*
    numRows = 1
    [
        [1]
    ]

    numRows = 2
    [
        [1],
        [1, 1]
    ]

    numRows = 5
    [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
    ]

*/ 