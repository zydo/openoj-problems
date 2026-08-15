/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function (segments) {
    const diff = new Map();
    for (const [start, end, color] of segments) {
        diff.set(start, (diff.get(start) || 0) + color);
        diff.set(end, (diff.get(end) || 0) - color);
    }
    const keys = Array.from(diff.keys()).sort((a, b) => a - b);
    const result = [];
    let running = 0;
    for (let i = 0; i < keys.length - 1; i++) {
        running += diff.get(keys[i]);
        if (running > 0) {
            result.push([keys[i], keys[i + 1], running]);
        }
    }
    return result;
};
