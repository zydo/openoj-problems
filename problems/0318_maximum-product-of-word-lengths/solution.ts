function maxProduct(words: string[]): number {
    const masks: Array<[number, number]> = words.map((word) => {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask |= 1 << (word.charCodeAt(i) - 97);
        }
        return [mask, word.length] as [number, number];
    });
    let best = 0;
    const n = masks.length;
    for (let i = 0; i < n; i++) {
        const [mi, li] = masks[i];
        for (let j = i + 1; j < n; j++) {
            const [mj, lj] = masks[j];
            if ((mi & mj) === 0 && li * lj > best) {
                best = li * lj;
            }
        }
    }
    return best;
}
