/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;

    // suffix[i] = tổng số đá từ i đến cuối
    const suffix = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + piles[i];
    }

    // Lưu kết quả của từng state (i, M)
    const memo = new Map();

    function solve(i, M) {
        // Không còn pile
        if (i >= n) {
            return 0;
        }

        // Có thể lấy toàn bộ phần còn lại
        if (2 * M >= n - i) {
            return suffix[i];
        }

        const key = `${i},${M}`;

        // State này đã được tính
        if (memo.has(key)) {
            return memo.get(key);
        }

        let best = 0;

        // Thử tất cả X có thể chọn
        for (let X = 1; X <= 2 * M; X++) {
            const nextM = Math.max(M, X);

            // Đá mà đối thủ có thể lấy
            const opponentScore = solve(i + X, nextM);

            // Đá mà mình cuối cùng có thể lấy
            const currentScore = suffix[i] - opponentScore;

            best = Math.max(best, currentScore);
        }

        memo.set(key, best);

        return best;
    }

    // Alice bắt đầu tại i = 0, M = 1
    return solve(0, 1);
};