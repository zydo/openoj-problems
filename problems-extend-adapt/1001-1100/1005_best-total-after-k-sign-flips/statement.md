# Best Total After k Sign Flips

## Description

You are given an integer array `nums` and an integer `k`. One move picks
any index `i` and negates that element, replacing `nums[i]` with
`-nums[i]`. You must make exactly `k` moves, and the same index may be
picked as often as you like.

Return the greatest array sum that any sequence of `k` moves can reach.

### Example 1

```text
Input: nums = [7,-6,3], k = 2
Output: 10
Explanation: Negate the -6, making the array [7,6,3]; the remaining move
is best spent on the 3, leaving [7,6,-3] with sum 7 + 6 - 3 = 10.
```

### Example 2

```text
Input: nums = [-4,-2,9], k = 4
Output: 15
Explanation: Negate both negative values to reach [4,2,9], then spend
the last two moves flipping the same element twice, which restores it —
the total stays 4 + 2 + 9 = 15.
```

### Example 3

```text
Input: nums = [1,3,5], k = 7
Output: 7
Explanation: Seven moves on three positive values: six of them cancel in
pairs, but one must stick somewhere, and flipping the 1 costs least —
the best array is [-1,3,5] with sum 7.
```

### Example 4

```text
Input: nums = [0,-3,-8], k = 5
Output: 11
Explanation: Negate -3 and -8 to reach [0,3,8]; the three moves still
owed are all absorbed by the 0, which never changes sign, so the sum is
0 + 3 + 8 = 11.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-100 <= nums[i] <= 100`
- `1 <= k <= 10^4`
