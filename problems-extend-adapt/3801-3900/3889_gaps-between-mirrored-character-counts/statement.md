# Gaps Between Mirrored Character Counts

## Description

A string `s` is made of lowercase English letters and digits only. Give its
character pool a mirror order: letters line up as `a` through `z`, so the
letter opposite `a` is `z`, the letter opposite `b` is `y`, and so on until
`m` and `n` face each other; digits mirror inside `'0'` through `'9'`, so
`0` opposes `9`, `1` opposes `8`, and `4` opposes `5`.

For each distinct letter or digit `c` that appears in `s`, let `m` be the
character mirrored with it and let `count(x)` be how many times `x` occurs
in `s`. Add the gap `|count(c) - count(m)|` to a total, treating the pair
`(c, m)` and its reversal `(m, c)` as one and the same pair, so every
mirrored pair is weighed exactly once. Return that total.

### Example 1

```text
Input: s = "hello99"
Output: 5
Explanation: The letter pairs contribute |1 - 0| for h/s, |1 - 0| for
e/v, and |2 - 1| for l/o; the digit pair 9/0 contributes |2 - 0| = 2.
Altogether 1 + 1 + 1 + 2 = 5.
```

### Example 2

```text
Input: s = "racecar33"
Output: 9
Explanation: r/i, a/z, and c/x each split 2 against 0, e/v splits 1
against 0, and the digit pair 3/6 splits 2 against 0, giving
2 + 2 + 2 + 1 + 2 = 9.
```

### Example 3

```text
Input: s = "az09"
Output: 0
Explanation: Both members of the a/z pair occur once and both members of
the 0/9 pair occur once, so every gap is zero.
```

### Constraints

- `1 <= s.length <= 5 * 10⁵`
- `s` consists only of lowercase English letters and digits.

## Hints

### Hint 1

One pass is enough to count every character — 26 bins for letters and
10 for digits cover the whole pool.

### Hint 2

The 13 letter pairings and 5 digit pairings are fixed in advance, so
walk them directly and add `|count(x) - count(m)|` for each pair that
has at least one occurrence somewhere.
