# Distance-K Rearrangement

## Description

You are given a string `s` and an integer `k`. Reorder the characters of
`s` so that any two occurrences of the same letter sit at least `k`
positions apart. If no such reordering exists, return the empty string
`""`.

Many rearrangements can satisfy the spacing rule, but this judge checks
for one exact string, so the answer is pinned by a deterministic
procedure. When `k <= 1` the spacing rule is automatically satisfied, so
the answer is `s` itself, untouched. Otherwise, tally how many times each
letter appears and build the answer in rounds: each round scans the
letters that still have remaining copies, in order of largest remaining
count first (ties broken alphabetically), and appends up to `k` of them —
one occurrence each — decrementing their counts as they're used. If some
round can place fewer than `k` letters while copies still remain
afterward, the spacing requirement can never be met, and the answer is
`""`.

### Example 1

```text
Input: s = "xxyyzz", k = 3
Output: "xyzxyz"
Explanation: Every letter repeats exactly 3 positions later.
```

### Example 2

```text
Input: s = "aaaab", k = 2
Output: ""
Explanation: Four copies of 'a' would need at least 7 positions to stay
2 apart, but the string only has 5.
```

### Example 3

```text
Input: s = "mississippi", k = 3
Output: "ispismispis"
Explanation: 's' and 'i' are the most frequent letters, so each round
places both of them first before the rarer letters.
```

### Constraints

- `1 <= s.length <= 3 * 10⁵`
- `s` consists of only lowercase English letters.
- `0 <= k <= s.length`
