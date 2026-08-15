function triangleNumber(nums: number[]): number {
    const sorted = [...nums].sort((a, b) => a - b);
    const n = sorted.length;
    let count = 0;
    for (let i = n - 1; i > 1; i--) {
        if (sorted[i] === 0) break;
        let lo = 0,
            hi = i - 1;
        while (lo < hi) {
            if (sorted[lo] + sorted[hi] > sorted[i]) {
                count += hi - lo;
                hi--;
            } else {
                lo++;
            }
        }
    }
    return count;
}
