# Longest Additive Subsequence

## Description

Call a list of numbers **additive** when it has at least three entries and
every entry from the third onwards equals the sum of the two directly before
it. For instance `[4, 6, 10, 16, 26]` is additive, while `[2, 5, 8]` is not.

You are given `nums`, an array of positive integers listed in strictly
increasing order. Pick out entries of `nums`, keeping their relative order,
so that the picked list is additive and as long as possible, and return that
length. When no choice of entries is additive, return `0`.

### Example 1

```text
Input: nums = [3,6,7,10,13,20,23,33]
Output: 5
Explanation: Taking 6, 7, 13, 20, 33 gives 6 + 7 = 13, 7 + 13 = 20 and
13 + 20 = 33. No longer choice works.
```

### Example 2

```text
Input: nums = [2,3,4,5,7,9,11,12]
Output: 4
Explanation: 2, 5, 7, 12 is additive. So is 3, 4, 7, 11, and neither can be
extended to five entries.
```

### Example 3

```text
Input: nums = [2,4,8,16,32]
Output: 0
Explanation: No two entries here sum to a third.
```

### Constraints

- `nums` holds between `3` and `1000` values.
- `1 <= nums[i] < nums[i+1] <= 10^9`, so the values rise strictly and are
  distinct.

## Hints

### Hint 1

An additive list is completely determined by any two consecutive entries in
it: fix the last two and everything before them is forced, since the entry
before values `x` and `y` can only be `y - x`. That makes the _pair_ of final
entries the right thing to reason about, not a single index.

### Hint 2

Let `best[j][i]` be the length of the longest additive pick that ends with
`nums[j]` followed by `nums[i]`, for `j < i`. Looking for the value
`nums[i] - nums[j]` among the entries left of `j` gives `best[j][i] =
best[k][j] + 1` when it sits at index `k`, and a bare pair of length 2
otherwise. A map from value to index makes that lookup constant time, since
the values are distinct.

### Hint 3

Because the array is strictly increasing, the wanted predecessor exists to the
left of `j` exactly when `nums[i] - nums[j] < nums[j]` — no index comparison
is needed. Sweep pairs in increasing `i` so `best[k][j]` is ready before
`best[j][i]` needs it, and remember that a result of `2` means "two entries,
never extended", which the answer must report as `0`.
