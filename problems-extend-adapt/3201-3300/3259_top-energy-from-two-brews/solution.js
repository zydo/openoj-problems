/**
 * @param {number[]} brewA
 * @param {number[]} brewB
 * @return {number}
 */
var maxBrewEnergy = function (brewA, brewB) {
    // A plan that drinks A at hour i either drank A at hour i-1 or
    // drank B at hour i-2 and idled through the cleanse hour i-1, so
    // dpA[i] = max(dpA[i-1], dpB[i-2]) + brewA[i] and
    // symmetrically for B. Four rolling variables carry the current
    // pair and the one-hour-older pair; totals reach 10^10, far below
    // Number's exact 2^53 limit.
    let a = brewA[0] + brewA[1];
    let b = brewB[0] + brewB[1];
    let oldA = brewA[0];
    let oldB = brewB[0];
    for (let i = 2; i < brewA.length; ++i) {
        const nextA = Math.max(a, oldB) + brewA[i];
        const nextB = Math.max(b, oldA) + brewB[i];
        oldA = a;
        oldB = b;
        a = nextA;
        b = nextB;
    }
    return Math.max(a, b);
};
