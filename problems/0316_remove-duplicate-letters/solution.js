/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const count = new Array(26).fill(0);
    for (const ch of s) count[ch.charCodeAt(0) - 97]++;
    const stack = [];
    const inStack = new Array(26).fill(false);
    for (const ch of s) {
        const c = ch.charCodeAt(0) - 97;
        count[c]--;
        if (inStack[c]) continue;
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > c &&
            count[stack[stack.length - 1]] > 0
        ) {
            inStack[stack.pop()] = false;
        }
        stack.push(c);
        inStack[c] = true;
    }
    return stack.map((c) => String.fromCharCode(c + 97)).join("");
};
