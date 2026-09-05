# The Most Splits One Rewrite Can Buy

## Description

You are given a string `s` of lowercase English letters and an integer `k`.

Before any cutting starts, you may change at most one character of `s` into
any other lowercase letter — or leave `s` as it is.

Then repeat the following cut until `s` is empty:

- Take the longest prefix of `s` that contains at most `k` distinct letters.
- Remove that prefix and score one piece; whatever remains keeps its
  original order.

Return the largest number of pieces the process can produce, over every
choice of the single allowed change (including not using it).

### Example 1

```text
Input: s = "abcb", k = 2
Output: 2
Explanation: Left alone, the greedy cuts `ab | cb`. No rewrite reaches
three: either the change merges the whole string into one piece (changing
`c` to `a` gives `abab`), or the first cut still lands at position 2 and
the remaining two letters finish as one more piece.
```

### Example 2

```text
Input: s = "abcde", k = 1
Output: 5
Explanation: With `k = 1` the cut fires the moment a second distinct letter
would enter, so the untouched string already falls into `a | b | c | d | e`.
Rewriting one letter merely renames a piece — neighbours still differ — so
five, the string's length, is both attained and unbeatable.
```

### Example 3

```text
Input: s = "bbbaaabb", k = 2
Output: 3
Explanation: Every character is `a` or `b`, so with `k = 2` the untouched
string survives as one piece. Spend the change on the `a` at index 4:
`bbbacabb` then cuts as `bbba | ca | bb` — three pieces.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` is made of lowercase English letters only.
- `1 <= k <= 26`

## Hints

### Hint 1

One changed character can only disturb the piece that contains it, so
re-running the entire split for every candidate rewrite is avoidable.

### Hint 2

A cut depends on nothing but the set of letters accumulated since the
previous cut — exactly what a 26-bit mask represents. Sweep the string once,
advancing masks, instead of re-scanning prefixes.

### Hint 3

Carry two kinds of state through the sweep: the forced no-rewrite lineage,
and, for every possible open-window mask, the best piece count seen when the
rewrite was already spent at an earlier position. Equal masks may merge on
their best count, since the future depends only on the mask.

### Hint 4

When the sweep reaches index `i`, spend the rewrite there by branching all
25 letters other than `s[i]`. The answer is the best final count plus one
for the last, still-open piece.
