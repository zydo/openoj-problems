function longestSubsequence(arr: number[], difference: number): number {
    const dp = new Map<number, number>();
    let best = 0;
    for (const x of arr) {
        const len = (dp.get(x - difference) || 0) + 1;
        dp.set(x, len);
        if (len > best) best = len;
    }
    return best;
}
