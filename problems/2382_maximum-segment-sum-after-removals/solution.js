/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */
var maximumSegmentSum = function (nums, removeQueries) {
    const n = nums.length;
    const parent = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;
    const ssum = new Array(n).fill(0);
    const active = new Array(n).fill(false);

    function find(x) {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    const answer = [0];
    let best = 0;
    for (let qi = removeQueries.length - 1; qi >= 1; qi--) {
        const i = removeQueries[qi];
        active[i] = true;
        ssum[i] = nums[i];
        for (const j of [i - 1, i + 1]) {
            if (j >= 0 && j < n && active[j]) {
                const a = find(i),
                    b = find(j);
                if (a !== b) {
                    parent[a] = b;
                    ssum[b] += ssum[a];
                }
            }
        }
        best = Math.max(best, ssum[find(i)]);
        answer.push(best);
    }
    answer.reverse();
    return answer;
};
