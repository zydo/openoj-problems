function maxDistance(position: number[], m: number): number {
    const pos = position.slice().sort((a, b) => a - b);

    const feasible = (distance: number): boolean => {
        let count = 1;
        let last = pos[0];
        for (let i = 1; i < pos.length; i++) {
            if (pos[i] - last >= distance) {
                count++;
                last = pos[i];
                if (count >= m) {
                    return true;
                }
            }
        }
        return count >= m;
    };

    let lo = 1;
    let hi = pos[pos.length - 1] - pos[0];
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (feasible(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
}
