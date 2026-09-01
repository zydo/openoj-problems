# Least Qualifying Multiple From Two Digits

## Description

You are given an integer `k` together with two decimal digits `digit1`
and `digit2`. Find the smallest integer that clears all three bars:

- it is strictly greater than `k`,
- it is a multiple of `k`, and
- every digit of its decimal representation is `digit1` or `digit2`.

Return that integer. When nothing qualifies — or when the smallest
qualifier would not fit in a signed 32-bit integer (2³¹ - 1) — return
`-1`.

### Example 1

```text
Input: k = 1, digit1 = 6, digit2 = 2
Output: 2
Explanation: With k = 1 every integer above 1 is a multiple, so the
smallest buildable candidate, 2, already wins.
```

### Example 2

```text
Input: k = 7, digit1 = 4, digit2 = 9
Output: 49
Explanation: The numbers buildable from {4, 9} below 49 are 4, 9, 44 —
none is greater than 7 and divisible by it. 49 = 7 × 7 is the first
that is.
```

### Example 3

```text
Input: k = 12, digit1 = 6, digit2 = 4
Output: 444
Explanation: 44, 46, 64 and 66 all miss divisibility by 12; 444 = 12 ×
37 is the smallest buildable multiple.
```

### Example 4

```text
Input: k = 10, digit1 = 2, digit2 = 5
Output: -1
Explanation: Every multiple of 10 ends in the digit 0, which is neither
2 nor 5, so no candidate can exist.
```

### Constraints

- `1 <= k <= 1000`
- `0 <= digit1 <= 9`
- `0 <= digit2 <= 9`

## Hints

### Hint 1

How large can a candidate ever be before it leaves 32-bit territory?
Ten digits at most — and from two digits that bounds the whole family
of buildable numbers at a few thousand values.

### Hint 2

Grow the candidates one digit at a time, never starting with 0, then
walk them in increasing order and stop at the first value that beats
`k` and divides evenly.
