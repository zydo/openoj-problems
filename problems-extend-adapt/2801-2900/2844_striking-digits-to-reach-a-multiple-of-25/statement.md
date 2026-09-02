# Striking Digits To Reach A Multiple Of 25

## Description

A non-negative integer arrives as a string of digits `num`, guaranteed to
start with a nonzero digit.

The only available edit is deletion: point at any digit of `num` and strike
it out. Striking every digit leaves the number 0.

The target is any integer divisible by 25. Return the fewest deletions
after which the remaining number is a multiple of 25.

### Example 1

```text
Input: num = "60255"
Output: 1
Explanation: Striking the digit at index 3 leaves "6025", a multiple of
25. The original number ends in 55, so zero strikes cannot work, and one
is optimal.
```

### Example 2

```text
Input: num = "975"
Output: 0
Explanation: The number 975 is itself divisible by 25, so no digit needs
to be removed at all.
```

### Example 3

```text
Input: num = "4774"
Output: 4
Explanation: The digits hold no 0 and no 5, so no surviving number can end
in 00, 25, 50, or 75. The only reachable multiple of 25 is 0 itself,
obtained by striking out all four digits.
```

### Constraints

- `1 <= num.length <= 100`
- `num` consists only of the digits '0' through '9'.
- `num` contains no leading zeros.

## Hints

### Hint 1

Divisibility by 25 reads off the final two digits alone: a number is a
multiple of 25 exactly when its last two digits are 00, 25, 50, or 75.
Striking everything, or leaving a lone '0', also produces 0.

### Hint 2

Fix the closing pair: take the rightmost slot for an ending's second digit
and the nearest matching digit to its left. Digits beyond the pair must go,
digits between the pair must go, but the entire prefix before it is free —
which totals `n - i - 2` strikes for a pair starting at `i`. Combine the
four endings and the degenerate candidates (one kept '0' costs `n - 1`,
everything costs `n`) and take the cheapest.
