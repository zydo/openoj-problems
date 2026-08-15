function wonderfulSubstrings(word: string): number {
    const count = new Array<number>(1024).fill(0);
    count[0] = 1;
    let mask = 0;
    let total = 0;
    for (let i = 0; i < word.length; i++) {
        mask ^= 1 << (word.charCodeAt(i) - 97);
        total += count[mask];
        for (let b = 0; b < 10; b++) {
            total += count[mask ^ (1 << b)];
        }
        count[mask] += 1;
    }
    return total;
}
