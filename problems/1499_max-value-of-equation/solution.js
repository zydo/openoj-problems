/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function (points, k) {
    const n = points.length;
    const dq = new Array(n).fill(0);
    let head = 0;
    let tail = 0;
    let best = -Infinity;
    for (let j = 0; j < n; j++) {
        const xj = points[j][0];
        const yj = points[j][1];
        while (head < tail && xj - points[dq[head]][0] > k) {
            head++;
        }
        if (head < tail) {
            const [xi, yi] = points[dq[head]];
            const value = yj + yi + xj - xi;
            if (value > best) {
                best = value;
            }
        }
        while (
            head < tail &&
            points[dq[tail - 1]][1] - points[dq[tail - 1]][0] <= yj - xj
        ) {
            tail--;
        }
        dq[tail++] = j;
    }
    return best;
};
