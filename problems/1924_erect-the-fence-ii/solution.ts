function outerTrees(trees: number[][]): number[] {
    const n = trees.length;
    const ox = trees[0][0];
    const oy = trees[0][1];
    const xs: number[] = new Array(n);
    const ys: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        xs[i] = trees[i][0] - ox;
        ys[i] = trees[i][1] - oy;
    }
    const eps = 1e-7;

    const from2 = (i: number, j: number): number[] => {
        const cx = (xs[i] + xs[j]) / 2;
        const cy = (ys[i] + ys[j]) / 2;
        const dx = xs[i] - xs[j];
        const dy = ys[i] - ys[j];
        return [cx, cy, (dx * dx + dy * dy) / 4];
    };

    const from3 = (i: number, j: number, k: number): number[] => {
        const ax = xs[i],
            ay = ys[i];
        const bx = xs[j],
            by = ys[j];
        const cx = xs[k],
            cy = ys[k];
        const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
        if (d === 0) {
            const pairs = [from2(i, j), from2(i, k), from2(j, k)];
            let best = pairs[0];
            for (const cand of pairs) {
                if (cand[2] < best[2]) {
                    best = cand;
                }
            }
            return best;
        }
        const aa = ax * ax + ay * ay;
        const bb = bx * bx + by * by;
        const cc = cx * cx + cy * cy;
        const ux = (aa * (by - cy) + bb * (cy - ay) + cc * (ay - by)) / d;
        const uy = (aa * (cx - bx) + bb * (ax - cx) + cc * (bx - ax)) / d;
        const dx = ax - ux;
        const dy = ay - uy;
        return [ux, uy, dx * dx + dy * dy];
    };

    const inside = (circle: number[], i: number): boolean => {
        const dx = xs[i] - circle[0];
        const dy = ys[i] - circle[1];
        return dx * dx + dy * dy <= circle[2] + eps;
    };

    let circle: number[] = [xs[0], ys[0], 0.0];
    for (let i = 1; i < n; i++) {
        if (inside(circle, i)) {
            continue;
        }
        circle = [xs[i], ys[i], 0.0];
        for (let j = 0; j < i; j++) {
            if (inside(circle, j)) {
                continue;
            }
            circle = from2(i, j);
            for (let k = 0; k < j; k++) {
                if (inside(circle, k)) {
                    continue;
                }
                circle = from3(i, j, k);
            }
        }
    }
    return [circle[0] + ox, circle[1] + oy, Math.sqrt(circle[2])];
}
