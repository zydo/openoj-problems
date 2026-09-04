# Counting All-Zero Stretches

## Description

A stretch here means a non-empty, contiguous slice of the array — entries
taken in a row, at least one of them. Count how many slices of `nums`
consist purely of zeros: every maximal run of `r` consecutive zeros hides
`r + (r-1) + ... + 1` such slices, and slices taken from different
positions count separately even when they hold the same values.

Return that count for the given `nums`.

### Example 1

```text
Input: nums = [5,0,0,0,7,0,1]
Output: 7
Explanation: The run of three zeros in the middle contributes 6 slices —
three of length 1, two of length 2, one of length 3 — and the lone zero
after the 7 contributes 1, for a total of 7.
```

### Example 2

```text
Input: nums = [0,0,0,0]
Output: 10
Explanation: One run of four zeros: 4 slices of length 1, 3 of length 2,
2 of length 3, and 1 of length 4 — 10 in all.
```

### Example 3

```text
Input: nums = [0,3,-2,0,0,5]
Output: 4
Explanation: The zeros at the ends are separated by nonzero values, so
they count 1 and 3 (a pair of adjacent zeros) respectively — 4 slices in
total.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Attribute every all-zero slice to the position where it ends: the slices
ending on a given cell are exactly as numerous as the consecutive zeros
reaching back through that cell.

### Hint 2

One pass suffices — keep the current run length of trailing zeros, add it
to the answer whenever the value is 0, and clear it otherwise. Watch the
width of the accumulator: the maximum answer exceeds 32 bits.
