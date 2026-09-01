# Shortest Balancing Patch

## Description

A string `s` of length `n` is written using only four letters: `'Q'`, `'W'`,
`'E'`, and `'R'`. Call the string even when every one of the four letters
occurs exactly `n / 4` times.

You may pick one contiguous piece of `s`, of any length, and overwrite it
with arbitrary letters of your choosing (the piece keeps its length). The
goal is to make `s` even afterwards. Report the length of the shortest piece
that achieves this; if the string is already even, no overwrite is needed
and the answer is `0`.

### Example 1

```text
Input: s = "ERQWERQW"
Output: 0
Explanation: Each of the four letters already appears twice in this
length-8 string, so nothing has to change.
```

### Example 2

```text
Input: s = "WWRQ"
Output: 1
Explanation: Every letter should appear once, but `'W'` appears twice.
Rewriting a single character — say the second `'W'` — into `'E'` fixes the
counts.
```

### Example 3

```text
Input: s = "QQQE"
Output: 2
Explanation: Two of the three `'Q'`s must go, and overwriting any two
adjacent `'Q'`s, such as the leading `"QQ"`, settles it.
```

### Example 4

```text
Input: s = "RQQR"
Output: 2
Explanation: `'R'` and `'Q'` each appear twice but should appear once.
Rewriting one excess letter of each kind together — for instance the
leading `"RQ"` into `"WE"` — leaves exactly one of every letter, and a
one-character rewrite cannot cover both surpluses.
```

### Constraints

- `n == s.length`
- `4 <= n <= 10⁵`
- `n` is a multiple of 4.
- `s` consists only of `'Q'`, `'W'`, `'E'`, and `'R'`.

## Hints

### Hint 1

Count all four letters first. Any letter that appears at most `n / 4` times
takes care of itself; only the letters in excess of `n / 4` constrain the
piece you overwrite.

### Hint 2

The piece you pick must therefore contain, for every surplus letter, at
least that letter's excess count. Slide a window across the string and keep
the shortest window that satisfies all of those minimums.
