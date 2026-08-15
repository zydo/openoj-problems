function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;
    let hasCandidate = false;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
            hasCandidate = true;
        } else if (num === candidate) {
            count += 1;
        } else {
            count -= 1;
        }
    }
    return hasCandidate ? candidate : 0;
}
