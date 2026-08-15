/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
    const MOD = 1000000007;
    if (rectangles.length === 0) return 0;
    function mulmod(a, b, m) {
        const A = 32768;
        const a1 = Math.floor(a / A);
        const a0 = a % A;
        return (((a1 * b) % m) * A + a0 * b) % m;
    }
    const xsSet = new Set();
    const ysSet = new Set();
    for (const rect of rectangles) {
        xsSet.add(rect[0]);
        xsSet.add(rect[2]);
        ysSet.add(rect[1]);
        ysSet.add(rect[3]);
    }
    const xs = Array.from(xsSet).sort((a, b) => a - b);
    const ys = Array.from(ysSet).sort((a, b) => a - b);
    const xIndex = new Map();
    xs.forEach((x, i) => xIndex.set(x, i));
    const yIndex = new Map();
    ys.forEach((y, i) => yIndex.set(y, i));
    const nx = xs.length - 1;
    const ny = ys.length - 1;
    const grid = [];
    for (let i = 0; i < nx; i++) {
        grid.push(new Array(ny).fill(false));
    }
    for (const [x1, y1, x2, y2] of rectangles) {
        for (let i = xIndex.get(x1); i < xIndex.get(x2); i++) {
            for (let j = yIndex.get(y1); j < yIndex.get(y2); j++) {
                grid[i][j] = true;
            }
        }
    }
    let total = 0;
    for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
            if (grid[i][j]) {
                total =
                    (total +
                        mulmod(xs[i + 1] - xs[i], ys[j + 1] - ys[j], MOD)) %
                    MOD;
            }
        }
    }
    return total;
};
