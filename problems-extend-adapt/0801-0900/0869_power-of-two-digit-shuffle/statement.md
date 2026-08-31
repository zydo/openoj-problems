# Power-of-Two Digit Shuffle

## Description

You may rearrange the decimal digits of a positive integer `n` in any order,
but the resulting number cannot start with zero. Determine whether some legal
rearrangement is a power of two.

The original digit order is also allowed. Return `true` when such a
rearrangement exists and `false` otherwise.

### Example 1

```text
Input: n = 821
Output: true
Explanation: Rearranging the digits as 128 produces 2⁷.
```

### Example 2

```text
Input: n = 123
Output: false
Explanation: No power of two has exactly the digits 1, 2, and 3.
```

### Constraints

- `1 <= n <= 10⁹`
