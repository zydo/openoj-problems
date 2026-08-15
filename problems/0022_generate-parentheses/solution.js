/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const current = [];
    const backtrack = (openCount, closeCount) => {
        if (current.length === 2 * n) {
            result.push(current.join(""));
            return;
        }
        if (openCount < n) {
            current.push("(");
            backtrack(openCount + 1, closeCount);
            current.pop();
        }
        if (closeCount < openCount) {
            current.push(")");
            backtrack(openCount, closeCount + 1);
            current.pop();
        }
    };
    backtrack(0, 0);
    return result;
};
