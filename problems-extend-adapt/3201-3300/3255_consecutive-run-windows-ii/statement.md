# Consecutive Run Windows II

## Description

You are given an integer array `nums` of length `n` and a positive
integer `k`.

Score an array as follows: it scores its greatest element when its
elements form a strictly ascending run of consecutive integers — each one
exactly one more than the previous — and it scores `-1` otherwise.

Apply that scoring to every window of `k` consecutive elements of `nums`
and return the outcomes in an array `results` of length `n - k + 1`,
where `results[i]` is the score of the window starting at index `i`.

### Example 1

```text
Input: nums = [7,8,9,4,5,6,13], k = 3
Output: [9,-1,-1,6,-1]
Explanation: The windows [7,8,9] and [4,5,6] climb by one each step, so
they score their last elements. [8,9,4] and [9,4,5] contain drops, and
[5,6,13] skips a value, so those three score -1.
```

### Example 2

```text
Input: nums = [10,10,10], k = 1
Output: [10,10,10]
Explanation: A one-element window is trivially a consecutive run, so
each element scores itself.
```

### Example 3

```text
Input: nums = [4,5,6,7], k = 4
Output: [7]
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`
- `1 <= k <= n`

## Hints

### Hint 1

At these bounds a per-window rescan is too slow; the local structure of a
run has to do the work instead.

### Hint 2

A window is a consecutive run exactly when every adjacent pair inside it
steps up by one, so keep a running count of consecutive +1 steps ending
at each index — extend it when `nums[i] == nums[i - 1] + 1` and reset it
otherwise.

### Hint 3

The window ending at index `i` scores `nums[i]` precisely when the count
still stands at least `k - 1` there, making every answer a constant-time
decision during a single pass.
