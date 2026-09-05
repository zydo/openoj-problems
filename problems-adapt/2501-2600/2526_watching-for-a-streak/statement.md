# Watching For A Streak

## Description

A watcher is tuned to one target value and one window width. Numbers
arrive one at a time, and after each arrival the watcher answers one
question: do the last `k` arrivals — the entire window — all equal the
target? Until `k` numbers have arrived at all, the answer is no.

Implement the `StreakWatcher` class:

- `StreakWatcher(int value, int k)` initializes the watcher with an
  empty stream, the target `value`, and the window width `k`.
- `boolean consec(int num)` appends `num` to the stream and returns
  `true` if the last `k` numbers in the stream all equal `value`, and
  `false` otherwise (including when fewer than `k` numbers have
  arrived).

### Example 1

```text
Input:
["StreakWatcher", "consec", "consec", "consec", "consec", "consec", "consec"]
[[7, 2], [7], [9], [7], [7], [7], [1]]
Output: [null, false, false, false, true, true, false]
Explanation:
StreakWatcher watcher = new StreakWatcher(7, 2); // target 7, window 2.
watcher.consec(7); // only 1 arrival so far, return false.
watcher.consec(9); // the last 2 arrivals are [7, 9], return false.
watcher.consec(7); // the last 2 arrivals are [9, 7], return false.
watcher.consec(7); // the last 2 arrivals are [7, 7], return true.
watcher.consec(7); // the last 2 arrivals are still 7s, return true.
watcher.consec(1); // the last 2 arrivals are [7, 1], return false.
```

### Constraints

- `1 <= value, num <= 10⁹`
- `1 <= k <= 10⁵`
- At most `10⁵` calls in total are made to `consec`.

## Hints

### Hint 1

You never need the stream's history — only how many of the most recent
arrivals have matched the target.

### Hint 2

Keep one counter of the current trailing match run. Each arrival resets
it to `0` on a miss or increments it on a hit; the answer is simply
whether that counter has reached `k`.
