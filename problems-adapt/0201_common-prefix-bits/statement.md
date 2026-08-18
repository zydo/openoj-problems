# Common Prefix Bits

## Description

You are given two integers `left` and `right` with `left <= right`. Compute
the bitwise AND of every integer from `left` through `right`, inclusive, and
return it.

### Example 1

```text
Input: left = 18, right = 21
Output: 16
Explanation: 18, 19, 20, 21 are 10010, 10011, 10100, 10101 in binary. Only
the 16s bit is set in all four, so the AND keeps just that bit.
```

### Example 2

```text
Input: left = 6, right = 8
Output: 0
Explanation: 8 in binary is 1000 — it owns no bit that 6 and 7 own, and
every lower bit turns over somewhere in 6, 7, 8. Nothing survives.
```

### Example 3

```text
Input: left = 13, right = 13
Output: 13
Explanation: A range of one number ANDs to that number.
```

### Constraints

- `0 <= left <= right <= 2³¹ - 1`

## Hints

### Hint 1

A bit survives only if every number in the range has it set. Look for a bit
that is bound to flip somewhere between `left` and `right` — what happens to
it in the AND?

### Hint 2

Counting upward from `left` to `right`, every bit position below the leading
bits the two endpoints share gets flipped at some point on the way. So the
survivors are exactly the bits of the common binary prefix of `left` and
`right`.

### Hint 3

Two ways to isolate that prefix: shift both endpoints right until they agree
and shift back, or keep clearing the lowest set bit of `right` while it is
still above `left`.
