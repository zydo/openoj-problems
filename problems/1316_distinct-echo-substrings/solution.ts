function distinctEchoSubstrings(text: string): number {
    const n = text.length;
    const seen = new Set<string>();
    for (let half = 1; half <= Math.floor(n / 2); half++) {
        for (let i = 0; i + 2 * half <= n; i++) {
            if (
                text.slice(i, i + half) === text.slice(i + half, i + 2 * half)
            ) {
                seen.add(text.slice(i, i + 2 * half));
            }
        }
    }
    return seen.size;
}
