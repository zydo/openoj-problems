# Fewest Flips For Uniform Pairs

## Description

You are given a binary string `s` whose length is guaranteed to be even.
Call the string regular when its characters can be sliced into consecutive
pieces such that every piece has even length and consists of a single
repeated symbol — either all `'1'`s or all `'0'`s.

A single operation picks any one character of `s` and overwrites it with
`'0'` or `'1'`.

Return the smallest number of operations that turns `s` into a regular
string.

### Example 1

```text
Input: s = "1101"
Output: 1
Explanation: The pair of positions (0, 1) already reads "11". Overwrite
s[3] with '0' to obtain "1100", which is regular: it slices as "11|00".
No single flip can do better.
```

### Example 2

```text
Input: s = "0110"
Output: 2
Explanation: Both aligned pairs are mixed. Overwrite s[1] with '0' and
s[3] with '1' to obtain "0011", which slices as "00|11". Both pairs needed
one flip each, so 2 is the minimum.
```

### Example 3

```text
Input: s = "100110"
Output: 3
Explanation: Overwrite s[1], s[2] and s[5] with '1' to obtain "111111",
which slices as "11|11|11". Each of the three pairs is mixed to begin
with, so fewer than 3 flips is impossible.
```

### Constraints

- `2 <= s.length <= 10^5`
- `s` has an even length.
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

A uniform run of length `2t` is itself sliceable into `t` pieces of length
2, so any regular string can be re-sliced into pieces of exactly two
characters without changing the characters at all.

### Hint 2

That means only the fixed pairs `(0, 1), (2, 3), …` matter: a pair holding
two equal characters already complies, and a mixed pair can be repaired
with a single flip of either of its characters.
