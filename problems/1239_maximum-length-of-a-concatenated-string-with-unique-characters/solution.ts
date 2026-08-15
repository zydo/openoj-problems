function maxLength(arr: string[]): number {
    const masks: number[] = [];
    for (const s of arr) {
        let mask = 0;
        let bad = false;
        for (let idx = 0; idx < s.length; idx++) {
            const bit = 1 << (s.charCodeAt(idx) - 97);
            if (mask & bit) {
                bad = true;
                break;
            }
            mask |= bit;
        }
        masks.push(bad ? -1 : mask);
    }

    const n = arr.length;
    let best = 0;

    const dfs = (index: number, used: number): void => {
        let total = 0;
        for (let b = used; b; b &= b - 1) total++;
        if (total > best) best = total;
        for (let j = index; j < n; j++) {
            if (masks[j] !== -1 && (used & masks[j]) === 0) {
                dfs(j + 1, used | masks[j]);
            }
        }
    };

    dfs(0, 0);
    return best;
}
