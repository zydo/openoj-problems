# Tightest Two-Gap Pattern Match

## Description

You are given a text `s` and a pattern `p`. The pattern contains exactly two
`'*'` characters, and each star stands for any run of zero or more
characters.

Reading `p` left to right, a substring of `s` fits the pattern when its
beginning spells out the literal run before the first star, its middle
contains a copy of the run between the stars, and its end spells out the run
after the second star — the stars absorb whatever sits in between.

Return the length of the shortest fitting substring, or `-1` if none fits.
The empty substring is allowed, so a pattern whose literal runs are all
empty fits it.

### Example 1

```text
Input: s = "cabdcabe", p = "ab*d*e"
Output: 7
Explanation: The window "abdcabe" works: the leading "ab" runs straight into
"d", and the second gap absorbs only "cab" before the final "e".
```

### Example 2

```text
Input: s = "mppnqmppnq", p = "pq**zz"
Output: -1
Explanation: "pq" occurs, but the trailing run "zz" never does, so nothing
fits.
```

### Example 3

```text
Input: s = "w", p = "**"
Output: 0
Explanation: Both stars may absorb nothing and no literal run remains, so
the empty substring is the tightest fit.
```

### Example 4

```text
Input: s = "hellohelloworld", p = "*llo*"
Output: 3
Explanation: Both literal runs around the single "llo" can be empty, and
"llo" itself is the tightest window.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `2 <= p.length <= 10⁵`
- `s` contains only lowercase English letters
- `p` contains only lowercase English letters and exactly two `'*'`

## Hints

### Hint 1

The two stars cut `p` into three literal runs — some of them empty when a
star sits at an end or the stars are adjacent.

### Hint 2

For each non-empty run, all you ever need is its sorted list of occurrence
positions in `s`; any linear-time string matcher produces those.

### Hint 3

A window stretches from the start of its first chosen run to the end of its
last. For each occurrence of a later run, the best earlier partner is the
latest occurrence that still ends in time — and "latest that ends in time"
is a binary search over a sorted list.
