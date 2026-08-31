# Minimum Clock Gap

## Description

You are given a list of clock readings, each written in 24-hour `"HH:MM"`
format. Return the smallest number of minutes separating any two readings
in the list.

### Example 1

```text
Input: timePoints = ["23:50","00:05"]
Output: 15
```

### Example 2

```text
Input: timePoints = ["12:00","12:00","23:59"]
Output: 0
```

### Constraints

- `2 <= timePoints.length <= 2 * 10⁴`
- Every entry of `timePoints` follows the `"HH:MM"` format.
