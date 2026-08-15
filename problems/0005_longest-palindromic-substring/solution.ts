function longestPalindrome(s: string): string {
    const expand = (left: number, right: number): [number, number] => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    };
    let bestStart = 0,
        bestEnd = 0;
    for (let i = 0; i < s.length; i++) {
        const centers: [number, number][] = [expand(i, i), expand(i, i + 1)];
        for (const [l, r] of centers) {
            if (r - l > bestEnd - bestStart) {
                bestStart = l;
                bestEnd = r;
            }
        }
    }
    return s.slice(bestStart, bestEnd + 1);
}
