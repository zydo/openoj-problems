# Remap Twice for the Widest Spread

## Description

You are given an integer `num`, and one editing move to apply:

- Choose a digit `x` (`0 <= x <= 9`) and a digit `y` (`0 <= y <= 9`);
  the two may be equal.
- Every occurrence of `x` in the decimal writing of `num` is rewritten
  as `y` at once.

The move is applied twice, each time starting fresh from the original
`num`, producing two independent results `a` and `b`. Neither result is
allowed to start with a zero, and neither may be the value 0.

Return the largest possible value of `a - b` over all choices of the
two moves.

### Example 1

```text
Input: num = 1234
Output: 8200
Explanation: To make `a` as large as possible, remap 1 -> 9, giving
a = 9234. For `b`, the leading 1 may not fall to 0, so the sharpest
legal change is 2 -> 0, giving b = 1034. The spread is
9234 - 1034 = 8200.
```

### Example 2

```text
Input: num = 9090
Output: 8989
Explanation: Remapping 0 -> 9 lifts every zero to a nine, a = 9999.
Remapping 9 -> 1 drops the leading digit as low as it may go,
b = 1010, and the spread is 9999 - 1010 = 8989.
```

### Example 3

```text
Input: num = 11111
Output: 88888
Explanation: Remapping 1 -> 9 maximizes `a` at 99999. Every rewrite of
the single digit either keeps the number the same or would produce a
leading zero, so the smallest legal `b` is 11111 itself, and the
spread is 88888.
```

### Example 4

```text
Input: num = 100000000
Output: 800000000
Explanation: Remapping 1 -> 9 yields a = 900000000. No remap lowers
`b`: the leading 1 is already as small as a leading digit can be and
the zeros cannot go lower, so b = 100000000 and the spread is
800000000.
```

### Constraints

- `1 <= num <= 10⁸`

## Hints

### Hint 1

The two applications never interact, so handle them apart: the answer
is the largest number any legal remap of `num` can produce, minus the
smallest one.

### Hint 2

There are at most a hundred digit pairs to try. Pushing toward 9 grows
the number; sinking toward it shrinks the number — but a leading digit
may only sink to 1, while a digit further right may sink all the way
to 0.
