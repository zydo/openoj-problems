function minGroups(intervals: number[][]): number {
    const starts = intervals.map((x) => x[0]).sort((a, b) => a - b);
    const ends = intervals.map((x) => x[1]).sort((a, b) => a - b);
    let groups = 0;
    let active = 0;
    let i = 0;
    let j = 0;
    const n = starts.length;
    while (i < n) {
        if (starts[i] <= ends[j]) {
            active += 1;
            if (active > groups) {
                groups = active;
            }
            i += 1;
        } else {
            active -= 1;
            j += 1;
        }
    }
    return groups;
}
