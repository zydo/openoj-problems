function lengthOfLIS(nums: number[]): number {
    const tails: number[] = [];
    for (const x of nums) {
        let lo = 0,
            hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        if (lo === tails.length) tails.push(x);
        else tails[lo] = x;
    }
    return tails.length;
}
