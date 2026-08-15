/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    var arr = nums.slice().sort(function (a, b) {
        return a - b;
    });
    var best = 1;
    var left = 0;
    var windowSum = 0;
    for (var right = 0; right < arr.length; right++) {
        var value = arr[right];
        windowSum += value;
        while ((right - left + 1) * value - windowSum > k) {
            windowSum -= arr[left];
            left += 1;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
};
