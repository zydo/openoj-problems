# Longest Airtight Substring

## Description

A piece of text `s` is given to you. Call a substring `t` of `s`
_airtight_ when it is a proper piece of `s` (meaning `t` is not all of
`s`) and none of the letters appearing in `t` appear anywhere in `s`
outside of `t` — the substring fully seals its own alphabet in.

Among all airtight substrings, report the length of the longest one. If
no substring qualifies, report `-1`.

### Example 1

```text
Input: s = "aabb"
Output: 2
Explanation: Take "aa". Both occurrences of `a` lie inside it and no
`a` survives outside, so "aa" is airtight and has length 2. ("bb"
qualifies the same way.)
```

### Example 2

```text
Input: s = "cdcd"
Output: -1
Explanation: Whichever proper substring you pick, some `c` or `d` is
left straddling the boundary — appearing on both sides — so nothing is
airtight.
```

### Example 3

```text
Input: s = "gfgfhh"
Output: 4
Explanation: The substring "gfgf" holds every `g` and every `f` in the
string; only the `h` pair lives outside it. It is airtight with
length 4.
```

### Example 4

```text
Input: s = "abacbd"
Output: 5
Explanation: The substring "abacb" contains all `a`s, all `b`s and the
only `c`; the single `d` at the end is the sole character outside it.
It is airtight with length 5.
```

### Constraints

- `2 <= s.length <= 5 * 10⁴`
- `s` is made up solely of lowercase English letters.

## Hints

### Hint 1

An airtight window must own every occurrence of whichever letter starts
it, so candidate left ends are only the first occurrences of distinct
letters — at most 26 of them.

### Hint 2

For a fixed left end, grow the right end to the last occurrence of the
letter currently at the boundary, then repeat: any letter poking both
sides drags the right end out to its own last occurrence, until the
window is closed.

### Hint 3

A closed window is valid unless some letter inside it starts before the
left end, or the window swallowed the entire string. Prefix counts let
you test both conditions in constant time per letter.
