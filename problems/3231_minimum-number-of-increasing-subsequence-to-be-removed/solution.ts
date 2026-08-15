function minOperations(nums: number[]): number {
    const tails: number[] = [];
    for (const x of nums) {
        const v = -x;
        let lo = 0,
            hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] <= v) lo = mid + 1;
            else hi = mid;
        }
        if (lo === tails.length) tails.push(v);
        else tails[lo] = v;
    }
    return tails.length;
}
