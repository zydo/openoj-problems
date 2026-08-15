/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
    const children = new Array(k).fill(0);
    let best = Infinity;

    function backtrack(i, curMax) {
        if (curMax >= best) return;
        if (i === cookies.length) {
            best = curMax;
            return;
        }
        const tried = new Set();
        for (let j = 0; j < k; j++) {
            if (tried.has(children[j])) continue;
            tried.add(children[j]);
            children[j] += cookies[i];
            backtrack(i + 1, Math.max(curMax, children[j]));
            children[j] -= cookies[i];
        }
    }

    backtrack(0, 0);
    return best;
};
