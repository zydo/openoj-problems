# Digit Divisor Numbers

## Description

Call a number a **digit divisor number** when it's evenly divisible by
every one of its own decimal digits. For instance, 128 qualifies because
`128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.

Because division by zero is undefined, a number containing the digit `0`
can never qualify — no digit-divisor number contains a `0`.

Given integers `left` and `right`, return every digit divisor number in
the inclusive range `[left, right]`, in increasing order.

### Example 1

```text
Input: left = 1, right = 30
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22,24]
```

### Example 2

```text
Input: left = 90, right = 130
Output: [99,111,112,115,122,124,126,128]
```

### Constraints

- `1 <= left <= right <= 10⁴`

## Hints

### Hint 1

For each candidate in the range, peel off its digits one at a time (for
example by repeated `% 10` and `/ 10`, or by converting it to a string)
and check that none of them is zero and that each one divides the
original number.
