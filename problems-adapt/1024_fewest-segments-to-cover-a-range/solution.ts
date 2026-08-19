function fewestSegments(segments: number[][], span: number): number {
    // Jump-game greedy over segments sorted by start.
    const ordered = [...segments].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let count = 0;
    let covered = 0;
    let farthest = 0;
    let i = 0;
    const n = ordered.length;
    while (covered < span) {
        // Cursor i never resets: every segment starting at or before `covered`
        // is examined once, tracking the farthest reach it enables.
        while (i < n && ordered[i][0] <= covered) {
            if (ordered[i][1] > farthest) {
                farthest = ordered[i][1];
            }
            i++;
        }
        // No usable segment reaches past the current coverage: an unbridgeable gap.
        if (farthest === covered) {
            return -1;
        }
        // Take one segment — the farthest-reaching — and jump the frontier.
        covered = farthest;
        count++;
    }
    return count;
}
