/**
 * @param {string} s
 * @param {number} k
 * @param {string} letter
 * @param {number} quota
 * @return {string}
 */
var smallestSubsequenceWithLetterQuota = function (s, k, letter, quota) {
    const n = s.length;
    const target = letter;
    // suffix[i] = number of `letter` occurrences in s[i:]
    const suffix = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + (s[i] === target ? 1 : 0);
    }

    const stack = [];
    let used = 0; // number of `letter` currently in the stack
    for (let i = 0; i < n; i++) {
        const ch = s[i];
        while (stack.length > 0) {
            const top = stack[stack.length - 1];
            if (top <= ch) {
                break;
            }
            if (stack.length - 1 + (n - i) < k) {
                break;
            }
            let lettersAfterPop = used - (top === target ? 1 : 0);
            lettersAfterPop += ch === target ? 1 : 0;
            if (lettersAfterPop + suffix[i + 1] < quota) {
                break;
            }
            stack.pop();
            if (top === target) {
                used--;
            }
        }
        stack.push(ch);
        if (ch === target) {
            used++;
        }
    }

    // Trim to exactly length k from the right, never dropping below
    // `quota` target letters.
    let remove = stack.length - k;
    let lettersInStack = used;
    const res = [];
    for (let p = stack.length - 1; p >= 0; p--) {
        const ch = stack[p];
        if (remove === 0) {
            res.push(ch);
        } else if (ch === target) {
            if (lettersInStack - 1 >= quota) {
                lettersInStack--;
                remove--;
            } else {
                res.push(ch);
            }
        } else {
            remove--;
        }
    }
    return res.reverse().join("");
};
