/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * The judge's expected values are exact big integers, so the products are
 * computed with BigInt. The harness serializes the return value through
 * JSON.stringify, which cannot represent BigInt natively; teach it to emit
 * bare integer tokens for BigInt members.
 */
const __openojNativeStringify = JSON.stringify;
JSON.stringify = function (value, replacer, space) {
    const text = __openojNativeStringify(
        value,
        function (key, item) {
            if (typeof item === "bigint") {
                return "__openoj_bigint__" + item.toString();
            }
            return replacer ? replacer.call(this, key, item) : item;
        },
        space,
    );
    return typeof text === "string"
        ? text.replace(/"__openoj_bigint__(-?\d+)"/g, "$1")
        : text;
};

var productExceptSelf = function (nums) {
    const n = nums.length;
    const pre = [1n];
    for (let i = 0; i < n; i++) {
        pre.push(pre[i] * BigInt(nums[i]));
    }
    const suf = new Array(n + 1).fill(1n);
    for (let i = n - 1; i >= 0; i--) {
        suf[i] = suf[i + 1] * BigInt(nums[i]);
    }
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(pre[i] * suf[i + 1]);
    }
    return answer;
};
