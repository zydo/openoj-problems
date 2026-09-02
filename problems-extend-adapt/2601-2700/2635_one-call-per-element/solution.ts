class Solution {
    solve(morphCase: MorphCase): number[] {
        // Manual build instead of Array.map: a fresh result array whose
        // entry at i is exactly fn(arr[i], i) — both arguments passed on
        // every call. Unlike filtering, no value can remove itself from
        // the output; even falsy results occupy their own position, so
        // length is always arr.length.
        const result: number[] = [];
        const { arr, fn } = morphCase;
        for (let i = 0; i < arr.length; ++i) {
            result.push(fn(arr[i], i));
        }
        return result;
    }
}
