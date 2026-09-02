# Widest Span Between Primes

## Description

Handed an integer array `nums`, find how far apart the outermost prime
entries sit: report the largest `|i - j|` over every pair of indices
`i` and `j` (possibly equal) whose values `nums[i]` and `nums[j]` are
both prime.

### Example 1

```text
Input: nums = [8,4,7,6,11,15,2,10]
Output: 4
Explanation: The primes live at indices 2, 4, and 6 (values 7, 11, and
2), so the widest span is |6 - 2| = 4.
```

### Example 2

```text
Input: nums = [91,89,87]
Output: 0
Explanation: Only 89 is prime here — 91 factors as 7 x 13 and 87 as
3 x 29 — and with a single prime the span is |2 - 2| = 0.
```

### Example 3

```text
Input: nums = [2,4,6,8,10,97]
Output: 5
Explanation: The primes sit at the two ends, indices 0 and 5, giving
|5 - 0| = 5.
```

### Constraints

- `1 <= nums.length <= 3 * 10⁵`
- `1 <= nums[i] <= 100`
- At least one entry of `nums` is guaranteed to be prime.

## Hints

### Hint 1

Identify which entries of `nums` are prime.

### Hint 2

The answer is simply the distance from the earliest prime-bearing index
to the latest one.
