function minimumCost(
    m: number,
    n: number,
    horizontalCut: number[],
    verticalCut: number[],
): number {
    const hcuts: number[] = [...horizontalCut].sort((a, b) => b - a);
    const vcuts: number[] = [...verticalCut].sort((a, b) => b - a);
    let i = 0,
        j = 0;
    let hMade = 0,
        vMade = 0;
    let total = 0;
    while (i < hcuts.length && j < vcuts.length) {
        if (hcuts[i] >= vcuts[j]) {
            total += hcuts[i] * (vMade + 1);
            i++;
            hMade++;
        } else {
            total += vcuts[j] * (hMade + 1);
            j++;
            vMade++;
        }
    }
    while (i < hcuts.length) {
        total += hcuts[i] * (vMade + 1);
        i++;
    }
    while (j < vcuts.length) {
        total += vcuts[j] * (hMade + 1);
        j++;
    }
    return total;
}
