# Trimming to a Subsequence

## Description

Two strings `s` and `t` are given. You may delete any characters you like
from `t` — possibly all of them, possibly none.

Deleting nothing costs nothing. Otherwise, if `left` is the smallest and
`right` the largest position among the deleted characters, the deletion
costs `right - left + 1`, the span from the outermost deletions.

Pick deletions so that what survives of `t` is a subsequence of `s`, and
return the smallest cost any such choice can achieve.

A subsequence of a string is what remains after striking out any number
of characters (perhaps none) while leaving the order of the survivors
untouched. For instance, `"ace"` is a subsequence of `"abcde"`, but
`"aec"` is not.

### Example 1

```text
Input: s = "abcde", t = "bdf"
Output: 1
Explanation: Delete the trailing 'f' at index 2 of t. The survivor "bd"
is a subsequence of "abcde", and the span runs 2 - 2 + 1 = 1. No choice
does better.
```

### Example 2

```text
Input: s = "banana", t = "ana"
Output: 0
Explanation: Nothing needs deleting — "ana" is already a subsequence of
"banana", so the cost is 0.
```

### Example 3

```text
Input: s = "aaa", t = "bcd"
Output: 3
Explanation: No character of t ever appears in s, so everything must go:
indices 0 through 2 deleted, costing 2 - 0 + 1 = 3.
```

### Constraints

- `1 <= s.length, t.length <= 10⁵`
- `s` and `t` consist of only lowercase English letters.

## Hints

### Hint 1

A cost counts only the outermost deleted positions, so any selection of
deletions can be widened into one contiguous block without raising the
cost.

### Hint 2

Greedily anchor both flanks: for each prefix length `i` of `t`, record
the earliest spot in `s` where a match of that prefix can finish; for
each suffix of `t`, record the latest spot where a backward match can
start.

### Hint 3

Deleting the block `[i, j)` works exactly when the prefix's earliest
finish lands before the suffix's latest start — and as `i` grows, the
cheapest workable `j` only moves forward, so one sweep prices every
block.
