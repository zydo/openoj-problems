# Price Drop Streaks

## Description

You are handed a stock's day-by-day price history as an integer array `prices`,
where `prices[i]` is the closing price on day `i`.

Call a stretch of one or more consecutive days a drop streak when every day in
the stretch after the first closes exactly one unit below the day before it; a
lone day is a drop streak of length one.

Count the contiguous stretches of the history that are drop streaks.

### Example 1

```text
Input: prices = [4,3,2,6,5]
Output: 9
Explanation: The falling runs are [4,3,2] and [6,5]. The first holds
[4], [3], [2], [4,3], [3,2], [4,3,2] and the second holds [6], [5], [6,5],
for 9 stretches in all.
```

### Example 2

```text
Input: prices = [9,7,7,6]
Output: 5
Explanation: The five drop streaks are [9], [7], [7], [6] and [7,6].
The gap from 9 to 7 is two units, so [9,7] does not qualify.
```

### Example 3

```text
Input: prices = [10]
Output: 1
Explanation: The single day [10] is itself a drop streak.
```

### Constraints

- `1 <= prices.length <= 10⁵`
- `1 <= prices[i] <= 10⁵`

## Hints

### Hint 1

Everything hinges on one question per gap: does the price fall by exactly one
from one day to the next? The history splits into maximal runs of consecutive
yes-answers, and the answer is assembled from those runs.

### Hint 2

Walk the array once, keeping the length of the drop streak that ends at the
current day. A qualifying gap makes it one longer; anything else restarts it
at one.

### Hint 3

A streak of length `k` contains exactly `k` streaks that end at one of its
days. So the running length you track is already each day's contribution —
just add it up.
