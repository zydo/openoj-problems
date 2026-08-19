# Digit Occurrences in a Range

## Description

A digit `d` and the bounds `low` and `high` of an inclusive interval of
positive integers are given.

Write out every integer from `low` through `high` in decimal and tally how
often the digit `d` appears across all of them. A number showing `d` in two
positions counts twice.

Return the tally.

### Example 1

```text
Input: d = 2, low = 1, high = 25
Output: 9
Explanation: The numbers 2 and 12 each contribute one appearance. The run
20, 21, 22, 23, 24, 25 contributes seven — 22 carries a pair of twos.
```

### Example 2

```text
Input: d = 0, low = 305, high = 452
Output: 30
Explanation: The tens place holds a 0 in 305-309 and in 400-409, which is
fifteen numbers. The units place holds a 0 in 310, 320, ..., 390 and in
400, 410, ..., 450 — fifteen more.
```

### Example 3

```text
Input: d = 6, low = 1, high = 66
Output: 14
Explanation: Six appearances come from 6, 16, 26, 36, 46, 56. The run
60-66 adds eight, since 66 holds two sixes.
```

### Constraints

- `0 <= d <= 9`
- `1 <= low <= high <= 2 * 10^8`

## Hints

### Hint 1

Walking the interval and testing each number cannot survive bounds this
large. Suppose you could compute, for any `x`, the total appearances of `d`
across `1..x` — what would the interval answer then be?

### Hint 2

Build that prefix total one digit position at a time: for each position of
`x`, count the integers up to `x` whose digit there equals `d`, splitting
them by whether their digits above the position fall short of, match, or
exceed those of `x`.

### Hint 3

`d = 0` is the delicate case, because a number's written form starts at its
first nonzero digit. Places that only a leading zero could fill must stay
out of the count.
