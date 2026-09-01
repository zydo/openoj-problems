# Fewest Tail Flips

## Description

You are given a binary string `target` of length `n` (positions are
indexed from 0). A second binary string `s` of length `n` starts as all
zeros, and your job is to turn it into `target`.

One operation picks an index `i` with `0 <= i < n` and flips every bit
of `s` from position `i` through the end of the string — that is, the
inclusive range `[i, n - 1]`. A flip turns `'0'` into `'1'` and `'1'`
into `'0'`.

Return the fewest operations that can make `s` equal `target`.

### Example 1

```text
Input: target = "1101"
Output: 3
Explanation: Starting from s = "0000":
Choose index i = 0: "0000" -> "1111"
Choose index i = 2: "1111" -> "1100"
Choose index i = 3: "1100" -> "1101"
Three operations suffice.
```

### Example 2

```text
Input: target = "010"
Output: 2
Explanation: Starting from s = "000":
Choose index i = 1: "000" -> "011"
Choose index i = 2: "011" -> "010"
```

### Example 3

```text
Input: target = "1110000"
Output: 2
Explanation: One flip covering the ones, then a second flip covering
the zeros that trail them.
```

### Constraints

- `n == target.length`
- `1 <= n <= 10⁵`
- `target[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

Think of each position's final bit as the parity of how many operations
started at or before that position.

### Hint 2

If you apply operations at increasing start indices, a new operation is
needed exactly where `target`'s character changes from the one before it
— and the all-zero starting string means a leading run of `'0'`s is
free.
