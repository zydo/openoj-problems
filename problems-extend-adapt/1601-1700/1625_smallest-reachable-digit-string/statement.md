# Smallest Reachable Digit String

## Description

You start from a digit string `s` whose length is even, together with two
integers `a` and `b`. From there, two operations are available, and each
may be used any number of times in any order:

- Bump: add `a` to every digit sitting at an odd index of `s`
  (0-indexed), wrapping around to `0` after `9`. For instance, bumping
  `"3456"` with `a = 5` yields `"3951"`.
- Turn: rotate `s` to the right by `b` positions. For instance, turning
  `"3456"` with `b = 1` yields `"6345"`.

Return the smallest string that can be reached from `s` by applying these
two operations, where "smallest" means lexicographic order: of two equal-
length strings, the one whose first differing digit is numerically
smaller is the smaller string.

### Example 1

```text
Input: s = "2760", a = 5, b = 2
Output: "2265"
Explanation: Bumping the odd-index digits once (7 + 5 and 6 + 5, both
wrapping) turns "2760" into "2265". No reachable string is smaller.
```

### Example 2

```text
Input: s = "7284", a = 6, b = 3
Output: "0029"
Explanation: One route that gets there:
Start:  "7284"
Bump:   "7880"
Bump:   "7486"
Bump:   "7082"
Turn:   "0827"
Bump:   "0423"
Bump:   "0029"
Nothing smaller than "0029" can be produced.
```

### Example 3

```text
Input: s = "3141", a = 8, b = 2
Output: "3141"
Explanation: Every string reachable from "3141" is "3141" or larger, so
the starting string is already the answer.
```

### Constraints

- `2 <= s.length <= 100`
- `s.length` is even
- `s` consists only of the digits `0`-`9`
- `1 <= a <= 9`
- `1 <= b <= s.length - 1`

## Hints

### Hint 1

Neither operation can run forever in a new direction: bumping cycles back
to the original digits within 10 applications (everything is mod 10), and
turning by `b` restores the original order within `s.length`
applications. So only finitely many strings are ever reachable.

### Hint 2

Because the reachable set is finite and small, enumerate all of it and
keep the smallest string seen.

### Hint 3

Remember which strings you have already produced so each one is expanded
at most once.
