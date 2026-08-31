# Count Distinct-Digit Numbers

## Description

For a nonnegative integer `n`, count all integers `x` in the half-open range
`0 <= x < 10ⁿ` whose decimal representation uses no digit more than once.
The number `0` is included.

### Example 1

```text
Input: n = 3
Output: 739
Explanation: There are 1000 candidates from `0` through `999`; 739 of them
have no repeated decimal digit.
```

### Example 2

```text
Input: n = 1
Output: 10
```

### Example 3

```text
Input: n = 0
Output: 1
Explanation: The range contains only `0`.
```

### Constraints

- `n` is an integer in the range `0` through `8`.

## Hints

### Hint 1

Count valid numbers by their decimal length instead of examining every number
in the range.

### Hint 2

For a positive `k`-digit number, the first digit has nine choices. Each later
position must select a digit not used earlier, and zero is available after the
first position.

### Hint 3

Add the counts for lengths from zero through `n`. No number with more than ten
digits can have all decimal digits distinct.
