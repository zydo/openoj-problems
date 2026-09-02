# Splitting Into K Semi-Palindromes

## Description

You are given a string `s` of lowercase letters and an integer `k`. Cut
`s` into exactly `k` consecutive pieces and pay one change for every
letter you replace, so that every piece becomes a semi-palindrome.
Minimize the total number of letter changes and return that minimum.

A semi-palindrome is a string whose characters split into palindromes
along a repeating stride. To test a string `t` of length `L`:

- Pick a divisor `d` of `L` with `1 <= d < L`. A string of length 1 has
  no valid `d`, since its only divisor is its own length.
- Read out `d` groups by striding through `t`: the first group holds the
  characters at positions `1, 1 + d, 1 + 2d, ...`, the second those at
  positions `2, 2 + d, 2 + 2d, ...`, and so on.
- `t` is a semi-palindrome exactly when every one of those `d` groups is
  itself a palindrome.

For instance, take `"abcabc"`, whose proper divisors are 1, 2 and 3.
With `d = 1` the single group is `"abcabc"` — not a palindrome. With
`d = 2` the stride groups read `"acb"` and `"bac"` — neither is a
palindrome. With `d = 3` the groups read `"aa"`, `"bb"` and `"cc"` — all
palindromes — so `"abcabc"` is a semi-palindrome.

### Example 1

```text
Input: s = "deedxyz", k = 2
Output: 1
Explanation: Cut s into "deed" and "xyz". "deed" is a palindrome, so it
already qualifies. Changing one letter turns "xyz" into the palindrome
"xyx". One change in total.
```

### Example 2

```text
Input: s = "wxyzzyxw", k = 3
Output: 2
Explanation: Cut s into "wx", "yzzy" and "xw". "yzzy" already qualifies;
"wx" becomes "xx" and "xw" becomes "ww", one change each. Two changes in
total.
```

### Example 3

```text
Input: s = "aabbcc", k = 2
Output: 2
Explanation: Cut s into "aa" and "bbcc". "aa" already qualifies. For
"bbcc", take d = 2: the two stride groups are "bc" and "bc", and one
change per group (reaching, say, "bcbc") makes both palindromes. Two
changes in total.
```

### Constraints

- `2 <= s.length <= 200`
- `1 <= k <= s.length / 2`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Let `f[i][p]` be the fewest changes that split the suffix of `s`
starting at index `i` into `p` qualifying pieces.

### Hint 2

Moving from `p` to `p - 1` means choosing where the first piece ends:
`f[i][p]` is the minimum of `cost(i, x) + f[x + 1][p - 1]` over all cut
points `x`, where `cost(i, x)` prices turning the piece `s[i..x]` into a
semi-palindrome.

### Hint 3

Build a `cost` table for every substring up front. For each piece, try
every proper divisor `d` of its length and count, per stride group, the
mirror pairs holding different letters — each mismatched pair costs one
change. Keep the cheapest divisor.

### Hint 4

A piece of length 1 has no valid divisor, so every piece of an optimal
cut has length at least 2; the bound `k <= s.length / 2` is what keeps
such cuts available.
