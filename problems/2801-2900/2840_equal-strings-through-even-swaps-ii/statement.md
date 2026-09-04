# Equal Strings Through Even Swaps II

## Description

Two strings `s1` and `s2`, each of length `n` over the lowercase English
alphabet, are given.

Exactly one kind of move is available, applicable to either string as many
times as desired: pick two positions `i` and `j` with `i < j` whose gap
`j - i` is even, and exchange the two characters sitting there.

Decide whether some sequence of these exchanges can turn the two strings
into the very same string, answering `true` when it can and `false` when it
cannot.

### Example 1

```text
Input: s1 = "parity", s2 = "tirapy"
Output: true
Explanation: Swapping positions 0 and 4 of `s1` (a gap of 4) turns it into
"tirapy", which equals `s2`.
```

### Example 2

```text
Input: s1 = "xaz", s2 = "zax"
Output: true
Explanation: The characters at positions 0 and 2 of `s1` are two apart, so
they may be exchanged, producing "zax".
```

### Example 3

```text
Input: s1 = "swap", s2 = "paws"
Output: false
Explanation: Every letter occurs equally often in both strings overall, yet
the even positions of `s1` hold `{s, a}` while those of `s2` hold `{p, w}`,
and a legal exchange can never carry a letter across the parity boundary.
```

### Constraints

- `n == s1.length == s2.length`
- `1 <= n <= 10⁵`
- Both strings are made up exclusively of lowercase English letters.

## Hints

### Hint 1

An exchange whose gap is even joins two positions of the same parity, so a
letter can never leave the parity class it started in.

### Hint 2

Reachability therefore collapses into counting: for each parity separately,
the two strings must contain exactly the same multiset of letters.
