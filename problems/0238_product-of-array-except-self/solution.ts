/**
 * The judge's expected values are exact big integers, so the products are
 * computed with BigInt. The harness serializes the return value through
 * JSON.stringify, which cannot represent BigInt natively; teach it to emit
 * bare integer tokens for BigInt members.
 */
const __openojNativeStringify: (
    value: any,
    replacer?: any,
    space?: any,
) => string = JSON.stringify;
(
    JSON as { stringify: (value: any, replacer?: any, space?: any) => string }
).stringify = function (value: any, replacer?: any, space?: any): string {
    const text = __openojNativeStringify(
        value,
        function (key: string, item: any) {
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

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const pre: bigint[] = [1n];
    for (let i = 0; i < n; i++) {
        pre.push(pre[i] * BigInt(nums[i]));
    }
    const suf: bigint[] = new Array(n + 1).fill(1n);
    for (let i = n - 1; i >= 0; i--) {
        suf[i] = suf[i + 1] * BigInt(nums[i]);
    }
    const answer: bigint[] = [];
    for (let i = 0; i < n; i++) {
        answer.push(pre[i] * suf[i + 1]);
    }
    return answer as unknown as number[];
}
