# Write The Fraction As A Decimal

## Description

You are given two integers — a `numerator` and a `denominator` — naming a
rational number, and must produce its decimal expansion as a string.

Perform the division digit by digit. When the expansion terminates, return
the finite decimal. When it repeats, wrap only the endlessly cycling block
of digits in parentheses, keeping the digits before the cycle — the
pre-period — outside them. Open the parentheses at the first digit of the
earliest cycle: that rendering is the one the judge compares against.

The result carries a minus sign exactly when the fraction's value is
negative; a zero result never gets a sign. The magnitude of the inputs can
exceed the positive range of a 32-bit integer, so take care with the
extreme values.

It is guaranteed that the answer string for every provided input is
shorter than 10⁴ characters.

### Example 1

```text
Input: numerator = 7, denominator = 5
Output: "1.4"
Explanation: The division terminates after one fractional digit.
```

### Example 2

```text
Input: numerator = -9, denominator = 4
Output: "-2.25"
Explanation: A negative fraction whose expansion still terminates.
```

### Example 3

```text
Input: numerator = 5, denominator = 84
Output: "0.05(952380)"
Explanation: The digits settle into a six-digit cycle after a two-digit
pre-period, so the parentheses open at the third fractional digit.
```

### Constraints

- `-2³¹ <= numerator, denominator <= 2³¹ - 1`
- `denominator != 0`

## Hints

### Hint 1

The grade-school long division procedure is the entire algorithm: divide,
keep the remainder, shift it one decimal place, repeat.

### Hint 2

A remainder is a small bounded quantity, so it cannot stay new forever.
Log the position at which each remainder first appears.

### Hint 3

The instant a remainder shows up a second time, the digits since its first
appearance are the cycle — close the parentheses there.

### Hint 4

Mind the corners: zero numerators, sign placement, and the one input whose
absolute value has no 32-bit positive twin.
