function countPalindromicSubsequence(s: string): number {
    let count = 0;
    for (let c = 97; c <= 122; c++) {
        const ch = String.fromCharCode(c);
        const first = s.indexOf(ch);
        const last = s.lastIndexOf(ch);
        if (first !== -1 && last - first >= 2) {
            const seen = new Set<string>();
            for (let i = first + 1; i < last; i++) seen.add(s[i]);
            count += seen.size;
        }
    }
    return count;
}
