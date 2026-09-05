# Fewest Balanced Pieces

## Description

Cut a string `s` into consecutive pieces, each of them balanced. A
piece is balanced when every letter it contains occurs exactly as often
as every other letter it contains. For the string `baab`, the cut
`("ba", "ab")` and the single piece `("baab")` both qualify, while
`("b", "aab")` fails because `aab` holds two `a`s but only one `b`.

Return the smallest number of pieces any valid cutting of `s` uses.

### Example 1

```text
Input: s = "abbac"
Output: 2
Explanation:
Cut after the fourth letter: `abba` carries two `a`s and two `b`s, and
the lone `c` is balanced on its own.
```

### Example 2

```text
Input: s = "xyxzzq"
Output: 3
Explanation:
The cut `("xyx", "zz", "q")` uses three balanced pieces, and no cutting
manages fewer.
```

### Example 3

```text
Input: s = "kffk"
Output: 1
Explanation:
The whole string is already balanced — two `k`s and two `f`s — so one
piece suffices.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Work prefix by prefix. Let `dp[i]` be the fewest pieces that cover the
first `i` letters; the answer is `dp[n]`.

### Hint 2

For a fixed end, grow the last piece leftwards one letter at a time
while keeping per-letter counts. The piece is balanced exactly when the
number of distinct letters times the largest count equals the piece's
length, so each `dp[i]` is one backwards sweep of `min(dp[j] + 1)`
away.
