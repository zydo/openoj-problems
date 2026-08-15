function longestValidSubstring(word: string, forbidden: string[]): number {
    const banned = new Set<string>(forbidden);
    let maxLen = 0;
    for (const s of banned) {
        if (s.length > maxLen) {
            maxLen = s.length;
        }
    }
    const n = word.length;
    let left = 0;
    let ans = 0;
    for (let right = 0; right < n; right++) {
        const start = Math.max(right - maxLen, left - 1);
        for (let j = right; j > start; j--) {
            if (banned.has(word.substring(j, right + 1))) {
                left = j + 1;
                break;
            }
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}
