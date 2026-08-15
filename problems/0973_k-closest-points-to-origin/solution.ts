function kClosest(points: number[][], k: number): number[][] {
    const pts = points.map((p) => [p[0], p[1]]);
    pts.sort((a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]));
    return pts.slice(0, k);
}
