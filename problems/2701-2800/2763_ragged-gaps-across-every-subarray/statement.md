# Ragged Gaps Across Every Subarray

## Description

For an integer array `arr` of length `n`, sort a copy of it and walk the
sorted values `s`; every position `i` with `0 <= i < n - 1` where a value
is followed by something at least two larger — `s[i+1] - s[i] > 1` — is a
ragged gap. The number of ragged gaps in `arr` is its raggedness.

Now take a 0-indexed array `nums` and consider every non-empty contiguous
subarray of it. Measure each subarray's raggedness this way and return
the sum of all those measurements.

### Example 1

```text
Input: nums = [1,4,2,3]
Output: 3
Explanation: Three subarrays carry a ragged gap:
- [1, 4]: sorted [1, 4] jumps from 1 to 4 — one gap.
- [4, 2]: sorted [2, 4] jumps from 2 to 4 — one gap.
- [1, 4, 2]: sorted [1, 2, 4] jumps from 2 to 4 — one gap.
Every other subarray is gap-free, so the total is 3.
```

### Example 2

```text
Input: nums = [3,3,1,5,2]
Output: 11
Explanation: Nine subarrays are ragged. For instance [1, 5] contributes
1, while [3, 1, 5] — sorted [1, 3, 5] — jumps twice and contributes 2.
Added up over all nine, the total is 11.
```

### Example 3

```text
Input: nums = [2,2,2]
Output: 0
Explanation: Equal values sit next to each other once sorted, so no
subarray ever develops a ragged gap.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= nums.length`

## Hints

### Hint 1

Anchor the left end of a window and grow it to the right one element at
a time. If the window's raggedness is maintained as it grows, every
subarray gets measured exactly once.

### Hint 2

The only thing that matters about the current window is which distinct
values it holds — a boolean table over the value range records that.

### Hint 3

When a value `v` not yet in the window arrives, only `v - 1` and `v + 1`
count: both present means `v` bridges an existing gap, so the count drops
by one; neither present means `v` stands isolated and opens a new gap, so
the count rises by one; exactly one neighbor leaves the count unchanged.

### Hint 4

Duplicates cost nothing: a value already in the window changes nothing at
all, which is why repeats never show up in the accounting above.
