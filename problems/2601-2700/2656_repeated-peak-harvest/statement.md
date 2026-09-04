# Repeated Peak Harvest

## Description

You are given an integer array `nums` and an integer `k`. Repeat the
following move exactly `k` times:

- Pick some element `m` currently in `nums` and remove it.
- Score `m` points.
- Insert a new element worth `m + 1` into the array.

The replacement always sits one higher than the element it succeeds, so
repeatedly harvesting the top of the array lets each later pick score
more. Return the largest total score that `k` moves can earn.

### Example 1

```text
Input: nums = [3,7,2], k = 4
Output: 34
Explanation: Harvest `7` for 7 points and insert `8`, then `8` for 8,
then `9` for 9, then `10` for 10: the total is 7 + 8 + 9 + 10 = 34. No
other picking order can beat it, since anything smaller leaves a larger
value waiting.
```

### Example 2

```text
Input: nums = [10], k = 5
Output: 60
Explanation: The picks are 10, 11, 12, 13, 14, which sum to 60.
```

### Example 3

```text
Input: nums = [4,4], k = 3
Output: 15
Explanation: Both elements start equal, so the sequence is 4, 5, 6 and
the total is 15.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 100`
