# Greatest Palindromic Product

## Description

Find the largest integer that reads identically from either end and can be
written as the product of two `n`-digit integers. Because that value can be
enormous, report it modulo 1337.

A palindrome is a number whose digits are unchanged when reversed, such as
`9009` or `12321`.

### Example 1

```text
Input: n = 3
Output: 123
Explanation: The largest palindromic product of two three-digit numbers is
906609 = 993 * 913, and 906609 mod 1337 = 123.
```

### Example 2

```text
Input: n = 4
Output: 597
Explanation: Reducing the greatest palindromic four-digit product modulo
1337 gives 597.
```

### Constraints

- `1 <= n <= 8`
