function maxFrequency(nums: number[], k: number): number {
    const arr = [...nums].sort((a, b) => a - b);
    let best = 1;
    let left = 0;
    let windowSum = 0;
    for (let right = 0; right < arr.length; right++) {
        const value = arr[right];
        windowSum += value;
        while ((right - left + 1) * value - windowSum > k) {
            windowSum -= arr[left];
            left += 1;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
}
