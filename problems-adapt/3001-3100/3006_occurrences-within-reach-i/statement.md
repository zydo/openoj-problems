# Occurrences Within Reach I

## Description

You are given a 0-indexed string `s`, two strings `a` and `b`, and an
integer `k`.

An occurrence of `a` is an index `i` with `0 <= i <= s.length - a.length`
whose slice `s[i .. i + a.length - 1]` equals `a`; occurrences of `b` are
defined the same way. Call an occurrence index `i` of `a` in reach when
some occurrence index `j` of `b` satisfies `|j - i| <= k`.

Return every in-reach index of `a`, sorted from smallest to largest.

### Example 1

```text
Input: s = "abcdeabf", a = "ab", b = "de", k = 2
Output: [5]
Explanation: `ab` occurs at indices 0 and 5, while `de` occurs only at
index 3. The occurrence at 0 sits 3 away — beyond `k = 2` — so it misses;
the occurrence at 5 lies within 2 of index 3 and qualifies.
```

### Example 2

```text
Input: s = "mississippi", a = "iss", b = "ssi", k = 1
Output: [1, 4]
Explanation: `iss` occurs at indices 1 and 4, and `ssi` occurs at indices
2 and 5. Each `iss` occurrence has an `ssi` occurrence exactly one position
away, so both indices make the answer.
```

### Example 3

```text
Input: s = "ababab", a = "aba", b = "bab", k = 1
Output: [0, 2]
Explanation: The string is one long overlap: `aba` sits at indices 0 and 2
while `bab` sits at 1 and 3. With `k = 1` both `aba` occurrences have a
`bab` neighbour, so the answer is [0, 2].
```

### Constraints

- `1 <= k <= s.length <= 10⁵`
- `1 <= a.length, b.length <= 10`
- `s`, `a`, and `b` hold only lowercase English letters.

## Hints

### Hint 1

Work with occurrence lists instead of rescanning: gather every index where
`a` occurs and every index where `b` occurs, one left-to-right sweep each.

### Hint 2

Index `i` qualifies exactly when the sorted list of `b`-occurrences holds an
entry inside `[i - k, i + k]` — binary-search for the leftmost entry at or
after `i - k` and check its right edge.
