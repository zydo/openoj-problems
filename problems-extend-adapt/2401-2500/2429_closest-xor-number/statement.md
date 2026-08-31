# Closest Xor Number

## Description

You are given two positive integers `num1` and `num2`. A positive integer
`x` is wanted such that:

- `x` has the same number of set bits as `num2`, and
- the value `x XOR num1` is as small as possible.

Here `XOR` is the bitwise exclusive-or operation, and the number of set
bits of an integer is the count of `1`s in its binary representation. The
test cases are generated so that `x` is uniquely determined. Return `x`.

### Example 1

```text
Input: num1 = 8, num2 = 7
Output: 11
Explanation: num2 = 7 = 0111 carries three set bits, so x must too. Keeping
num1's own set bit (bit 3, value 8) makes that bit free in the xor; the two
remaining set bits land on the lowest zero positions, giving x = 1011 = 11.
The xor 11 XOR 8 = 3 is minimal.
```

### Example 2

```text
Input: num1 = 10, num2 = 25
Output: 11
Explanation: num2 = 25 = 11001 has three set bits. num1 = 10 = 1010 has two
set bits, which x keeps outright (x = 10), and the one surplus set bit is
placed at the lowest zero position (bit 0), giving x = 11 = 1011. Then
11 XOR 10 = 1, which is minimal.
```

### Example 3

```text
Input: num1 = 7, num2 = 8
Output: 4
Explanation: num2 = 8 = 1000 has exactly one set bit, so x must be a power
of two. num1 = 7 = 0111; its highest set bit is bit 2 (value 4), and
x = 4 = 0100 gives 4 XOR 7 = 3, better than any other single-set-bit value.
```

### Constraints

- `1 <= num1, num2 <= 10⁹`

## Hints

### Hint 1

A set bit of `num1` that survives into `x` costs nothing in the xor, so the
set-bit budget should first be spent on `num1`'s own set bits.

### Hint 2

If any budget remains after keeping all of `num1`'s set bits, place the
surplus at the lowest zero bits of `x`, since each such bit adds exactly
its place value to the xor.
