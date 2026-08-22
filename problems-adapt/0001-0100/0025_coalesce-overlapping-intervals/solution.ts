function coalesce(intervals: number[][]): number[][] {
    // Copy, then sort by start (end as tiebreaker): any interval
    // overlapping an earlier one must overlap or touch the most recent
    // coalesced interval, so a sweep tracking only the last coalesced
    // interval suffices. Sorting the copy leaves the input untouched.
    const ordered = [...intervals].sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    const coalesced: number[][] = [];
    for (const [start, end] of ordered) {
        // `<=` counts touching intervals as overlapping, as required.
        // The start is already covered, so only the right edge matters.
        if (coalesced.length && start <= coalesced[coalesced.length - 1][1]) {
            // Raise the right edge when larger; an interval fully
            // swallowed by the coalesce leaves it untouched.
            if (end > coalesced[coalesced.length - 1][1]) {
                coalesced[coalesced.length - 1][1] = end;
            }
        } else {
            // No overlap with the last coalesced interval: new group.
            coalesced.push([start, end]);
        }
    }
    return coalesced;
}
