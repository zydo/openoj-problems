# Smallest Greater Digit Rearrangement

## Description

You are given a positive integer `n`. Shuffle its digits into a new
arrangement so that the resulting number is strictly greater than `n` while
using exactly the same multiset of digits, and among all arrangements that
qualify, return the smallest one. If no rearrangement of the digits beats
`n`, return `-1`.

The value you return must fit in a signed 32-bit integer. If a qualifying
rearrangement exists but overflows that range, return `-1` instead of the
overflowing value.

### Example 1

```text
Input: n = 289
Output: 298
```

### Example 2

```text
Input: n = 531
Output: -1
```

### Constraints

- `1 <= n <= 2³¹ - 1`
