function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) {
        return false;
    }
    const counts = new Map<number, number>();
    for (const v of hand) {
        counts.set(v, (counts.get(v) || 0) + 1);
    }
    const values = Array.from(counts.keys()).sort((a, b) => a - b);
    for (const value of values) {
        const need = counts.get(value)!;
        if (need > 0) {
            for (let nv = value; nv < value + groupSize; nv++) {
                const have = counts.get(nv) || 0;
                if (have < need) {
                    return false;
                }
                counts.set(nv, have - need);
            }
        }
    }
    return true;
}
