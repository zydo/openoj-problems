# Rebuilding Palindromes I

## Description

A string `s` made of lowercase English letters is given, and `s` is
guaranteed to be a palindrome.

Shuffle its letters however you like — every arrangement that still reads
the same forwards and backwards counts. Among all of them, return the one
that is lexicographically smallest.

### Example 1

```text
Input: s = "noon"
Output: "noon"
Explanation: Keeping each n against its mirror n and each o against its
mirror o already forms the smallest possible arrangement.
```

### Example 2

```text
Input: s = "racecar"
Output: "acrerca"
Explanation: The letters split into a first half `acr`, the lone center
letter `e`, and the mirrored half `rca`, giving the smallest arrangement.
```

### Example 3

```text
Input: s = "baabaab"
Output: "aabbbaa"
Explanation: The first half becomes `aab`, the odd letter `b` sits in the
middle, and the mirror half `baa` closes the string.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters.
- `s` is guaranteed to be palindromic.

## Hints

### Hint 1

Read any palindrome as a first half, optionally one unpaired middle letter,
and a reversed copy of the first half.

### Hint 2

That first half is not free to choose: pairing position `i` with its mirror
forces exactly `count[c] / 2` copies of every letter into it. So the whole
task reduces to ordering that forced multiset — the smallest half, then the
odd letter, then the half reversed.
