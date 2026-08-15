/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
    const n = heights.length;
    const answer = new Array(n).fill(0);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        let seen = 0;
        while (stack.length > 0 && stack[stack.length - 1] < heights[i]) {
            stack.pop();
            seen++;
        }
        answer[i] = seen + (stack.length > 0 ? 1 : 0);
        stack.push(heights[i]);
    }
    return answer;
};
