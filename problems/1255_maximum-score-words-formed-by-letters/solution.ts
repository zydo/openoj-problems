function maxScoreWords(
    words: string[],
    letters: string[],
    score: number[],
): number {
    const available: number[] = new Array(26).fill(0);
    for (const ch of letters) {
        available[ch.charCodeAt(0) - 97]++;
    }
    const n = words.length;
    const needs: number[][] = [];
    const values: number[] = [];
    for (const w of words) {
        const need: number[] = new Array(26).fill(0);
        let value = 0;
        for (let idx = 0; idx < w.length; idx++) {
            const j = w.charCodeAt(idx) - 97;
            need[j]++;
            value += score[j];
        }
        needs.push(need);
        values.push(value);
    }

    let best = 0;

    const dfs = (i: number, remaining: number[], total: number): void => {
        if (total > best) best = total;
        if (i === n) return;
        dfs(i + 1, remaining, total);
        const need = needs[i];
        let ok = true;
        for (let j = 0; j < 26; j++) {
            if (remaining[j] < need[j]) {
                ok = false;
                break;
            }
        }
        if (ok) {
            const next = remaining.slice();
            for (let j = 0; j < 26; j++) next[j] -= need[j];
            dfs(i + 1, next, total + values[i]);
        }
    };

    dfs(0, available, 0);
    return best;
}
