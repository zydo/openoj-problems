# Digit Sum Divides Digit Product

## Description

You are given two positive integers `l` and `r`.

Call an integer _qualified_ when the product of its decimal digits is a multiple
of the sum of its decimal digits. Count the qualified integers `x` with
`l <= x <= r`, and return the count.

Two facts make the rule gentler than it looks: a number with a `0` digit has
digit product `0`, which is a multiple of every digit sum, and a single-digit
number has digit product equal to digit sum.

### Example 1

```text
Input: l = 21, r = 30
Output: 2
Explanation: 22 qualifies (sum 4, product 4), and 30 qualifies because its 0
digit makes the product 0. Everything else fails: 21 has sum 3 against product
2, 23 has sum 5 against product 6, and so on through 29 (sum 11, product 18).
```

### Example 2

```text
Input: l = 36, r = 45
Output: 3
Explanation: The qualifiers are 36 (sum 9, product 18), 40 (product 0), and 44
(sum 8, product 16).
```

### Example 3

```text
Input: l = 5, r = 25
Output: 8
Explanation: Every one-digit number qualifies since its product equals its
sum — here 5 through 9. Beyond them: 10 and 20 carry a 0 digit, and 22 has
product 4 against sum 4. That makes eight.
```

### Constraints

- `1 <= l <= r < 10⁹`

## Hints

### Hint 1

Counting within a range splits into two prefix counts; for each bound, build
the decimal representation digit by digit.

### Hint 2

Whether a finished number qualifies depends only on the running digit sum and
the running digit product, so those two values are the state worth carrying.

### Hint 3

Two flags complete the state: whether the prefix built so far is pinned against
the bound's own digits, and whether the number has actually started — leading
zeros must leave both accumulators untouched.
