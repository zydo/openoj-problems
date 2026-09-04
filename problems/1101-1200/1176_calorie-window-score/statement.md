# Calorie Window Score

## Description

A dieter keeps a log of daily intake: on day `i` they consumed
`calories[i]` calories. Their coach reviews the log in windows of `k`
consecutive days. For each window — `calories[i]` through
`calories[i + k - 1]`, for every valid start `i` — let `T` be the window's
total intake, and score it against the plan's band:

- `T < lower`: the window is under plan, and the dieter loses 1 point;
- `T > upper`: the window is over plan, and the dieter gains 1 point;
- any total inside the band is on plan and changes the score by nothing.

The dieter starts at zero points. Return the point total once every window
of the `calories.length`-day log has been scored. The total is allowed to
be negative.

### Example 1

```text
Input: calories = [2,7,4,9,1], k = 2, lower = 10, upper = 14
Output: -1
Explanation: There are four windows of two days, totalling 9, 11, 13, and
10. Only the first window falls below lower, so one point is lost and none
is gained.
```

### Example 2

```text
Input: calories = [5,5,5,5], k = 3, lower = 10, upper = 12
Output: 2
Explanation: The two windows of three days each total 15, which is over
upper, so the dieter gains one point per window.
```

### Example 3

```text
Input: calories = [8,0,8,0,8], k = 1, lower = 5, upper = 5
Output: 1
Explanation: Each day is its own window. A day of 8 is over the band
(+1) and a day of 0 is under it (-1); over five alternating days that nets
to 1.
```

### Constraints

- `1 <= k <= calories.length <= 10⁵`
- `0 <= calories[i] <= 20000`
- `0 <= lower <= upper`

## Hints

### Hint 1

Windows that start one day apart share all but two of their days — extend
a running sum by the day that enters and the day that leaves rather than
re-summing from scratch.

### Hint 2

The scoring itself is a two-way comparison of the running total against
the band's ends; count `+1`, `-1`, or nothing and keep moving.
