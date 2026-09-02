# A Pair Apart In Place And Value II

## Description

You are given a 0-indexed integer array `nums` of length `n`, together
with two integers `indexGap` and `valueGap`. Find two positions `i` and
`j` inside `[0, n - 1]` that satisfy both of these at once:

- the positions are far enough apart: `abs(i - j) >= indexGap`;
- the values are far enough apart: `abs(nums[i] - nums[j]) >= valueGap`.

Return them as `[i, j]`; any qualifying pair is acceptable. When no pair
exists, return `[-1, -1]`. The two positions may coincide, so with
`indexGap = 0` the pair `[i, i]` is legal (its value difference is `0`).

Compared to version I of this problem, the array can be far longer — an
answer that examines every pair will not fit in the time budget.

### Example 1

```text
Input: nums = [8,3,15,1,12], indexGap = 2, valueGap = 9
Output: [1,4]
Explanation: Positions 1 and 4 are 3 apart, and their values 3 and 12
differ by exactly 9, so both bars are cleared and [1,4] is returned.
```

### Example 2

```text
Input: nums = [5,5,5], indexGap = 0, valueGap = 1
Output: [-1,-1]
Explanation: With no index requirement, every pair of positions is
reachable — yet all values equal 5, so no pair's values ever differ by 1
or more. The answer is [-1,-1].
```

### Example 3

```text
Input: nums = [1000000000, 0], indexGap = 1, valueGap = 1000000000
Output: [0,1]
Explanation: The single possible pair sits exactly 1 apart and its
values differ by exactly 1000000000 — both comparisons pass at their
boundaries, so [0,1] is returned.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `0 <= indexGap <= 10⁵`
- `0 <= valueGap <= 10⁹`

## Hints

### Hint 1

When standing at index `j`, every legal partner lies inside
`[0, j - indexGap]`. The largest achievable `|nums[t] - nums[j]|` over
that prefix is attained at its minimum or its maximum value.

### Hint 2

Sweep `j` left to right and maintain the positions of the prefix
minimum and prefix maximum of the allowed window; testing `nums[j]`
against both extremes settles each `j` in constant time.

### Hint 3

The two extremes can be maintained incrementally as the window's right
edge advances — each new position entering the window either becomes the
new minimum, the new maximum, or neither.
