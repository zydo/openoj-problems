function visibleMountains(peaks: number[][]): number {
    // (u, v) = (x - y, x + y): mountain b hides peak a iff
    // u_b <= u_a and v_b >= v_a. Sort by u ascending, v descending,
    // then a peak is visible iff its v beats every earlier one strictly.
    // Coordinates are <= 1e5, so u and v fit in a JS number exactly.
    const points = peaks.map(([x, y]) => [x - y, -(x + y)]);
    points.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    let count = 0;
    let best: number | null = null;
    let i = 0;
    while (i < points.length) {
        let j = i + 1;
        while (
            j < points.length &&
            points[j][0] === points[i][0] &&
            points[j][1] === points[i][1]
        ) {
            j++;
        }
        if (j - i === 1 && (best === null || -points[i][1] > best)) {
            count++;
        }
        if (best === null || -points[i][1] > best) {
            best = -points[i][1];
        }
        i = j;
    }
    return count;
}
