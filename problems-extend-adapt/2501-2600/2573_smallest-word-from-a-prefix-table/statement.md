# Smallest Word From a Prefix Table

## Description

For any 0-indexed string `word` of `n` lowercase English letters,
define its prefix table as the `n x n` grid in which `lcp[i][j]` is the
length of the longest common prefix between the suffixes
`word[i..n-1]` and `word[j..n-1]`.

You are given an `n x n` matrix `lcp`. Return the alphabetically
smallest string `word` whose prefix table is exactly `lcp`, or the
empty string if no lowercase word produces it.

(Comparing equal-length strings alphabetically: the smaller one is the
one whose letter comes earlier in the alphabet at the first position
where the two differ — so `"aabd"` is smaller than `"aaca"`.)

### Example 1

```text
Input: lcp = [[3,0,1],[0,2,0],[1,0,1]]
Output: "aba"
Explanation: lcp[0][2] = 1 > 0 means positions 0 and 2 hold the same
letter, while position 1 differs from both. The smallest matching word
is "aba", and rebuilding its prefix table gives exactly the input.
```

### Example 2

```text
Input: lcp = [[4,1,0,0],[1,3,0,0],[0,0,2,1],[0,0,1,1]]
Output: "aabb"
Explanation: lcp[0][1] = 1 pairs the first two positions on one letter,
and lcp[2][3] = 1 pairs the last two on a different one, so "aabb" is
the smallest candidate that reproduces the grid.
```

### Example 3

```text
Input: lcp = [[2,1],[0,2]]
Output: ""
Explanation: Every genuine prefix table is symmetric, yet
lcp[0][1] = 1 while lcp[1][0] = 0 — no word can produce this grid.
```

### Constraints

- `1 <= n == lcp.length == lcp[i].length <= 1000`
- `0 <= lcp[i][j] <= n`

## Hints

### Hint 1

A positive entry `lcp[i][j] > 0` says the two suffixes open with the
same letter — so the positive entries alone decide which positions must
share a letter.

### Hint 2

Assign letters greedily: sweep positions left to right and give each
not-yet-labeled equality class the smallest unused letter; more than 26
classes means no lowercase word exists.

### Hint 3

Never trust the candidate — rebuild its true prefix table bottom-up and
require every cell to match the input.
