/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const results = [];
    const path = [];

    const backtrack = (start, remaining) => {
        if (remaining === 0) {
            results.push(path.slice());
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const value = candidates[i];
            if (value > remaining) continue;
            path.push(value);
            backtrack(i, remaining - value);
            path.pop();
        }
    };

    backtrack(0, target);
    return results;
};
