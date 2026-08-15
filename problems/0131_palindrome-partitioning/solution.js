/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const n = s.length;
    const isPal = Array.from({ length: n }, () => new Array(n).fill(false));
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i < 2 || isPal[i + 1][j - 1])) {
                isPal[i][j] = true;
            }
        }
    }

    const result = [];
    const current = [];

    function backtrack(start) {
        if (start === n) {
            result.push(current.slice());
            return;
        }
        for (let end = start; end < n; end++) {
            if (isPal[start][end]) {
                current.push(s.substring(start, end + 1));
                backtrack(end + 1);
                current.pop();
            }
        }
    }

    backtrack(0);
    return result;
};
