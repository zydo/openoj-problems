# Smallest Rearrangement Beating The Target

## Description

You are given two strings `s` and `target`, both of length `n` and both made
of lowercase English letters.

A rearrangement of `s` is any string that uses exactly the same letters with
the same multiplicities, in any order. Among all rearrangements of `s` that
are lexicographically strictly greater than `target`, return the
lexicographically smallest one. If no rearrangement of `s` is strictly
greater than `target`, return the empty string `""`.

A string `a` is lexicographically strictly greater than an equal-length
string `b` when, at the first position where the two differ, `a` carries a
letter later in the alphabet than `b` does. Two equal-length strings that
never differ are equal, and equal does not count as strictly greater.

### Example 1

```text
Input: s = "dac", target = "cab"
Output: "cad"
Explanation: The rearrangements of s in ascending order start "acd", "adc",
"cad". The first one that exceeds "cab" is "cad": it agrees on the leading
letter and then pulls ahead with 'd' over 'b'.
```

### Example 2

```text
Input: s = "aab", target = "bba"
Output: ""
Explanation: The rearrangements of s are "aab", "aba" and "baa", and every
one of them sorts below "bba", so nothing qualifies.
```

### Example 3

```text
Input: s = "az", target = "az"
Output: "za"
Explanation: The rearrangement "az" merely equals the target, and equality
does not count. The next one up, "za", is the smallest strictly greater
choice.
```

### Example 4

```text
Input: s = "zy", target = "aa"
Output: "yz"
Explanation: Every rearrangement of s opens with a letter past 'a', so all
of them qualify — and the overall smallest, "yz", is the answer.
```

### Constraints

- `1 <= s.length == target.length <= 300`
- `s` and `target` consist of lowercase English letters.

## Hints

### Hint 1

Keep a count of every letter of `s` that is still unused while a candidate
answer continues to agree with `target`.

### Hint 2

Matching `target` letter by letter keeps the shared prefix long, and a longer
shared prefix is precisely what keeps the eventual answer small.

### Hint 3

At each position also note the smallest still-unused letter that exceeds the
current `target` letter, together with the counters as they stand at that
moment.

### Hint 4

When the matching cannot continue — or `target` runs out entirely — return to
the most recent remembered spot, place the larger letter there, and append
every remaining letter in ascending order.
