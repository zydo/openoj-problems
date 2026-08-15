function intervalIntersection(
    firstList: number[][],
    secondList: number[][],
): number[][] {
    const result: number[][] = [];
    let i = 0;
    let j = 0;
    while (i < firstList.length && j < secondList.length) {
        const lo = Math.max(firstList[i][0], secondList[j][0]);
        const hi = Math.min(firstList[i][1], secondList[j][1]);
        if (lo <= hi) {
            result.push([lo, hi]);
        }
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}
