// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   SortedCase exposes the problem's one judged invocation: .nums is the
//   sorted array under test and .target is the value whose last index
//   rightmostMatch() must report.
class SortedCase {
    nums: number[];
    target: number;
    constructor(values: any[], _queryBudget?: unknown) {
        const [nums, target] = values;
        this.nums = nums;
        this.target = target;
    }
}
