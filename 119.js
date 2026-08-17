/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = [];

    for (let row = 0; row <= rowIndex; row++) {
        const currentRow = new Array(row + 1).fill(1);

        for(let col = 1; col < row; col++) {
            currentRow[col] = result[row-1][col-1] + result[row-1][col];
        }
        result.push(currentRow);
    }
    return result[rowIndex];
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