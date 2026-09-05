# Closest Achievable Time

## Description

You are given a digital clock reading in `"HH:MM"` format. Build the
soonest later time achievable by redrawing all four digit positions
using only the digits currently displayed — any digit already on the
clock may be reused as many times as needed.

"Soonest later" means the closest point strictly ahead on the clock
face. If no achievable arrangement lies strictly ahead of the current
reading before midnight, the search wraps into the next day, so the
returned time may be numerically smaller than the input. The input is
guaranteed to already be a valid `"HH:MM"` reading — forms such as
`"1:34"` or `"12:9"` never appear.

### Example 1

```text
Input: time = "05:47"
Output: "05:50"
Explanation: Redrawing from the digits 0, 5, 4, 7, the nearest later
time is 05:50, three minutes ahead.
```

### Example 2

```text
Input: time = "20:00"
Output: "20:02"
Explanation: Redrawing from the digits 2, 0, 0, 0, the nearest later
time is 20:02.
```

### Constraints

- `time.length == 5`
- `time` is a valid time in the form `"HH:MM"`.
- `0 <= HH < 24`
- `0 <= MM < 60`
