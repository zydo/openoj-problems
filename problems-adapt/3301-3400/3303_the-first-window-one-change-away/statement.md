# The First Window One Change Away

## Description

Two strings are given: `s` and `pattern`. Call a piece of text one change
away from `pattern` when altering at most a single character of it makes
the two identical.

Slide a window as long as `pattern` across `s` and report the smallest
left edge at which the window underneath is one change away from
`pattern`. When no window anywhere qualifies, return `-1`. A substring is
a contiguous non-empty run of characters taken from inside a string.

### Example 1

```text
Input: s = "abqdef", pattern = "abcde"
Output: 0
Explanation: The window s[0..4] == "abqde" differs from "abcde" only at
the 'q', and changing that one character finishes the match.
```

### Example 2

```text
Input: s = "zzabczz", pattern = "abc"
Output: 2
Explanation: The window s[2..4] == "abc" equals the pattern outright, so
no change is spent at all.
```

### Example 3

```text
Input: s = "mmamm", pattern = "mam"
Output: 1
Explanation: The window starting at index 1 is exactly "mam"; the window
at index 0 would need two corrections.
```

### Example 4

```text
Input: s = "aba", pattern = "cd"
Output: -1
Explanation: Every length-2 window misses the pattern in at least two
places.
```

### Constraints

- `1 <= pattern.length < s.length <= 10⁵`
- `s` and `pattern` consist only of lowercase English letters.

### Follow-up

Would your approach survive if up to `k` characters of the window could
be changed instead of one?

## Hints

### Hint 1

Precompute, for each position of `s`, how many characters of `pattern`'s
prefix match `s` when the comparison starts exactly there.

### Hint 2

Build the mirror table too: how many characters of `pattern`'s suffix
match `s` when the comparison ends at each position.

### Hint 3

A window passes when its forward run and backward run together cover the
whole pattern, or all of it except one character — that lone uncovered
slot is where the single change is spent.
