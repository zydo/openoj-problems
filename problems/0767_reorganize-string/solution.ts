function reorganizeString(s: string): string {
    const n = s.length;
    const counts = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    const letters: [number, number][] = [];
    for (let c = 0; c < 26; c++) {
        if (counts[c] > 0) {
            letters.push([c, counts[c]]);
        }
    }
    letters.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    if (letters[0][1] > Math.floor((n + 1) / 2)) {
        return "";
    }
    const res: string[] = new Array(n);
    let idx = 0;
    for (const [c, cnt] of letters) {
        const ch = String.fromCharCode(97 + c);
        for (let k = 0; k < cnt; k++) {
            if (idx >= n) {
                idx = 1;
            }
            res[idx] = ch;
            idx += 2;
        }
    }
    return res.join("");
}
