# Counting the Digits With No Remainder

## Description

You are given a positive integer `num`. Look at each digit of `num` in
turn — counted with multiplicity, so a digit appearing several times is
looked at once per occurrence — and report how many of them go into the
number with nothing left over.

A value `d` goes into `x` with no remainder when `x % d == 0`.

### Example 1

```text
Input: num = 12
Output: 2
Explanation: Both of its digits go in evenly: 12 leaves no remainder
after division by 1 or by 2.
```

### Example 2

```text
Input: num = 456
Output: 2
Explanation: 456 is divisible by 4 and by 6, but a remainder is left
after division by 5.
```

### Example 3

```text
Input: num = 739
Output: 0
Explanation: None of 7, 3, or 9 divides 739 without a remainder.
```

### Constraints

- `1 <= num <= 10⁹`
- `num` has no `0` among its digits.

## Hints

### Hint 1

The last digit always falls out on its own: take the value modulo 10.

### Hint 2

Floor-dividing the value by 10 discards that last digit and pulls the
next one into its place, so the two operations together walk every
digit.

### Hint 3

To learn whether a digit goes into the number, divide the number by
that digit and inspect the remainder — remember to test against the
original value, not the shrinking one.
