function getModifiedArray(length: number, updates: number[][]): number[] {
    const diff: number[] = new Array(length + 1).fill(0);
    for (const [start, end, inc] of updates) {
        diff[start] += inc;
        diff[end + 1] -= inc;
    }
    const arr: number[] = new Array(length);
    let cur = 0;
    for (let i = 0; i < length; i++) {
        cur += diff[i];
        arr[i] = cur;
    }
    return arr;
}
