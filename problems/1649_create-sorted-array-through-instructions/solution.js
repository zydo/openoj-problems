/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function (instructions) {
    const MOD = 1000000007;
    let m = 0;
    for (const x of instructions) {
        if (x > m) {
            m = x;
        }
    }
    const tree = new Array(m + 1).fill(0);

    const update = (i) => {
        while (i <= m) {
            tree[i] += 1;
            i += i & -i;
        }
    };

    const query = (i) => {
        let s = 0;
        while (i > 0) {
            s += tree[i];
            i -= i & -i;
        }
        return s;
    };

    let total = 0;
    let count = 0;
    for (const x of instructions) {
        const less = query(x - 1);
        const greater = count - query(x);
        total = (total + Math.min(less, greater)) % MOD;
        update(x);
        count += 1;
    }
    return total;
};
