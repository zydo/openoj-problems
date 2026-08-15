function threeSum(nums: number[]): number[][] {
    const arr = [...nums].sort((a, b) => a - b);
    const n = arr.length;
    const result: number[][] = [];
    for (let i = 0; i + 2 < n; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        if (arr[i] * 3 > 0) break;
        let left = i + 1,
            right = n - 1;
        while (left < right) {
            const total = arr[i] + arr[left] + arr[right];
            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
                while (left < right && arr[left] === arr[left - 1]) left++;
                while (left < right && arr[right] === arr[right + 1]) right--;
            }
        }
    }
    return result;
}
