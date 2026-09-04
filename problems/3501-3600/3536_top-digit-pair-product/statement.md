# Top Digit Pair Product

## Description

You are given a positive integer `n`.

Pick any two of its digits and multiply them — what is the largest product
you can get?

Note: a digit that shows up several times in `n` may be picked more than
once.

### Example 1

```text
Input: n = 87
Output: 56
Explanation:
The digits of n are [8, 7], and 8 × 7 = 56 is the only product available.
```

### Example 2

```text
Input: n = 505
Output: 25
Explanation:
The digits of n are [5, 0, 5]. The two 5s are separate digits, so they can
pair up for 5 × 5 = 25; the 0 only drags a product down.
```

### Example 3

```text
Input: n = 1000000000
Output: 0
Explanation:
The digits of n are a single 1 followed by nine 0s. Every pairing involves
a zero, so the best product is 0.
```

### Constraints

- `10 <= n <= 10⁹`

## Hints

### Hint 1

There are at most ten digits to consider — pull them out and look at them
in order.

### Hint 2

Digits are never negative, so no pair can beat the one formed by the two
largest digits.
