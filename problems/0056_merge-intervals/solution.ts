function merge(intervals: number[][]): number[][] {
    const ordered = [...intervals].sort((a, b) =>
        a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1],
    );
    const merged: number[][] = [];
    for (const [start, end] of ordered) {
        if (merged.length && start <= merged[merged.length - 1][1]) {
            if (end > merged[merged.length - 1][1]) {
                merged[merged.length - 1][1] = end;
            }
        } else {
            merged.push([start, end]);
        }
    }
    return merged;
}
