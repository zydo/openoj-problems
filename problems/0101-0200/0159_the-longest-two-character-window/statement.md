# The Longest Two-Character Window

## Description

A string `s` of English letters is given. Scan its consecutive
stretches — every substring, that is — and find the longest one that
spans no more than two different characters. Report its length.

A stretch qualifies as long as the count of distinct characters it
draws from stays at `2` or below, so a run built from a single
repeated letter qualifies too, and so does the whole string whenever
`s` itself uses only one or two characters.

### Example 1

```text
Input: s = "banana"
Output: 5
Explanation: The stretch "anana" covers the whole word except the
leading `b`, drawing only on `a` and `n` — length 5.
```

### Example 2

```text
Input: s = "moomoo"
Output: 6
Explanation: Only `m` and `o` appear anywhere, so the entire string is
itself a qualifying stretch.
```

### Example 3

```text
Input: s = "abaccc"
Output: 4
Explanation: The closing run "accc" uses just `a` and `c` and beats
every earlier stretch, such as "aba" at length 3.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of English letters.
