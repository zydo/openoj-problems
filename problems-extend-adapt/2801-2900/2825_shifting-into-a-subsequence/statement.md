# Shifting Into A Subsequence

## Description

You are given two strings `str1` and `str2`, both made of lowercase English
letters.

You may perform the following move at most once: choose any set of
positions in `str1` and advance each chosen letter one step forward through
the alphabet, wrapping `z` around to `a`. So `a` becomes `b`, `b` becomes
`c`, and so on, while `z` becomes `a`. Every chosen position advances by
exactly one letter, and unchosen positions stay as they are.

Return `true` if, after at most one such move, `str2` appears as a
subsequence of `str1`, and `false` otherwise.

Note: a subsequence of a string is what remains after deleting any number
of characters — possibly none — without reordering the ones that stay.

### Example 1

```text
Input: str1 = "codex", str2 = "dpf"
Output: true
Explanation: Advance positions 0, 1, and 3, so c becomes d, o becomes p,
and e becomes f: "codex" turns into "dpdfx", and "dpf" runs straight
across the three advanced positions.
```

### Example 2

```text
Input: str1 = "abz", str2 = "ba"
Output: true
Explanation: Take the b at index 1 as it is, then wrap the final z around
to a. The string reads "aba" afterwards, so "ba" sits inside it.
```

### Example 3

```text
Input: str1 = "cat", str2 = "dbz"
Output: false
Explanation: The d and b are reachable (c→d, a→b), but no position can be
turned into z — the last letter t only reaches u — so str2 cannot be
formed.
```

### Constraints

- `1 <= str1.length <= 10⁵`
- `1 <= str2.length <= 10⁵`
- `str1` and `str2` consist of only lowercase English letters.

## Hints

### Hint 1

Positions that no match ever uses can stay untouched: the move acts on
arbitrarily many positions at once, so only the matching spots matter.

### Hint 2

Sweep `str1` from left to right while keeping a pointer into `str2`.

### Hint 3

A position can serve the letter the pointer wants when the two are equal,
or when advancing the position one letter forward lands on it — a ring
distance of 0 or 1.

### Hint 4

Claiming the earliest eligible position never blocks a better choice
later, so a greedy sweep is safe. The answer is yes exactly when the
pointer walks off the end of `str2`.
