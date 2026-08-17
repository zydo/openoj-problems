function employeeFreeTime(schedule: number[][][]): number[][] {
    const intervals: number[][][] = schedule;
    const pooled = ([] as number[][]).concat(...intervals);
    pooled.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    const free: number[][] = [];
    let previousEnd: number | null = null;
    for (const [start, end] of pooled) {
        if (previousEnd !== null && start > previousEnd) {
            free.push([previousEnd, start]);
        }
        previousEnd = previousEnd === null ? end : Math.max(previousEnd, end);
    }
    return free;
}
