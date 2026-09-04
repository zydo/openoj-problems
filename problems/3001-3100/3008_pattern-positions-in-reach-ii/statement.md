# Pattern Positions In Reach II

## Description

You are given a string `s`, two pattern strings `a` and `b`, and an integer
`k`. All three strings are indexed from 0 and consist of lowercase English
letters.

A position `i` of `s` is called in reach when a copy of `a` starts exactly
there and some copy of `b` starts close enough to it. Formally, `i` is in
reach when all of the following hold:

- `0 <= i <= s.length - a.length`
- `s[i..(i + a.length - 1)] == a`
- there is an index `j` such that `0 <= j <= s.length - b.length`,
  `s[j..(j + b.length - 1)] == b`, and `|j - i| <= k`

Return every position of `s` that is in reach, listed from smallest to
largest.

### Example 1

```text
Input: s = "aabbaabb", a = "aa", b = "bb", k = 3
Output: [0,4]
Explanation: The string `a` starts at positions 0 and 4, while `b` starts at
positions 2 and 6.
- Position 0 is in reach because position 2 holds a copy of `b` and
  |0 - 2| <= 3.
- Position 4 is in reach because position 2 holds a copy of `b` and
  |4 - 2| <= 3.
So the answer is [0,4].
```

### Example 2

```text
Input: s = "monkeybanana", a = "an", b = "key", k = 4
Output: [7]
Explanation: `a` starts at positions 7 and 9, but the only copy of `b`
starts at position 3.
- Position 7 is in reach because |7 - 3| <= 4.
- Position 9 is not in reach: |9 - 3| = 6 exceeds `k`, and no other copy of
  `b` exists.
So the answer is [7].
```

### Example 3

```text
Input: s = "xyz", a = "z", b = "a", k = 3
Output: []
Explanation: The letter `b` never appears in `s`, so no copy of `b` exists
and no position can be in reach.
```

### Constraints

- `1 <= k <= s.length <= 5 × 10⁵`
- `1 <= a.length, b.length <= 5 × 10⁵`
- `s`, `a`, and `b` contain only lowercase English letters.

## Hints

### Hint 1

Collect the starting positions of all occurrences of `a` and of `b` in one
linear pass each — a Knuth–Morris–Pratt failure function or a rolling hash
both work at these sizes.

### Hint 2

Both position lists come out sorted, and the window `[i - k, i + k]` only
slides forward as `i` grows, so a two-pointer sweep answers each candidate
in amortized constant time.
