# The Weighted Digit Tally

## Description

For an integer `n`, let `freq(d)` be the number of times the decimal digit
`d` occurs in it.

The score of `n` is the total of `d * freq(d)` over every distinct digit `d`
that appears in `n`.

Return the score of `n`.

### Example 1

```text
Input: n = 3408
Output: 15
Explanation:
    Each of the digits 3, 4, 0, and 8 occurs exactly once, contributing
    3, 4, 0, and 8 points respectively, for a total of 15.
```

### Example 2

```text
Input: n = 454
Output: 13
Explanation:
    The digit 4 occurs twice, contributing 4 * 2 = 8, and the digit 5
    occurs once, contributing 5. The score is 8 + 5 = 13.
```

### Example 3

```text
Input: n = 7
Output: 7
Explanation:
    A single digit contributes itself: 7 * 1 = 7.
```

### Constraints

- `1 <= n <= 10⁹`

### Hint 1

Adding up `d * freq(d)` over the distinct digits is the same as adding up
every occurrence of every digit — the plain sum of the decimal digits of
`n`.
