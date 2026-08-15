/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    const squarefreePart = (x) => {
        let result = 1;
        let d = 2;
        while (d * d <= x) {
            if (x % d === 0) {
                let count = 0;
                while (x % d === 0) {
                    x = Math.floor(x / d);
                    count++;
                }
                if (count % 2 === 1) result *= d;
            }
            d++;
        }
        if (x > 1) result *= x;
        return result;
    };

    const groups = new Map();
    for (let i = 1; i <= nums.length; i++) {
        const key = squarefreePart(i);
        groups.set(key, (groups.get(key) || 0) + nums[i - 1]);
    }
    let best = -Infinity;
    for (const v of groups.values()) {
        if (v > best) best = v;
    }
    return best;
};
