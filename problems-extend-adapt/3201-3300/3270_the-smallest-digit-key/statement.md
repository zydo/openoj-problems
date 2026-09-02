# The Smallest-Digit Key

## Description

Three positive integers `num1`, `num2`, and `num3` are given. Picture
each one as a four-digit string, padded on the left with zeros when it
has fewer than four digits. The key is assembled one position at a time:
at each of the four positions, the key receives the smallest digit that
appears at that position among the three padded numbers. Return the key
as an ordinary integer, so leading zeros simply fall away.

### Example 1

```text
Input: num1 = 451, num2 = 72, num3 = 3090
Output: 50
Explanation: The padded forms are "0451", "0072", and "3090". Taking
the smallest digit at each of the four positions gives "0050", which is
50 as a number.
```

### Example 2

```text
Input: num1 = 7, num2 = 70, num3 = 700
Output: 0
Explanation: Every position sees a 0 in at least one of the three
padded numbers, so the key is "0000", i.e. 0.
```

### Example 3

```text
Input: num1 = 2984, num2 = 1765, num3 = 305
Output: 304
Explanation: The position-wise minima of "2984", "1765", and "0305"
read 0, 3, 0, 4, giving the key 304.
```

### Constraints

- `1 <= num1, num2, num3 <= 9999`

## Hints

### Hint 1

No string handling is needed: the digit of `num` at `place` (1, 10, 100, 1000) is `(num / place) % 10` using integer division.

### Hint 2

Sweep the four places from most to least significant, take the minimum
of the three digits at each, and fold it into the running answer with
`key = key * 10 + digit`. That fold never carries a leading zero.
