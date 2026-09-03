# Which Release Is Newer

## Description

Software releases are often tagged with dotted revision strings such as
`"2.7.3"`. You are handed two such strings, `left` and `right`, and must
decide which one denotes the more recent release.

Each dot-separated segment is a revision whose value is the number it
spells — any leading zeros are ignored when reading it, so `"007"` and
`"7"` carry the same value. Two releases are compared revision by revision
from the left: the first position where the values differ settles the
order. A string that has run out of revisions simply keeps contributing
`0` for every position the longer string still has.

The verdict is returned as a number:

- `-1` when `left` names the older release (`left < right`);
- `1` when `left` names the newer release (`left > right`);
- `0` when the two strings denote the same release.

### Example 1

```text
Input: left = "4.8.15", right = "4.16"
Output: -1
Explanation: The first revisions tie at 4; then 8 meets 16, and 8 is the
smaller number, so the left release is older.
```

### Example 2

```text
Input: left = "2.007.3", right = "2.7.3.0.0"
Output: 0
Explanation: Leading zeros vanish (`"007"` reads as 7) and the two extra
`.0` revisions on the right contribute nothing, so the releases coincide.
```

### Example 3

```text
Input: left = "12", right = "3.9.9"
Output: 1
Explanation: The very first revisions already differ: 12 beats 3.
```

### Constraints

- `1 <= left.length, right.length <= 500`
- Both strings contain only digits and the separator `'.'`.
- Both strings are well-formed revision lists.
- Every revision given fits in a 32-bit integer.

## Hints

### Hint 1

Advance two cursors, one per string, and at each round read the digit run
that starts at each cursor, stopping at the next dot.

### Hint 2

Fold each digit run into its numeric value as you scan it; a run that has
ended contributes a value of zero.
