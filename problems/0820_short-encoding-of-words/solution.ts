function minimumLengthEncoding(words: string[]): number {
    const keep = new Set<string>(words);
    for (const w of words) {
        for (let k = 1; k < w.length; k++) {
            keep.delete(w.substring(k));
        }
    }
    let total = 0;
    for (const w of keep) {
        total += w.length + 1;
    }
    return total;
}
