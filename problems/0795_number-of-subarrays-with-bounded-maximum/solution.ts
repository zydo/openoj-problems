function numSubarrayBoundedMax(
    nums: number[],
    left: number,
    right: number,
): number {
    function countBelow(bound: number): number {
        let total = 0;
        let run = 0;
        for (const v of nums) {
            if (v <= bound) {
                run += 1;
                total += run;
            } else {
                run = 0;
            }
        }
        return total;
    }

    return countBelow(right) - countBelow(left - 1);
}
