/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function (m, n, horizontalCut, verticalCut) {
    const hcuts = [...horizontalCut].sort((a, b) => b - a);
    const vcuts = [...verticalCut].sort((a, b) => b - a);
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
};
