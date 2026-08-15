/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
    const n = s.length;
    const suffixMin = new Array(n + 1).fill(String.fromCharCode(127));
    for (let i = n - 1; i >= 0; i--) {
        suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1];
    }
    const stack = [];
    const out = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= suffixMin[i]) {
            out.push(stack.pop());
        }
        stack.push(s[i]);
    }
    while (stack.length > 0) {
        out.push(stack.pop());
    }
    return out.join("");
};
