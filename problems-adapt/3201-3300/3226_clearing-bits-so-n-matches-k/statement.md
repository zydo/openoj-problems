# Clearing Bits So N Matches K

## Description

Two positive integers `n` and `k` are given.

The only edit allowed is picking a bit of `n` that currently reads `1`
and flipping it to `0`; bits that read `0` can never be touched.

Return how many such edits turn `n` into exactly `k`. If no sequence of
edits can do it, return `-1`.

### Example 1

```text
Input: n = 17, k = 1
Output: 1
Explanation: In binary, n = (10001)₂ and k = (00001)₂. The two numbers
disagree only in the top bit, so clearing that single 1 finishes the
job.
```

### Example 2

```text
Input: n = 7, k = 2
Output: 2
Explanation: Here n = (111)₂ and k = (010)₂. Clearing the lowest bit
and the highest bit leaves (010)₂, which is k — two edits.
```

### Example 3

```text
Input: n = 8, k = 5
Output: -1
Explanation: k = (101)₂ asks for 1-bits in positions where n = (1000)₂
holds 0, and no edit can ever create a 1, so the two can never meet.
```

### Constraints

- `1 <= n, k <= 10⁶`

## Hints

### Hint 1

Write out the binary forms of `n` and `k` side by side and compare them
position by position.

### Hint 2

Every position holding 1 in `n` but 0 in `k` must be edited; a position
holding 0 in `n` can never supply the 1 that `k` wants.
