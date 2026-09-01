# How Far Above Sorted

## Description

You are given a string `s` of lowercase English letters. As long as `s` is
not sorted in ascending order, apply this operation to it:

- Take `i` to be the largest index with `1 <= i < s.length` and
  `s[i] < s[i - 1]`.
- Take `j` to be the largest index with `i <= j < s.length` such that every
  character in `s[i..j]` is smaller than `s[i - 1]`.
- Swap the characters at positions `i - 1` and `j`.
- Reverse the suffix that starts at `i`.

Return how many operations this takes, modulo 10⁹ + 7.

### Example 1

```text
Input: s = "dcba"
Output: 23
Explanation: A fully descending string is the very last arrangement of its
letters, so every other ordering of {a, b, c, d} — 4! - 1 = 23 strings —
is walked through before "dcba" lands on "abcd".
```

### Example 2

```text
Input: s = "cabab"
Output: 25
Explanation: The letters {a, a, b, b, c} arrange into 30 distinct strings,
and 25 of the other 29 orderings sort before "cabab".
```

### Example 3

```text
Input: s = "onion"
Output: 22
Explanation: Its letters {i, n, n, o, o} also arrange 30 ways; 22 of those
orderings come before "onion".
```

### Constraints

- `1 <= s.length <= 3000`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

The operation described is exactly one step toward the previous
lexicographic permutation of the string's multiset of letters.

### Hint 2

Skip the simulation: for each position, count the arrangements that agree
with `s` up to it and then place a smaller remaining letter — each such
count is a multinomial coefficient.
