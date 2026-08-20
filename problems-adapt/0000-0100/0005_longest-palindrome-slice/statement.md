# Longest Palindrome Slice

## Description

You are given a string `s`. Return the longest contiguous slice of `s` that
reads the same forwards and backwards.

When several slices share the maximum length, return the one that begins
earliest.

### Example 1

```text
Input: s = "rotorboat"
Output: "rotor"
Explanation: "rotor" mirrors around its middle 't' and reaches length 5;
nothing later in the string comes close.
```

### Example 2

```text
Input: s = "carriage"
Output: "rr"
Explanation: The longest mirror here sits between two identical letters.
```

### Example 3

```text
Input: s = "abcbadeded"
Output: "abcba"
Explanation: "abcba" and "deded" both reach length 5; the earlier start wins.
```

### Constraints

- `1 <= s.length <= 1000`
- Every character of `s` is an English letter or a digit.

## Hints

### Hint 1

A longer mirror can be grown out of a shorter one: wrap a palindrome in a
matching pair of characters and it is still a palindrome. Where can such
growth start?

### Hint 2

Every mirror has a center — a single character for odd lengths, the gap
between two characters for even ones. A string of length `n` offers just
`2n - 1` centers to try.

### Hint 3

Growing from one center costs a single comparison per step outward, so
checking all centers beats trying every start-end pair and re-testing each
candidate from scratch.
