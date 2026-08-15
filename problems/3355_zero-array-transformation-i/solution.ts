function isZeroArray(nums: number[], queries: number[][]): boolean {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);
    for (const [l, r] of queries) {
        diff[l] += 1;
        diff[r + 1] -= 1;
    }
    let coverage = 0;
    for (let i = 0; i < n; i++) {
        coverage += diff[i];
        if (coverage < nums[i]) return false;
    }
    return true;
}
