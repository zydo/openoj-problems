# Divisible Subarray Tally

## Description

Count the contiguous stretches of an integer array whose elements add up to
a multiple of `k`. Given `nums` and `k`, return how many non-empty subarrays
of `nums` have a sum divisible by `k`.

### Example 1

```text
Input: nums = [2,-2,3,1,4], k = 3
Output: 4
Explanation: The qualifying subarrays are [2,-2], [2,-2,3], [3], and
[-2,3,1,4] — each sums to a multiple of 3.
```

### Example 2

```text
Input: nums = [5,-10,15,2], k = 5
Output: 6
Explanation: Six windows qualify: [5], [5,-10], [5,-10,15], [-10],
[-10,15], and [15].
```

### Example 3

```text
Input: nums = [1,2,3], k = 7
Output: 0
Explanation: No contiguous stretch of the array sums to a multiple of 7.
```

### Constraints

- `1 <= nums.length <= 3 * 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `2 <= k <= 10⁴`
