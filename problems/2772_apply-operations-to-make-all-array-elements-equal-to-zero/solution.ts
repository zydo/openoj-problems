function checkArray(nums: number[], k: number): boolean {
    const n = nums.length;
    const diff = new Array<number>(n + 1).fill(0);
    let running = 0;
    for (let i = 0; i < n; i++) {
        running += diff[i];
        const cur = nums[i] - running;
        if (cur < 0) {
            return false;
        }
        if (cur === 0) {
            continue;
        }
        if (i + k > n) {
            return false;
        }
        running += cur;
        diff[i + k] -= cur;
    }
    return true;
}
