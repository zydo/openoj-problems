/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function (obstacles) {
    const tails = [];
    const ans = [];
    for (const x of obstacles) {
        let lo = 0,
            hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] <= x) lo = mid + 1;
            else hi = mid;
        }
        if (lo === tails.length) tails.push(x);
        else tails[lo] = x;
        ans.push(lo + 1);
    }
    return ans;
};
