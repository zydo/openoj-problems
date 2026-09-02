# Tally Integers With Even Digit Sums

## Description

You are given a positive integer `num`. Count how many positive integers
`n` in the range `1 <= n <= num` have a digit sum that is an even
number.

The digit sum of an integer is found by adding up each of its decimal
digits.

### Example 1

```text
Input: num = 1
Output: 0
Explanation:
The only candidate is 1 itself, and its digit sum of 1 is odd, so
nothing is counted.
```

### Example 2

```text
Input: num = 45
Output: 22
Explanation:
The qualifying values begin 2, 4, 6, 8, 11, 13, 15 — twenty-two of the
integers from 1 to 45 have an even digit sum in total.
```

### Example 3

```text
Input: num = 999
Output: 499
Explanation:
Across the 999 candidates, 499 of them end up with an even digit sum.
```

### Constraints

- `1 <= num <= 1000`

## Hints

### Hint 1

The bound of 1000 is small enough that every candidate value up to `num`
can simply be tested one by one.

### Hint 2

Strip the digits off a candidate with division and remainder, add them
up, and keep the values whose total is even.
