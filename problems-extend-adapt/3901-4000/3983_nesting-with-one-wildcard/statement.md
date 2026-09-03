# Nesting With One Wildcard

## Description

You are given two strings `s` and `t` made of lowercase English letters. You
are allowed to pick at most one position of `s` and overwrite the character
there with any lowercase letter you like (or overwrite nothing at all).

Decide whether `s` can end up a subsequence of `t` after that single edit.

### Example 1

```text
Input: s = "brick", t = "bicyclerack"

Output: true

Explanation:

Overwrite `s[2]`, changing 'i' to 'a'. The string becomes "brack", which is a
subsequence of "bicyclerack": 'b' at index 0, 'r' at 7, 'a' at 8, 'c' at 9,
'k' at 10.
```

### Example 2

```text
Input: s = "abc", t = "acb"

Output: false

Explanation:

The strings have equal length, so a subsequence of `t` with that length must
be `t` itself — but turning "abc" into "acb" needs two positions changed
('b' and 'c' trade places), and one edit cannot do that.
```

### Example 3

```text
Input: s = "a", t = "bb"

Output: true

Explanation:

Overwrite the lone character with 'b', and the result sits inside "bb".
```

### Example 4

```text
Input: s = "xyz", t = "xyz"

Output: true

Explanation:

`s` is already a subsequence of `t`, so no edit is required at all.
```

### Constraints

- `1 <= s.length, t.length <= 10^5`
- `s` and `t` consist only of lowercase English letters.

## Hints

### Hint 1

Settle the length question first: a longer `s` can never nest inside a
shorter `t`, edit or no edit.

### Hint 2

Before anything clever, test whether `s` already is a subsequence of `t` —
then the answer is immediately true.

### Hint 3

For every candidate position `i`, precompute how far the prefix `s[0..i-1]`
can be greedily matched from the left of `t`, and how the suffix `s[i+1..]`
behaves when greedily matched from the right.

### Hint 4

Position `i` works as the wildcard precisely when its prefix and suffix still
fit inside `t` with at least one untouched character between them — that spare
slot can hold any letter the replacement needs.
