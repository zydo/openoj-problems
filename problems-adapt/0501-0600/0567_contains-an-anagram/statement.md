# Contains An Anagram

## Description

Two words are anagrams when one can be rearranged into the other — same letters,
same multiplicities, any order.

Given `pattern` and `text`, decide whether some run of adjacent characters in
`text` is an anagram of `pattern`. Return `true` if one exists and `false`
otherwise.

### Example 1

```text
Input: pattern = "dog", text = "hangodx"
Output: true
Explanation: The three characters at positions 3 through 5 spell "god".
```

### Example 2

```text
Input: pattern = "dog", text = "dxgoxd"
Output: false
Explanation: All three letters occur, but no three adjacent characters carry
one of each.
```

### Example 3

```text
Input: pattern = "aab", text = "cbaabc"
Output: true
Explanation: "baa" qualifies. Multiplicities have to agree, so a single "a"
would not have been enough.
```

### Constraints

- both strings are between `1` and `10^4` characters long
- both are made of lowercase English letters only

## Hints

### Hint 1

Rearrangement is invisible to a letter census: two strings are anagrams exactly
when their per-letter counts agree. So you are looking for a stretch of `text`
whose census equals `pattern`'s.

### Hint 2

Only stretches as long as `pattern` can qualify, so there is one candidate per
starting position. Recensusing each candidate from scratch is quadratic.

### Hint 3

Consecutive candidates overlap in all but two characters. Advance a fixed-width
window by one, incrementing the count of the character that entered and
decrementing the one that left, and each step costs constant work.

### Hint 4

There are only 26 letters, so both censuses fit in fixed-size arrays and their
comparison is a constant-cost check. Handle a `pattern` longer than `text`
before the window is built — no candidate exists at all in that case.
