function smallestLargestGroupSum(nums: number[], k: number): number {
    const groups: number[] = new Array(k).fill(0);
    let best = Infinity;

    function backtrack(i: number, curMax: number): void {
        // bound pruning: the running max only grows, so this branch can no
        // longer beat the best complete distribution found so far
        if (curMax >= best) return;
        // all items placed: the running max is this leaf's cost
        if (i === nums.length) {
            best = curMax;
            return;
        }
        const tried = new Set<number>();
        for (let j = 0; j < k; j++) {
            // symmetry: groups holding equal totals are interchangeable,
            // so try each distinct total only once
            if (tried.has(groups[j])) continue;
            tried.add(groups[j]);
            groups[j] += nums[i];
            backtrack(i + 1, Math.max(curMax, groups[j]));
            groups[j] -= nums[i];
        }
    }

    backtrack(0, 0);
    return best;
}
