function wordSquares(words: string[]): string[][] {
    const n = words[0].length;
    const prefixMap = new Map<string, string[]>();
    for (const w of words) {
        for (let i = 0; i <= n; i++) {
            const p = w.slice(0, i);
            if (!prefixMap.has(p)) prefixMap.set(p, []);
            prefixMap.get(p)!.push(w);
        }
    }

    const results: string[][] = [];
    const square: string[] = [];
    const backtrack = function (): void {
        if (square.length === n) {
            results.push(square.slice());
            return;
        }
        const col = square.length;
        let prefix = "";
        for (let r = 0; r < col; r++) prefix += square[r].charAt(col);
        const candidates = prefixMap.get(prefix);
        if (candidates === undefined) return;
        for (const w of candidates) {
            square.push(w);
            backtrack();
            square.pop();
        }
    };
    backtrack();
    results.sort(function (a, b): number {
        for (let i = 0; i < n; i++) {
            if (a[i] < b[i]) return -1;
            if (a[i] > b[i]) return 1;
        }
        return 0;
    });
    return results;
}
