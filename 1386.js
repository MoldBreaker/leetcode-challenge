/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  const rows = new Map();

  for (const [row, seat] of reservedSeats) {
    if (!rows.has(row)) {
      rows.set(row, new Set());
    }

    rows.get(row).add(seat);
  }
  let count = (n - rows.size) * 2;

  for (const seats of rows.values()) {
    const leftFree =
      !seats.has(2) && !seats.has(3) && !seats.has(4) && !seats.has(5);

    const middleFree =
      !seats.has(4) && !seats.has(5) && !seats.has(6) && !seats.has(7);

    const rightFree =
      !seats.has(6) && !seats.has(7) && !seats.has(8) && !seats.has(9);

    if (leftFree && rightFree) {
      count += 2;
    } else if (leftFree || middleFree || rightFree) {
      count += 1;
    }
  }

  return count;
};

// maxNumberOfFamilies(3, [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]);
// maxNumberOfFamilies(2, [[2,1],[1,8],[2,6]]);
// maxNumberOfFamilies(4, [[4,3],[1,4],[4,6],[1,7]]);

/**
Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4

Explanation: The figure above shows an optimal allocation of four groups. 
Seats marked in blue are already reserved, and each set of four contiguous 
seats marked in orange is assigned to one group.
 */


/* -> Time Limit Exceeded
var maxNumberOfFamilies = function (n, reservedSeats) {
  const matrix = Array.from({ length: n }, () => Array(10).fill(0));
  for (let i = 0; i < reservedSeats.length; i++) {
    matrix[reservedSeats[i][0] - 1][reservedSeats[i][1] - 1] = 1;
    // console.log((reservedSeats[i][0]-1) + ' ' + (reservedSeats[i][1]-1))
  }
  let count = 0;
  //1,2,3,4
  //3,4,5,6
  //5,6,7,8
  for (let i = 0; i < n; i++) {
    if (
      matrix[i][1] == 0 &&
      matrix[i][2] == 0 &&
      matrix[i][3] == 0 &&
      matrix[i][4] == 0 &&
      matrix[i][5] == 0 &&
      matrix[i][6] == 0 &&
      matrix[i][7] == 0 &&
      matrix[i][8] == 0
    ) {
      count += 2;
    } else if (
      (matrix[i][1] == 0 &&
        matrix[i][2] == 0 &&
        matrix[i][3] == 0 &&
        matrix[i][4] == 0) ||
      (matrix[i][5] == 0 &&
        matrix[i][6] == 0 &&
        matrix[i][7] == 0 &&
        matrix[i][8] == 0)
    ) {
      count += 1;
    } else if (
      matrix[i][3] == 0 &&
      matrix[i][4] == 0 &&
      matrix[i][5] == 0 &&
      matrix[i][6] == 0
    ) {
      count += 1;
    }
  }
  return count;
};
*/