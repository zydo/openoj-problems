/**
 * @param {string[][]} matrix
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const n = heights.length;
    const stack = [];
    let best = 0;
    for (let i = 0; i <= n; i++) {
        const h = i === n ? 0 : heights[i];
        while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
            const height = heights[stack.pop()];
            const left = stack.length > 0 ? stack[stack.length - 1] : -1;
            const area = height * (i - left - 1);
            if (area > best) best = area;
        }
        stack.push(i);
    }
    return best;
};

var maximalRectangle = function (matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    const rows = matrix.length,
        cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let best = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            heights[c] = matrix[r][c] === "1" ? heights[c] + 1 : 0;
        }
        const area = largestRectangleArea(heights);
        if (area > best) best = area;
    }
    return best;
};
