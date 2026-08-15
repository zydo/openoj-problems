function rob(nums: number[]): number {
    let prev = 0,
        cur = 0;
    for (const x of nums) {
        const next = Math.max(cur, prev + x);
        prev = cur;
        cur = next;
    }
    return cur;
}
