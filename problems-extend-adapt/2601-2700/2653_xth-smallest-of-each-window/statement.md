# Xth Smallest of Each Window

## Description

You are given an integer array `nums` of `n` values together with two
integers `k` and `x`. Slide a window of size `k` across `nums` and
rate every window it forms. (A subarray is a contiguous, non-empty run
of elements inside an array.)

The rating of a window is its `x`-th smallest value when that value is
negative; when the window holds fewer than `x` negative values, the
rating is `0`.

Return an array of `n - k + 1` ratings, listed in the order the
windows appear from the left end of `nums`.

### Example 1

```text
Input: nums = [4,-2,7,-5,-6,1], k = 3, x = 2
Output: [0,-2,-5,-5]
Explanation: There are 4 windows of size 3.
- [4, -2, 7]: the 2nd smallest value is 4, which is not negative, so
  the rating is 0.
- [-2, 7, -5]: the 2nd smallest value is -2.
- [7, -5, -6]: the 2nd smallest value is -5.
- [-5, -6, 1]: the 2nd smallest value is -5.
```

### Example 2

```text
Input: nums = [5,-9,-8,-7,0], k = 2, x = 1
Output: [-9,-9,-8,-7]
Explanation: Each window of size 2 contributes its smallest value: -9
for [5, -9], -9 for [-9, -8], -8 for [-8, -7] and -7 for [-7, 0].
```

### Example 3

```text
Input: nums = [2,3,4], k = 3, x = 1
Output: [0]
Explanation: The only window, [2, 3, 4], contains no negative value,
so its rating is 0.
```

### Constraints

- `1 <= n <= 10⁵`, where `n == nums.length`
- `1 <= k <= n`
- `1 <= x <= k`
- `-50 <= nums[i] <= 50`

## Hints

### Hint 1

Track only the negative values inside the current window — a count per
possible negative value is all the state you need.

### Hint 2

To read a window's rating, sweep those counts from the most negative
value upward until `x` negatives have been tallied.
