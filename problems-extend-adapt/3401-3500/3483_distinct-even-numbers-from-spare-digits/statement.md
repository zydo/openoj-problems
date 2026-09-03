# Distinct Even Numbers From Spare Digits

## Description

You are given an array of digits. How many distinct three-digit even
numbers can be assembled from that supply?

Two rules govern the assembly:

- Every number is built from array elements, and each element can be
  consumed at most once per number — a digit value appears in the number
  no more often than it appears in the array.
- The first digit of a number may not be zero.

Count the distinct numbers that satisfy both rules; two numbers are the
same only when they read identically.

### Example 1

```text
Input: digits = [5,7,2,9]
Output: 6
Explanation: The units digit must be 2, and the remaining two positions
take two of 5, 7, 9: the buildable numbers are 572, 592, 752, 792, 952,
and 972.
```

### Example 2

```text
Input: digits = [4,4,0]
Output: 2
Explanation: Both 404 and 440 consume the two 4s together with the 0.
Arranging them as 044 would start with a zero, which is not a three-digit
number.
```

### Example 3

```text
Input: digits = [8,8,8,8]
Output: 1
Explanation: The only even number reachable from four 8s is 888 itself.
```

### Example 4

```text
Input: digits = [1,0,3]
Output: 2
Explanation: Zero is the only even digit available, so it must sit in
the units place: 130 and 310 both qualify, while no other arrangement is
even.
```

### Constraints

- `3 <= digits.length <= 10`
- `0 <= digits[i] <= 9`

## Hints

### Hint 1

The supply is tiny, so exhaustive enumeration over the whole answer
space is affordable.

### Hint 2

Only the count of each digit value matters — tally the supply once, then
judge every candidate number against that tally.

### Hint 3

A candidate is three choices: a nonzero leading digit, any middle digit,
and an even final digit.
