# Longest Shared Opening With One Skip

## Description

You are given two strings `s` and `t`.

You may delete at most one character from `s` — deleting none is also
allowed. Return the length of the longest common prefix of the resulting
`s` and the string `t`.

### Example 1

```text
Input: s = "bandana", t = "banana"
Output: 6
Explanation: Deleting s[3] (the 'd') leaves "banana"-style alignment: the
shared opening of "ba" + "ana" with "banana" runs 6 characters.
```

### Example 2

```text
Input: s = "xharbor", t = "harbor"
Output: 6
Explanation: Deleting s[0] (the 'x') turns s into "harbor", which shares
its whole length of 6 with t.
```

### Example 3

```text
Input: s = "glow", t = "glow"
Output: 4
Explanation: The strings already match completely, so no deletion is
needed and the shared opening is all 4 characters.
```

### Example 4

```text
Input: s = "zen", t = "ark"
Output: 0
Explanation: Even after deleting one character from s, nothing lines up
with the start of t, so the shared opening is empty.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `1 <= t.length <= 10⁵`
- `s` and `t` consist of lowercase English letters only.

## Hints

### Hint 1

Walk both strings from the front until they first disagree; if a deletion
helps at all, it is the character sitting at that first disagreement.
