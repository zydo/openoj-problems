function distinctDoubledSubstrings(text: string): number {
    const n = text.length;
    // A doubled substring is exactly an even-length substring whose two halves are
    // identical, so each one is characterized by a half length and a
    // start index — enumerate every such (half, i) pair.
    const seen = new Set<string>();
    for (let half = 1; half <= Math.floor(n / 2); half++) {
        // Start positions with room for the full doubled substring.
        for (let i = 0; i + 2 * half <= n; i++) {
            // Direct half comparison: nothing else can pass it, and every
            // doubled substring appears for exactly its own (half, i).
            if (text.slice(i, i + half) === text.slice(i + half, i + 2 * half)) {
                // The set silently discards repeats — equal substrings
                // hash/compare identically — so its size is the answer.
                seen.add(text.slice(i, i + 2 * half));
            }
        }
    }
    return seen.size;
}
