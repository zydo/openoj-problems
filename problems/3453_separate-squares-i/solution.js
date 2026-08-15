/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
    let total = 0; // exact integer accumulation (mirrors Python's int sum)
    let hiTop = -Infinity;
    for (const sq of squares) {
        total += sq[2] * sq[2];
        const top = sq[1] + sq[2];
        if (top > hiTop) hiTop = top;
    }
    const target = total / 2.0;
    let lo = 0.0;
    let hi = hiTop; // already an exact double
    for (let it = 0; it < 60; it++) {
        const mid = (lo + hi) / 2.0;
        let below = 0.0;
        for (const sq of squares) {
            const y = sq[1],
                l = sq[2];
            if (mid <= y) continue;
            const top = y + l;
            const m = mid < top ? mid : top; // min(mid, y + l)
            below += (m - y) * l;
        }
        if (below >= target) hi = mid;
        else lo = mid;
    }
    return hi;
};
