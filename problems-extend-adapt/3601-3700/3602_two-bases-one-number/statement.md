# Two Bases, One Number

## Description

You are given a positive integer `n`.

Render two powers of `n` in two different numeral systems and glue the
results together: write `n²` in base 16, write `n³` in base 36, and return
the base-16 string immediately followed by the base-36 string.

Base 16 uses the digits `0`–`9` plus the uppercase letters `A`–`F`, which
stand for the values 10 through 15. Base 36 reaches further, using
`0`–`9` plus `A`–`Z`, so one digit can carry any value up to 35. In both
systems digits are written most significant first, with no prefix of any
kind.

### Example 1

```text
Input: n = 7
Output: "319J"
Explanation: n² = 49 reads "31" in base 16 (3 * 16 + 1 = 49), and
n³ = 343 reads "9J" in base 36 (9 * 36 + 19 = 343). Joining the two
renderings gives "31" + "9J" = "319J".
```

### Example 2

```text
Input: n = 100
Output: "2710LFLS"
Explanation: n² = 10000 reads "2710" in base 16, and
n³ = 1000000 reads "LFLS" in base 36. Joining the two renderings gives
"2710" + "LFLS" = "2710LFLS".
```

### Example 3

```text
Input: n = 999
Output: "F3A71GHL8FR"
Explanation: n² = 998001 reads "F3A71" in base 16, and
n³ = 997002999 reads "GHL8FR" in base 36. Joining the two renderings
gives "F3A71" + "GHL8FR" = "F3A71GHL8FR".
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

One helper covers both outputs: a routine that renders an integer in any
base from 2 to 36 by repeatedly dividing and mapping remainders onto the
digits `0`–`9` and then the letters `A`–`Z`.

### Hint 2

Compute `n²` and `n³`, pass each power to that helper with its own base,
and concatenate the two strings.
