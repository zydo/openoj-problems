# Fewest Flips To Bit-Reverse

## Description

You are given a positive integer `n`, and `s` is its binary representation
with no leading zeros.

Read `s` backwards and you get another string of the same length, its
reverse. In one move you may pick any single bit of `s` and flip it — a `0`
becomes `1`, or a `1` becomes `0`.

What is the fewest number of moves after which `s` is identical to the
reverse of the string it started as?

### Example 1

```text
Input: n = 6
Output: 2
Explanation: The binary form of 6 is "110", and its reverse is "011". The
first and last bits are each on the wrong side, so flipping those two bits
turns "110" into "011" — and two moves cannot be beaten.
```

### Example 2

```text
Input: n = 21
Output: 0
Explanation: The binary form of 21 is "10101", which reads the same in
both directions. Nothing needs to change.
```

### Example 3

```text
Input: n = 13
Output: 2
Explanation: The binary form of 13 is "1101", whose reverse is "1011".
Only the two middle bits disagree with where they must end up, so two
flips suffice.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

The destination string is settled up front — it is today's `s` read
backwards — so each position independently needs either zero or one flips,
and the answer is just how many positions disagree.

### Hint 2

The disagreements come in mirrored pairs: if position `i` must swap its
bit to match the far end, the far end must swap its bit to match position
`i`. Scan inward from both ends and score each pair two flips when its two
bits differ.
