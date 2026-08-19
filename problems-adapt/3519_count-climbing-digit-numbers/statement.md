# Count Climbing-Digit Numbers

## Description

You are given two integers `l` and `r`, each written as a decimal string, and
a base `b` from `2` to `10`.

Write each integer in base `b` and read its digits from most significant to
least significant. The number *climbs* when no digit is smaller than the digit
before it.

Return how many integers between `l` and `r`, inclusive, climb in base `b`.
Because the count can be enormous, give it modulo `10^9 + 7`.

### Example 1

```text
Input: l = "30", r = "36", b = 8
Output: 3
Explanation: In base 8 the range runs 36, 37, 40, 41, 42, 43, 44. The
climbers are 36, 37, and 44 — the middle entries all drop from a 4 to a
smaller digit.
```

### Example 2

```text
Input: l = "3", r = "9", b = 2
Output: 2
Explanation: In binary the range reads 11, 100, 101, 110, 111, 1000, 1001.
Only 11 and 111 climb: every other entry has a 1 followed by a 0.
```

### Example 3

```text
Input: l = "1", r = "20", b = 3
Output: 8
Explanation: The climbers are 1, 2, 11, 12, 22, 111, 112, and 122 in base 3 —
that is, the integers 1, 2, 4, 5, 8, 13, 14, and 17.
```

### Constraints

- `1 <= l.length <= r.length <= 100`
- `2 <= b <= 10`
- `l` and `r` are digit strings without leading zeros
- the value of `l` does not exceed the value of `r`

## Hints

### Hint 1

The range is a difference of two prefix counts, so the whole problem is
counting climbers up to a bound — and a bound is best scanned digit by digit
in the target base.

### Hint 2

While filling digits left to right, only two things matter for what may come
next: whether the prefix built so far still matches the bound exactly (which
caps the next digit), and the digit just placed (which the next one must not
fall below).

### Hint 3

Bounds of a hundred decimal digits do not fit a machine integer: subtract one
from the lower bound and do the base conversion on the digit strings
themselves.
