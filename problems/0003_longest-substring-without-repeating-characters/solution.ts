function lengthOfLongestSubstring(s: string): number {
    const last = new Map<string, number>();
    let start = 0,
        best = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (last.has(c) && last.get(c)! >= start) {
            start = last.get(c)! + 1;
        }
        last.set(c, i);
        if (i - start + 1 > best) best = i - start + 1;
    }
    return best;
}
