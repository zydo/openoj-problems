function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    const counts = new Map<string, number>();
    let left = 0;
    let best = 0;
    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        counts.set(ch, (counts.get(ch) || 0) + 1);
        while (counts.size > k) {
            const c = s[left];
            const cnt = counts.get(c)! - 1;
            if (cnt === 0) {
                counts.delete(c);
            } else {
                counts.set(c, cnt);
            }
            left++;
        }
        if (right - left + 1 > best) {
            best = right - left + 1;
        }
    }
    return best;
}
