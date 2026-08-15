function findRepeatedDnaSequences(s: string): string[] {
    const seen = new Set<string>();
    const repeated = new Set<string>();
    for (let i = 0; i + 10 <= s.length; i++) {
        const seq = s.slice(i, i + 10);
        if (seen.has(seq)) {
            repeated.add(seq);
        } else {
            seen.add(seq);
        }
    }
    return Array.from(repeated).sort();
}
