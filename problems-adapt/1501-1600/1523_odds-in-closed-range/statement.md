# Odds in a Closed Range

## Description

Given two non-negative integers `low` and `high`, count how many odd
numbers lie in the closed interval from `low` through `high`.

### Example 1

```text
Input: low = 12, high = 17
Output: 3
Explanation: The interval holds 13, 15, and 17.
```

### Example 2

```text
Input: low = 23, high = 26
Output: 2
Explanation: The odd values in the interval are 23 and 25.
```

### Example 3

```text
Input: low = 40, high = 40
Output: 0
Explanation: The interval contains only the even number 40.
```

### Constraints

- `0 <= low <= high <= 10⁹`

## Hints

### Hint 1

When the interval's length (`high - low + 1`) is even, its odd and even
residents split the room evenly.

### Hint 2

When the length is odd, the endpoints' parities decide which parity gets
the extra resident.
