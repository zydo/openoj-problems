/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function (numPeople) {
    const MOD = 1000000007;
    const m = Math.floor(numPeople / 2);
    const catalan = new Array(m + 1).fill(0);
    catalan[0] = 1;
    for (let i = 1; i <= m; i++) {
        let total = 0;
        for (let j = 0; j < i; j++) {
            total = Number(
                (BigInt(total) +
                    BigInt(catalan[j]) * BigInt(catalan[i - 1 - j])) %
                    BigInt(MOD),
            );
        }
        catalan[i] = total;
    }
    return catalan[m];
};
