/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const stack = [-1];
    let best = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                if (i - stack[stack.length - 1] > best) {
                    best = i - stack[stack.length - 1];
                }
            }
        }
    }
    return best;
};
