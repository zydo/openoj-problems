# Subarrays That Trace A Trend II

## Description

You are given an integer array `nums` of length `n` and an integer array
`pattern` of length `m`, whose entries are each `-1`, `0`, or `1`.

A window `nums[i..i + m]` of `m + 1` consecutive values traces the pattern
when every step inside the window moves the way `pattern` prescribes. For
each index `k` of `pattern`:

- if `pattern[k] == 1`, the step must rise: `nums[i + k + 1] > nums[i + k]`;
- if `pattern[k] == 0`, the step must stay level: `nums[i + k + 1] == nums[i + k]`;
- if `pattern[k] == -1`, the step must fall: `nums[i + k + 1] < nums[i + k]`.

Count the windows of `nums` that trace the pattern.

### Example 1

```text
Input: nums = [2,2,3,3,4], pattern = [0,1,0]
Output: 1
Explanation: The steps between neighbours are level, up, level, up. The
only place where level-up-level occurs in a row is the window [2,3,3,4],
so 1 window traces the pattern.
```

### Example 2

```text
Input: nums = [5,4,3,2], pattern = [-1,-1]
Output: 2
Explanation: The pattern calls for two falls in a row. Every window of
three values here strictly descends — [5,4,3] and [4,3,2] — so the answer
is 2.
```

### Example 3

```text
Input: nums = [7,7,7,7], pattern = [0,0]
Output: 2
Explanation: All steps are level, so both length-3 windows — [7,7,7]
starting at index 0 and the one starting at index 1 — trace the pattern.
Overlapping windows count separately.
```

### Constraints

- `2 <= n == nums.length <= 10⁶`
- `1 <= nums[i] <= 10⁹`
- `1 <= m == pattern.length < n`
- `-1 <= pattern[i] <= 1`

## Hints

### Hint 1

Only the relation between neighbours matters, never the values themselves.
Compress `nums` into its sequence of step relations — rise, level, or fall —
one entry per neighbouring pair.

### Hint 2

With that compression done, a window traces the pattern exactly when the
pattern appears as a contiguous block of the relation sequence, so the task
becomes counting occurrences of one short sequence inside a long one.

### Hint 3

Naive checking is too slow at this size. A linear-time string matcher such
as Knuth-Morris-Pratt (via its failure function) or the Z-function counts
all occurrences in one pass, overlaps included.
