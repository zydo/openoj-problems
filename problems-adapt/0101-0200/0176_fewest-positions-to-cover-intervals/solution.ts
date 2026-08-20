function minCoveringPositions(intervals: number[][]): number {
    // Position-cover greedy: sort by right endpoint and place a position at the
    // right end of the first uncovered interval — among the positions
    // covering it, the right endpoint reaches every interval that any
    // earlier position could.
    const ordered = [...intervals].sort((a, b) => a[1] - b[1]);
    let chosen = 0;
    // Sentinel below any coordinate (coordinates span signed 32-bit).
    let lastPosition = -Infinity;
    for (const [start, end] of ordered) {
        // Strict >: intervals are closed, so start == lastPosition is already
        // covered; otherwise place a position at the earliest end remaining.
        if (start > lastPosition) {
            chosen++;
            lastPosition = end;
        }
    }
    return chosen;
}
