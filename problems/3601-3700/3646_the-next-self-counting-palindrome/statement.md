# The Next Self-Counting Palindrome

## Description

Given a non-negative integer `n`, look strictly above it for the next
**self-counting palindrome**: a number that reads identically in both
directions and, on top of that, spells every digit it contains exactly as
many times as the digit's own value — any `2` it holds occurs as a pair,
any `3` in a trio, and the same rule covers each other digit present.

Return the smallest self-counting palindrome that is strictly greater than
`n`.

### Example 1

```text
Input: n = 500
Output: 4444
Explanation: 4444 mirrors onto itself while carrying four 4s, and no
self-counting palindrome sits between 500 and it — after 333, this is the
next one.
```

### Example 2

```text
Input: n = 5000
Output: 23332
Explanation: 23332 reads the same both ways with two 2s and three 3s, and
nothing self-counting lies strictly between 5000 and 23332.
```

### Example 3

```text
Input: n = 300000
Output: 424424
Explanation: 424424 is a palindrome holding two 2s and four 4s, so it
qualifies; no smaller number above 300000 does.
```

### Constraints

- `0 <= n <= 10¹⁵`

## Hints

### Hint 1

Numbers that obey the digit-count rule are rare — enumerate every one of
them once, up front.

### Hint 2

A bitmask over the digits 1–9 sweeps through all legal choices of which
digits take part.

### Hint 3

Fix a digit set, form the left half from it, step that half through its
distinct arrangements, and mirror each one into the full palindrome.

### Hint 4

Across all digit sets, keep the smallest completed palindrome that clears
`n`.
