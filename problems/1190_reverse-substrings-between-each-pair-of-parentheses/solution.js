/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [[]];
    for (const ch of s) {
        if (ch === "(") {
            stack.push([]);
        } else if (ch === ")") {
            const top = stack.pop();
            stack[stack.length - 1].push(...top.reverse());
        } else {
            stack[stack.length - 1].push(ch);
        }
    }
    return stack[0].join("");
};
