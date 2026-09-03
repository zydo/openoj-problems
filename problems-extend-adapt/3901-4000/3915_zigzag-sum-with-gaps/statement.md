# Zigzag Sum With Gaps

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

Choose a subsequence given by indices `0 <= i1 < i2 < ... < im < n` that
satisfies both rules:

- Consecutive chosen indices stay far apart: `i(t+1) - i(t) >= k` for every
  `1 <= t < m`.
- The chosen values zigzag strictly — reading left to right they rise and
  fall in strict turns, i.e. either

    - `nums[i1] < nums[i2] > nums[i3] < ...`, or
    - `nums[i1] > nums[i2] < nums[i3] > ...`

A single selected value counts as a valid zigzag on its own. The score of a
choice is the total of its selected values.

Return the largest score any valid choice can reach.

### Example 1

```text
Input: nums = [7,3,8,2], k = 2
Output: 15
Explanation:
    Take indices [0, 2], the values [7, 8].

        The gap is 2 - 0 = 2, which meets k = 2.
        The values turn strictly upward, 7 < 8.

    The score is 7 + 8 = 15.
```

### Example 2

```text
Input: nums = [4,6,1,7,3], k = 2
Output: 13
Explanation:
    Take indices [1, 3], the values [6, 7].

        The gap is 3 - 1 = 2, meeting k = 2.
        The values rise strictly, 6 < 7.

    The score is 6 + 7 = 13. Longer-looking chains break the spacing rule:
    for instance 4 and 6 sit at indices 0 and 1, only 1 apart, so they can
    never both be chosen when k = 2.
```

### Example 3

```text
Input: nums = [12], k = 1
Output: 12
Explanation: The only choice is the lone value 12, and a one-element
subsequence is always a valid zigzag, so the score is 12.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= n`

## Hints

### Hint 1

A dynamic program over the indices, tracking which way the zigzag last
turned, is enough.

### Hint 2

Keep `dp[i][0/1]` — the best score of a choice ending exactly at `i`, where
the flag says whether the last step rose or fell; a lone element seeds both
states with `nums[i]`.

### Hint 3

Compress the values and keep the eligible earlier states in two
range-maximum trees so each transition asks, in logarithmic time, for the
best prior score whose value is strictly smaller (or strictly larger).
