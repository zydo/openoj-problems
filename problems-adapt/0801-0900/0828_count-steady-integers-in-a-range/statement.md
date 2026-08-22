# Count Steady Integers in a Range

## Description

Call an integer *steady* when each pair of neighboring digits in its decimal
writing differs by at most `k` — with `k = 2`, the number `242` is steady
(2 next to 4, 4 next to 2) while `249` is not (4 next to 9). The difference
between two digit values `x` and `y` means `abs(x - y)`.

Given `l`, `r`, and `k`, count the steady integers from `l` through `r`,
both ends included.

### Example 1

```text
Input: l = 20, r = 25, k = 2
Output: 5
Explanation:
The steady integers are 20, 21, 22, 23, and 24 — the tens digit is 2
throughout, and each ones digit sits within 2 of it (0, 1, 2, 3, 4). Only 25
fails, since 5 lies 3 away from 2.
```

### Example 2

```text
Input: l = 232, r = 235, k = 1
Output: 3
Explanation:
232, 233, and 234 qualify: every neighboring pair among their digits differs
by 1 or less. In 235 the final step from 3 to 5 is a difference of 2, one too
many.
```

### Example 3

```text
Input: l = 9995, r = 10005, k = 2
Output: 6
Explanation:
The steady integers are 9997, 9998, 9999, 10000, 10001, and 10002. For 9995
and 9996 the closing step 9 → 5 and 9 → 6 overshoots k; from 10003 on, the
step 0 → 3 does. Growing from four digits to five is no obstacle — the 9s
and the 1 never sit adjacent.
```

### Constraints

- `10 <= l <= r <= 10^15`
- `0 <= k <= 9`

## Hints

### Hint 1

Turn the interval into two threshold questions: how many steady integers are
at most `r`, and how many are at most `l - 1`. The answer is the difference.

### Hint 2

Answer each threshold question by walking the decimal digits of the bound
from most significant to least.

### Hint 3

Remember the digit just placed; the next one is legal only within `k` of it.
Leading zeros deserve care — they are not genuinely part of the number, so
they impose no constraint and shouldn't wake the check early.
