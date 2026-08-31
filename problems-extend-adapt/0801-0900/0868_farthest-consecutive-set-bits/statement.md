# Farthest Consecutive Set Bits

## Description

For a positive integer `n`, examine its binary representation and find the
largest distance between two consecutive set bits (`1`s).

Two set bits are consecutive when no other set bit lies between their bit
positions. Their distance is the difference between those positions. Return
`0` if the representation contains fewer than two set bits.

### Example 1

```text
Input: n = 41
Output: 3
Explanation: 41 is `101001₂`. Consecutive set-bit positions are separated by
3 and 2, so the largest distance is 3.
```

### Example 2

```text
Input: n = 32
Output: 0
Explanation: `100000₂` contains only one set bit.
```

### Constraints

- `1 <= n <= 10⁹`
