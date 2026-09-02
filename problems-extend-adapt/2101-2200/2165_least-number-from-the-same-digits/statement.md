# The Least Number From the Same Digits

## Description

You are given a signed integer `num`. Keeping its sign exactly as it is,
permute its digits into whichever order makes the value as small as
possible, subject to one rule: the result must not start with a zero. (Zero
itself has nothing to permute and stays zero.)

Return that minimal permutation of `num`.

### Example 1

```text
Input: num = 4021
Output: 1024
Explanation: The digits 4, 0, 2, 1 can be laid out in several orders, but
any order starting with 0 is illegal. Leading with the smallest nonzero
digit and letting the rest climb gives 1024.
```

### Example 2

```text
Input: num = -50050
Output: -55000
Explanation: The sign stays negative, and a negative number is smallest
when its magnitude is largest — so the digits 5, 0, 0, 5, 0 should run
downward as 55000, giving -55000. Leading zeros can never occur on this
side.
```

### Example 3

```text
Input: num = 312
Output: 123
Explanation: With no zero present, reading the digits in ascending order
already yields the answer.
```

### Example 4

```text
Input: num = 0
Output: 0
Explanation: The only arrangement of a lone zero is itself.
```

### Constraints

- `-10¹⁵ <= num <= 10¹⁵`

## Hints

### Hint 1

For a positive input, the leading digit should be the smallest digit that is
not zero; every remaining digit then follows in ascending order.

### Hint 2

For a negative input, a larger magnitude means a smaller value, so lay its
digits out in descending order.
