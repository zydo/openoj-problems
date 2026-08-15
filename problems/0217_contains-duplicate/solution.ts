function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (const value of nums) {
        if (seen.has(value)) {
            return true;
        }
        seen.add(value);
    }
    return false;
}
