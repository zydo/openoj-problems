# A Single Edit Apart

## Description

You are given two strings, `s` and `t`. Decide whether the distance between
them is exactly one edit — that is, whether one and only one of the
following succeeds:

- adding one character somewhere inside `s` turns it into `t`;
- removing one character from `s` turns it into `t`;
- swapping exactly one character of `s` for a different character turns it
  into `t`.

Return `true` when one of these holds and `false` otherwise. Note the word
_exactly_: two equal strings are zero edits apart, not one, so they do not
qualify — and neither do pairs that would need two or more changes.

### Example 1

```text
Input: s = "swap", t = "swop"
Output: true
Explanation: Replacing the lone `a` of s with `o` produces t, and no other
character had to change.
```

### Example 2

```text
Input: s = "fro", t = "frog"
Output: true
Explanation: The pair differs in length by one; inserting the missing `g`
at the end of s yields t.
```

### Example 3

```text
Input: s = "same", t = "same"
Output: false
Explanation: The strings already coincide, so the edit count is zero.
```

### Constraints

- `0 <= s.length, t.length <= 10⁴`
- `s` and `t` may contain lowercase letters, uppercase letters, and digits.
