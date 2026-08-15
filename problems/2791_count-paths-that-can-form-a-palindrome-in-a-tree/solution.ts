function countPalindromePaths(parent: number[], s: string): number {
    const n = parent.length;
    const children: number[][] = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[parent[i]].push(i);

    const masks: number[] = new Array(n).fill(0);
    const order: number[] = [0];
    for (let qi = 0; qi < order.length; qi++) {
        const v = order[qi];
        for (const c of children[v]) {
            masks[c] = masks[v] ^ (1 << (s.charCodeAt(c) - 97));
            order.push(c);
        }
    }

    const freq = new Map<number, number>();
    let ans = 0;
    for (const m of masks) {
        ans += freq.get(m) || 0;
        for (let b = 0; b < 26; b++) {
            ans += freq.get(m ^ (1 << b)) || 0;
        }
        freq.set(m, (freq.get(m) || 0) + 1);
    }
    return ans;
}
