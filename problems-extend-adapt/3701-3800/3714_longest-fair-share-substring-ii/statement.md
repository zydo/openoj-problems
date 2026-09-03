# The Longest Fair-Share Substring II

## Description

The string `s` in front of you draws from a smaller alphabet: its only
possible characters are `'a'`, `'b'`, and `'c'`.

A substring qualifies as fair-share when each distinct letter occurring in
it occurs exactly as often as the others. So `"abba"` qualifies — its two
distinct letters both appear twice — and so does `"ccc"`, whose lone letter
appears three times, while `"aab"` does not.

Return the length of the longest fair-share substring of `s`.

### Example 1

```text
Input: s = "abcbca"
Output: 6
Explanation: The entire string is fair-share: a, b, and c each appear
exactly 2 times. No substring can be longer than the string itself.
```

### Example 2

```text
Input: s = "abcab"
Output: 3
Explanation: "abc", "bca", and "cab" each spread three distinct letters
one apiece. Every length-4 window leaves some letter counted twice and
another once, so 3 is the ceiling.
```

### Example 3

```text
Input: s = "ccccc"
Output: 5
Explanation: A single distinct letter makes the condition vacuous, so
the whole run qualifies.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of the characters `'a'`, `'b'`, and `'c'`.

## Hints

### Hint 1

Treat the three possible letter-count shapes separately — substrings
touching one distinct letter, exactly two, or all three — and keep the
longest length any shape manages.

### Hint 2

One distinct letter: the condition is free, so the shape's best is simply
the longest run of one repeated letter.

### Hint 3

Exactly two distinct letters: choose a pair, skip over the third letter,
and carry the running difference of the pair's counts. Two positions
with equal difference bracket a stretch that splits the pair evenly, and
recalling the earliest position of each difference value maximizes the
length.

### Hint 4

All three letters: hash each prefix's pair `(count_b - count_a,
count_c - count_a)`. Matching pairs at two prefixes enclose a stretch
where all three counts moved together; the earliest index per pair gives
the longest such stretch.
