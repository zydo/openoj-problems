# Fewest Appends To Make Anagrams II

## Description

Two strings `s` and `t` are given. Your only allowed move is attaching a
single character of your choice to the end of either string.

Find the smallest number of moves after which `s` and `t` become
anagrams of one another.

Two strings are anagrams when they contain exactly the same characters
with the same multiplicities, in any order.

### Example 1

```text
Input: s = "listenable", t = "silent"
Output: 4
Explanation:
Counting letters, "silent" pairs up with one copy each of l, i, s, t,
e, n from "listenable", leaving one extra l, e, a, and b on the
"listenable" side. Appending those four letters to "silent" in any
order balances the counts, and fewer moves cannot.
```

### Example 2

```text
Input: s = "topaz", t = "matzo"
Output: 2
Explanation:
The shared letters t, o, a, z cancel out; a lone `p` in `s` and a lone
`m` in `t` remain unpaired. One append fixes each side, for 2 moves.
```

### Example 3

```text
Input: s = "abc", t = "abc"
Output: 0
Explanation:
The strings are anagrams already, so no move is needed.
```

### Constraints

- `1 <= s.length, t.length <= 2 * 10^5`
- `s` and `t` are made of lowercase English letters.

## Hints

### Hint 1

The order of characters never matters here — only how many copies of
each letter each string holds.

### Hint 2

Tally every letter's occurrences in `s` and in `t` separately.

### Hint 3

A letter whose counts differ contributes exactly the size of that
difference to the answer.
