# Most Deletions a Subsequence Survives

## Description

The string `p` occurs inside the longer string `s` as a subsequence — a
selection of `s`'s characters, kept in their original order, spells `p`
out. Alongside the pair comes `removable`, a 0-indexed array of distinct
positions of `s`.

Deletions happen in the given order: applying the first `k` entries of
`removable` deletes the characters at those `k` positions of `s` all at
once.

Return the largest `k` (`0 <= k <= removable.length`) such that, after
applying the first `k` deletions, `p` still occurs in what remains of `s`
as a subsequence.

### Example 1

```text
Input: s = "bacb", p = "bc", removable = [0,2]
Output: 0
Explanation: The very first deletion removes the only 'b', after which
"bc" can no longer be found in "acb".
```

### Example 2

```text
Input: s = "bacbc", p = "bc", removable = [1,0,3]
Output: 2
Explanation: Deleting positions 1 and 0 leaves "cbc", which still contains
"bc". The third deletion would take position 3 — the last remaining 'b' —
leaving "cc", where "bc" is gone.
```

### Example 3

```text
Input: s = "aabb", p = "ab", removable = [0,2]
Output: 2
Explanation: Both deletions applied leave "ab", which contains "ab".
Nothing is left to try, so the whole array can be used.
```

### Constraints

- `1 <= p.length <= s.length <= 10^5`
- `0 <= removable.length < s.length`
- `0 <= removable[i] < s.length`
- `p` occurs in `s` as a subsequence.
- `s` and `p` consist of lowercase English letters.
- The entries of `removable` are distinct.

## Hints

### Hint 1

Build a check first: given a set of positions to delete, does `p` still
appear as a subsequence of the rest of `s`?

### Hint 2

If `p` survives the first `k` deletions, it survives any shorter prefix of
them too — fewer deletions only give characters back. So bisect on `k`.
