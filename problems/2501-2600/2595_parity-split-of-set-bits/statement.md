# Parity Split of Set Bits

## Description

You are given a positive integer `n`. Write down its binary
representation and number the bit positions starting from zero at the
least significant end.

Count how many of the set (1) bits sit at even positions, and how many
sit at odd positions, then return the pair `[even, odd]`.

### Example 1

```text
Input: n = 22
Output: [2,1]
Explanation: 22 reads 10110 in binary. Its 1 bits land on positions 1,
2, and 4; positions 2 and 4 are even while position 1 is odd.
```

### Example 2

```text
Input: n = 1
Output: [1,0]
Explanation: 1 reads 1 in binary. Its single set bit sits at position
0, which is even.
```

### Example 3

```text
Input: n = 1000
Output: [2,4]
Explanation: 1000 reads 1111101000 in binary. Set bits occupy positions
3, 5, 6, 7, 8, and 9 — two of them even, four odd.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

Keep two counters and walk the binary digits from the right; the step
counter doubles as the position, and its parity says which counter to
bump.

### Hint 2

Strip one bit per step: while the value is positive, take its remainder
mod 2, count it into the matching bucket, then halve the value.
