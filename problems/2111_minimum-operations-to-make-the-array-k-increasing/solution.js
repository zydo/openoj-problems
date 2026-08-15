/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kIncreasing = function (arr, k) {
    const longestNondecreasing = (seq) => {
        const tails = [];
        for (const value of seq) {
            let lo = 0;
            let hi = tails.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (tails[mid] <= value) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            if (lo === tails.length) {
                tails.push(value);
            } else {
                tails[lo] = value;
            }
        }
        return tails.length;
    };

    let operations = 0;
    for (let start = 0; start < k; start++) {
        const sub = [];
        for (let i = start; i < arr.length; i += k) {
            sub.push(arr[i]);
        }
        operations += sub.length - longestNondecreasing(sub);
    }
    return operations;
};
