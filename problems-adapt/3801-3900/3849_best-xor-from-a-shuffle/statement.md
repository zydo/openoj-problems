# Best XOR From A Shuffle

## Description

Two binary strings `s` and `t` are handed to you, and both are `n`
characters long.

You are allowed to shuffle `t` into any arrangement you like, while `s`
stays exactly where it is.

Line the shuffled `t` up against `s`, take the bitwise XOR column by
column, and read the resulting binary string as an integer. Return that
string of length `n` when the shuffle is chosen to make the value as large
as it can be.

### Example 1

```text
Input: s = "011", t = "100"
Output: "111"
Explanation: Every position of s can meet the opposite bit of t, so the
whole result lights up: "011" XOR "100" = "111".
```

### Example 2

```text
Input: s = "1100", t = "0110"
Output: "1111"
Explanation: Rearranging t to "1001" puts an opposite bit under each
position of s, and "1100" XOR "1001" = "1111" is the best value.
```

### Example 3

```text
Input: s = "010", t = "111"
Output: "101"
Explanation: No shuffle of t helps here — t is all ones, so only the
middle zero of s can pair with an opposite-matching one and the rest are
forced to cancel: "010" XOR "111" = "101".
```

### Constraints

- `1 <= n == s.length == t.length <= 2 * 10⁵`
- Every character of `s` and `t` is `'0'` or `'1'`.

## Hints

### Hint 1

Shuffling `t` cannot change how many ones and zeros it holds — only those
two counts matter.

### Hint 2

A result bit is 1 whenever `t` supplies the opposite of `s`'s bit there,
so aim to spend `t`'s ones on `s`'s zero positions and `t`'s zeros on
`s`'s one positions.

### Hint 3

Build the answer from left to right, paying out an opposite bit whenever
the right budget still has one left, so every 1 you can win sits as far
left as possible.
