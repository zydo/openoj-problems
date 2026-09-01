# Repeated Pattern Removal

## Description

You are given two strings `s` and `part`, both made of lowercase English
letters. While `part` still occurs somewhere in `s`, repeat this single
step: find its leftmost occurrence and delete those characters from `s`,
closing the gap the deletion leaves behind. One cut can create fresh work —
the characters on either side of the removed stretch become neighbors, so a
new occurrence of `part` may appear exactly at the seam.

Return the final contents of `s` once no occurrence of `part` remains.

### Example 1

```text
Input: s = "cabcbadcbabc", part = "abc"
Output: "cbadcb"
Explanation: The first cut removes the `abc` starting at index 1, leaving
"cbadcbabc". The next cut removes the `abc` starting at index 6, leaving
"cbadcb", which contains no further `abc`.
```

### Example 2

```text
Input: s = "zqxxqqxxzz", part = "xz"
Output: "zqxxqq"
Explanation: The only occurrence of `xz` starts at index 7. Cutting it
joins the surrounding pieces into "zqxxqqz", which contains no `xz`, so
this is the final answer.
```

### Example 3

```text
Input: s = "aaaa", part = "aa"
Output: ""
Explanation: Removing the first `aa` leaves "aa", and a second removal
collapses that to "".
```

### Example 4

```text
Input: s = "mississippi", part = "iss"
Output: "mippi"
Explanation: Removing the `iss` starting at index 1 gives "missippi", and
removing the `iss` starting at index 1 of that string gives "mippi".
```

### Constraints

- `1 <= s.length <= 1000`
- `1 <= part.length <= 1000`
- `s` and `part` consist only of lowercase English letters.

## Hints

### Hint 1

A single scan-and-delete pass is not enough, because a cut can complete a
new occurrence across the seam — think of `"ababcc"` with `part = "abc"`,
where the first deletion sets up the second.

### Hint 2

Keep the surviving characters on a stack. Whenever the topmost
`part.length` characters of the stack spell out `part`, pop them; after
each push only the character just pushed can complete a match, so one
check per push catches every deletion, including cascades.
