# How Many Numbers Mirror in Binary

## Description

A non-negative integer `n` is given.

Call an integer bit-mirrored when, written in binary with no leading
zeros, its digits read identically in both directions. Zero qualifies:
its representation is "0".

Count the integers `k` with `0 <= k <= n` that are bit-mirrored.

### Example 1

```text
Input: n = 20
Output: 8
Explanation: Within [0, 20] the mirrored values are 0 ("0"), 1 ("1"),
3 ("11"), 5 ("101"), 7 ("111"), 9 ("1001"), 15 ("1111") and 17 ("10001").
Nothing else in the range reads the same both ways, so the count is 8.
```

### Example 2

```text
Input: n = 2
Output: 2
Explanation: Only 0 and 1 qualify; the representation of 2 is "10",
which is not a palindrome.
```

### Example 3

```text
Input: n = 31
Output: 11
Explanation: Grouping by representation length: "0" and "1" contribute 2,
then 1 palindrome of length 2, 2 of length 3, 2 of length 4 and 4 of
length 5, giving 2 + 1 + 2 + 2 + 4 = 11.
```

### Constraints

- `0 <= n <= 10¹⁵`

## Hints

### Hint 1

Work with the length of the binary representation instead of testing each
integer up to `n` individually.

### Hint 2

A binary palindrome is fully determined by its leading half — so how many
of them share one length?

### Hint 3

Palindromes strictly shorter than `n` can be tallied in bulk with powers
of two.

### Hint 4

At `n`'s own length, copy its prefix, mirror it into the trailing half,
and compare the assembled palindrome against `n`.
