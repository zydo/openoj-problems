# Squared Digit Margin

## Description

You are given a positive integer `n`.

Look at the decimal digits of `n` and form two totals: the plain digit sum
and the sum that squares every digit before adding. The margin of `n` is the
squared total minus the plain total.

Call `n` strong when its margin is `50` or more. Report whether `n` is
strong.

### Example 1

```text
Input: n = 4500
Output: false
Explanation: The digits 4, 5, 0, 0 give a plain sum of 9 and a squared sum
of 16 + 25 = 41. The margin 41 - 9 = 32 falls short of 50, so the answer is
false.
```

### Example 2

```text
Input: n = 29
Output: true
Explanation: The digits 2 and 9 give a plain sum of 11 and a squared sum of
4 + 81 = 85. The margin 85 - 11 = 74 clears 50, so the answer is true.
```

### Example 3

```text
Input: n = 1
Output: false
Explanation: The single digit 1 gives a plain sum of 1 and a squared sum of
1, a margin of 0.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Strip digits off `n` one at a time with division and remainder; both totals
can be accumulated in the same pass.

### Hint 2

Only the final comparison matters: strong means `squaredSum - plainSum >= 50`.
