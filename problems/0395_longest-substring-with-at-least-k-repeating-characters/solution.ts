function longestSubstring(s: string, k: number): number {
    const longest = (lo: number, hi: number): number => {
        if (lo >= hi) return 0;
        const counts = new Map<string, number>();
        for (let i = lo; i < hi; i++) {
            counts.set(s[i], (counts.get(s[i]) || 0) + 1);
        }
        const isRare = (ch: string): boolean => (counts.get(ch) as number) < k;
        let best = 0;
        let start = lo;
        let allFrequent = true;
        for (let i = lo; i < hi; i++) {
            if (isRare(s[i])) {
                allFrequent = false;
                best = Math.max(best, longest(start, i));
                start = i + 1;
            }
        }
        if (allFrequent) return hi - lo;
        best = Math.max(best, longest(start, hi));
        return best;
    };
    return longest(0, s.length);
}
