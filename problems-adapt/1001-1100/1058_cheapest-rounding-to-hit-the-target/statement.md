# Cheapest Rounding To Hit The Target

## Description

You are given an array `prices` of `n` prices, each written as a string
with exactly three digits after the decimal point, together with an
integer `target`. Every price must be rounded, in isolation, either
down to an integer or up to an integer, and the rounded values must add
up to exactly `target`.

A price's rounding error is the absolute difference between the price
and the integer it became. The total error is the sum of the `n`
individual errors. Return the minimum total error over every way of
rounding that reaches `target`, formatted as a string with exactly
three digits after the decimal point. If no rounding plan sums to
`target`, return the string `"-1"`.

### Example 1

```text
Input: prices = ["1.400","2.300","3.200"], target = 7
Output: "1.100"
Explanation: The floors sum to 6, so exactly one price must be rounded
up. Rounding up the one with the largest fraction, 1.400, costs the
least: 0.600 + 0.300 + 0.200 = 1.100.
```

### Example 2

```text
Input: prices = ["2.500","3.500"], target = 5
Output: "1.000"
Explanation: Rounding both prices down already sums to 5, costing
0.500 + 0.500 = 1.000.
```

### Example 3

```text
Input: prices = ["1.100","1.100"], target = 5
Output: "-1"
Explanation: The rounded values can sum to at most 4, so the target
can never be met.
```

### Constraints

- `1 <= prices.length <= 500`
- Each string `prices[i]` represents a real number in the range
  `[0.0, 1000.0]` and has exactly 3 decimal places.
- `0 <= target <= 10⁶`

## Hints

### Hint 1

Prices that are already integers are forced: they contribute nothing
to the error and take no part in any choice. For the rest, flooring
everything gives the smallest reachable sum, and ceiling every
fractional price gives the largest — anything between those bounds is
achievable.

### Hint 2

You must promote exactly `target - sum(floors)` fractional prices from
floor to ceiling. Promoting a price with fraction `f` trades an error
of `f` for one of `1 - f`, so the largest fractions are the cheapest
to promote.
