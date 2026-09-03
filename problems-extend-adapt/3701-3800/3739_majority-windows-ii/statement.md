# Majority Windows II

## Description

You are given an integer array `nums` and an integer `target`.

A window is a non-empty, contiguous slice `nums[l...r]` of the array. Inside
a window of length `m`, `target` is a majority when it shows up strictly
more than `m / 2` times — an even split, where it occupies exactly half the
slots, falls short.

Count how many windows of `nums` have `target` as their majority and return
that count.

### Example 1

```text
Input: nums = [5,3,5,5,2], target = 5
Output: 9
Explanation: The windows where 5 is the majority are nums[0..0] = [5],
nums[2..2] = [5], nums[3..3] = [5], nums[0..2] = [5,3,5], nums[2..3] =
[5,5], nums[2..4] = [5,5,2], nums[1..3] = [3,5,5], nums[0..3] = [5,3,5,5],
and nums[0..4] = [5,3,5,5,2] — nine windows in total.
```

### Example 2

```text
Input: nums = [8,8,8,8], target = 8
Output: 10
Explanation: Every subarray consists purely of 8s, so all 10 of them have
8 as their majority.
```

### Example 3

```text
Input: nums = [3,1,2], target = 9
Output: 0
Explanation: The value 9 is nowhere in nums, so it cannot be a majority of
any window, and the count is zero.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= target <= 10⁹`

## Hints

### Hint 1

Re-encode the array as scores: an element equal to `target` scores +1 and
anything else scores -1. A window then has `target` as its majority
precisely when its scores add up to a positive total.

### Hint 2

Take prefix sums of those scores — `pref[0] = 0` and `pref[k] = pref[k - 1]

- score(nums[k - 1])`for`k = 1..n`. The window `(i, j]`qualifies exactly
when`pref[j] > pref[i]`.

### Hint 3

What remains is counting pairs `i < j` with `pref[i] < pref[j]`.

### Hint 4

Prefix values never leave `[-n, n]`, so they index directly. Sweep `k` from
`0` to `n` while a Fenwick tree (or an ordered map) tracks the values seen:
query how many earlier prefixes are below `pref[k]`, add that to the answer,
then insert `pref[k]`.

### Hint 5

When `target` never occurs in `nums`, every window fails and the answer is
`0`.
