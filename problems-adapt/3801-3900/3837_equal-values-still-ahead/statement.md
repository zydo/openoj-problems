# Equal Values Still Ahead

## Description

You are given an integer array `nums` of length `n` and an integer gap
`k`.

For each index `i`, define its look-ahead count as the number of
positions `j` that satisfy both:

- `j > i + k`, and
- `nums[j] == nums[i]`

In other words, index `i` ignores everything within the next `k`
positions and only counts later copies of its own value. Return the
array `ans` of length `n` where `ans[i]` is the look-ahead count of
index `i`.

### Example 1

```text
Input: nums = [4,7,4,9,4], k = 1
Output: [2,0,1,0,0]
Explanation: Index 0 skips position 1 and looks at positions 2..4,
where the value 4 appears at indices 2 and 4, so ans[0] = 2. Index 1
carries the value 7, which never appears after position 2, so
ans[1] = 0. Index 2 skips position 3 and finds one later 4 at index 4,
so ans[2] = 1. Indices 3 and 4 have nothing far enough ahead of them,
so their counts are 0.
```

### Example 2

```text
Input: nums = [5,5,5,5], k = 2
Output: [1,0,0,0]
Explanation: Only positions more than two steps ahead qualify. Index 0
sees exactly one qualifying position (index 3), whose value matches, so
ans[0] = 1; every other index has an empty look-ahead range.
```

### Example 3

```text
Input: nums = [2,3,2,3,2], k = 0
Output: [2,1,1,0,0]
Explanation: With no gap, every later position qualifies. The first 2
sees two later 2s, the first 3 sees one later 3, the middle 2 sees one
later 2, and the second 3 has no later copy left.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `0 <= k <= n - 1`

## Hints

### Hint 1

Only a frequency table for the values still ahead of the current
position is needed; think about how that set of candidates changes as
the current position moves.

### Hint 2

Sweep from the last index toward the first. Stepping the current index
from `i + 1` down to `i` enlarges the candidate range by exactly one
position on its left end, so a single element — `nums[i + k + 1]`, when
it exists — joins the table at each step.

### Hint 3

After that one insertion, the answer for index `i` is just the table's
count for `nums[i]`. The final `k + 1` indices have an empty candidate
range and naturally report zero.
