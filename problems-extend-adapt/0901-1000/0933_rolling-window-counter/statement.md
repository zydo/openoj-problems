# Rolling Window Counter

## Description

Track how many requests arrived inside a trailing three-second window. A
`record` call adds a request at the given millisecond timestamp and reports
how many requests — including the new one — fall in the inclusive range
`[t - 3000, t]`. Every call supplies a strictly larger timestamp than the
previous one.

Implement the `RollingWindowCounter` class:

- `RollingWindowCounter()` initializes the counter with no requests.
- `int record(int t)` logs a request at time `t` and returns the number of
  requests that happened in the inclusive range `[t - 3000, t]`.

### Example 1

```text
Input:
["RollingWindowCounter", "record", "record", "record", "record", "record", "record"]
[[], [100], [200], [300], [1300], [3100], [4100]]
Output: [null, 1, 2, 3, 4, 5, 3]
Explanation: Each early call widens the window: the counts at 100, 200, 300,
and 1300 climb 1, 2, 3, 4. At 3100 the window is [100, 3100], which still
holds all five requests, so 5. At 4100 the window slides to [1100, 4100] and
only the requests at 1300, 3100, and 4100 remain inside, so 3.
```

### Constraints

- `1 <= t <= 10⁹`
- Each test case calls `record` with strictly increasing values of `t`.
- At most `10⁴` calls are made to `record`.
