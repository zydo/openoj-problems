# Rolling Stream Average

## Description

Maintain the average of the most recent values in an integer stream. The
window may hold at most `size` values; before it fills, average all values
received so far, and afterward discard the oldest value whenever a new one
arrives.

Implement the `RollingAverage` class:

- `RollingAverage(int size)` fixes the maximum window length.
- `double appendValue(int val)` appends `val` and returns the current window's
  arithmetic mean.

Return the full-precision quotient of the window sum and its current count.

### Example 1

```text
Input:
["RollingAverage", "appendValue", "appendValue", "appendValue", "appendValue", "appendValue"]
[[4], [6], [-2], [10], [2], [8]]
Output: [null, 6.0, 2.0, 4.666666666666667, 4.0, 4.5]
Explanation: The final window is [-2,10,2,8], whose average is 4.5.
```

### Constraints

- `1 <= size <= 1000`
- `-10⁵ <= val <= 10⁵`
- No more than `10⁴` calls are made to `appendValue`.
