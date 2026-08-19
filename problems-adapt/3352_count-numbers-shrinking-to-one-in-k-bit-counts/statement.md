# Count Numbers Shrinking to One in K Bit Counts

## Description

The binary string `s` spells out a number `n` (most significant digit
first, no leading zeros), and the integer `k` bounds how many bit counts
you may spend.

One *bit count* replaces a number by the count of `1`s in its binary
form. For instance, `13` is `"1101"` in binary, so one bit count shrinks
it to `3`; `3` is `"11"`, so another shrinks it to `2`; and `2` is
`"10"`, so a third leaves `1`.

A positive integer *shrinks to one within `k` bit counts* when at most
`k` of them, applied one after another, bring it down to `1`.

Return how many positive integers strictly below `n` shrink to one
within `k` bit counts.

Since the answer may be very large, return it modulo `10⁹ + 7`.

### Example 1

```text
Input: s = "1101", k = 1
Output: 4
Explanation: n = 13. A single bit count reaches 1 only from a number
with exactly one set bit: 1, 2, 4, and 8 qualify.
```

### Example 2

```text
Input: s = "1100", k = 2
Output: 9
Explanation: n = 12. Two bit counts reach 1 from numbers with one or two
set bits: 1, 2, 4, 8 and 3, 5, 6, 9, 10.
```

### Example 3

```text
Input: s = "1100", k = 5
Output: 11
Explanation: Same n = 12, but no number below it needs more than three
bit counts to reach 1, so every integer from 1 to 11 qualifies.
```

### Constraints

- `1 <= s.length <= 800`
- `s` starts with `'1'`, and every later character is `'0'` or `'1'`.
- `1 <= k <= 5`

## Hints

### Hint 1

How many bit counts a number needs depends on exactly one statistic of
the number itself. Which one, and can you tabulate it for every value
that statistic takes?

### Hint 2

Numbers below `n` can be grouped by that statistic. Counting how many of
them share a given number of set bits is a walk along the bits of `s`,
choosing which free positions are `1`.

### Hint 3

Keep the prefix equal to `s` until, at some `1` bit, you place `0`
instead — everything below `n` branches off exactly once that way, and
the free suffix supplies the binomial factors.
