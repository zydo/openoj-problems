# Elements That Beat Their Distant Neighbors

## Description

You are given an integer array `nums` and an integer `k`. Call an element
`nums[i]` a winner when it is strictly greater than the elements at the two
offset positions `i - k` and `i + k` — checking only the positions that
actually exist. An offset position outside the array imposes no condition.

Return the sum of all the winner elements.

### Example 1

```text
Input: nums = [6,2,9,4,9,1], k = 3
Output: 24
Explanation: nums[0] = 6 beats its neighbor 4 at index 3, and both
nums[2] = 9 and nums[4] = 9 beat their single existing neighbor (index 5
and index 1 respectively). No other element passes, so the sum is
6 + 9 + 9 = 24.
```

### Example 2

```text
Input: nums = [10,20,30,40], k = 2
Output: 70
Explanation: nums[2] = 30 beats nums[0] = 10 (it has no right-hand
neighbor), and nums[3] = 40 beats nums[1] = 20. Their sum is 70; the
first two elements lose to the values two slots ahead.
```

### Example 3

```text
Input: nums = [5,5,5,5,5,5], k = 3
Output: 0
Explanation: Every comparison is a tie, and ties are not strictly
greater, so no element qualifies and the sum is 0.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 1000`
- `1 <= k <= floor(nums.length / 2)`

## Hints

### Hint 1

Each index only ever competes with `i - k` and `i + k`, so one pass with
bounds checks against those (at most) two positions settles everything.
