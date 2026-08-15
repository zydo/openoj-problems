function hasAllCodes(s: string, k: number): boolean {
    const need = 1 << k;
    if (s.length < k) return false;
    const seen = new Set<string>();
    for (let i = 0; i + k <= s.length; i++) {
        seen.add(s.slice(i, i + k));
        if (seen.size === need) return true;
    }
    return seen.size === need;
}
