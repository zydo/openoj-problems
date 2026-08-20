function maxNonAdjacentLoot(nums: number[]): number {
    // Rolling two-variable DP: cur = best through position i-1, prev = best
    // through position i-2; both start at 0 ("nothing taken yet").
    let prev = 0,
        cur = 0;
    for (const x of nums) {
        // Skip this position (keep cur) or take it (prev + x).
        const next = Math.max(cur, prev + x);
        prev = cur;
        cur = next;
    }
    return cur;
}
