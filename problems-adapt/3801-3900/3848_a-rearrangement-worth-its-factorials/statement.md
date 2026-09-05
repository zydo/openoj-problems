# A Rearrangement Worth Its Factorials

## Description

An integer `n` is given. Call a number self-factorial when the sum of the
factorials of its digits equals the number itself — for instance a three-digit
number whose digits are 1, 4, 5 would qualify, since 1! + 4! + 5! = 1 + 24 +
120 = 145.

Decide whether at least one arrangement of all of `n`'s digits — the original
order counts — forms a self-factorial number. Rearranging keeps every digit
exactly once, and an arrangement whose first digit is 0 is not a legal number.

Return `true` if some legal arrangement qualifies, and `false` otherwise.

Note: `x!` (the factorial of a non-negative integer `x`) is the product of
every positive integer up to `x`, with `0! = 1`.

### Example 1

```text
Input: n = 415
Output: true
Explanation: Every arrangement of 415 shares the digit-factorial sum
1! + 4! + 5! = 145, and the arrangement 145 equals that very sum, so
a qualifying rearrangement exists.
```

### Example 2

```text
Input: n = 58504
Output: true
Explanation: The digits total 4! + 0! + 5! + 8! + 5! = 24 + 1 + 120 +
40320 + 120 = 40585, which is itself an arrangement of those digits.
```

### Example 3

```text
Input: n = 540
Output: false
Explanation: The digit-factorial sum is 5! + 4! + 0! = 145, but 145's
digits {1, 4, 5} are not the digits {5, 4, 0}, so no arrangement can
equal the sum.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Tabulate the factorial of each digit 0 through 9, then total the
factorials of `n`'s digits.

### Hint 2

The total ignores digit order, so one comparison against `n`'s digit
multiset decides everything — remembering that the written total never
begins with zero anyway.
