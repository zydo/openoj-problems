/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const pairs = { ")": "(", "]": "[", "}": "{" };
    const stack = [];
    for (const ch of s) {
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
