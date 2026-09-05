# One Digit For The Largest Value

## Description

A very large integer `n` arrives as a string, together with a single
digit `x`. Every digit involved — those of `n` and `x` itself — lies in
`[1, 9]`, and `n` may carry a minus sign.

Exactly one insertion is allowed: place `x` between two digits of `n`
(or at either visible end) so that the resulting number is as large as
possible. The digit may not go to the left of a minus sign.

- with `n = 73` and `x = 6`, the best slot is between 7 and 3,
  producing `763`;
- with `n = -55` and `x = 2`, the best slot is before the first 5,
  producing `-255`.

Return the largest value reachable, as a string.

### Example 1

```text
Input: n = "71", x = 5
Output: "751"
Explanation: Placing 5 before the 1 beats both "571" and "715".
```

### Example 2

```text
Input: n = "-962", x = 4
Output: "-4962"
Explanation: The candidates are "-4962", "-9462", "-9642", and "-9624";
the largest is "-4962".
```

### Example 3

```text
Input: n = "95", x = 5
Output: "955"
Explanation: The digit can land in one of three slots, giving "595",
"955", or "955" — the largest is "955".
```

### Constraints

- `1 <= n.length <= 10⁵`
- `1 <= x <= 9`
- The digits in `n` are in the range `[1, 9]`.
- `n` is a valid representation of an integer.
- In the case of a negative `n`, it will begin with `'-'`.

### Hint 1

For a negative number, maximizing the value means making its absolute
part as small as possible — the comparison flips.

### Hint 2

Scanning from the left, inserting before the first digit that is
smaller than `x` (positive case) is optimal, because earlier digits
hold higher place values.

### Hint 3

For the negative case the same argument applies with the comparison
reversed: stop at the first digit greater than `x`.
