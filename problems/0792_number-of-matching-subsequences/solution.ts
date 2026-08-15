function numMatchingSubseq(s: string, words: string[]): number {
    const waiting = new Map<string, [string, number][]>(); // char -> array of [word, nextIndex]
    let count = 0;
    for (const w of words) {
        if (w.length === 0) {
            count++;
        } else {
            let b = waiting.get(w[0]);
            if (!b) {
                b = [];
                waiting.set(w[0], b);
            }
            b.push([w, 1]);
        }
    }
    for (const c of s) {
        const its = waiting.get(c);
        if (!its) continue;
        waiting.set(c, []);
        for (const [w, i] of its) {
            if (i === w.length) {
                count++;
            } else {
                let b = waiting.get(w[i]);
                if (!b) {
                    b = [];
                    waiting.set(w[i], b);
                }
                b.push([w, i + 1]);
            }
        }
    }
    return count;
}
