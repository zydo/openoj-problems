# Peak Interval Overlap

## Description

You are given a list of intervals, where `intervals[i] = [start_i, end_i]`. An
interval is running at every instant from its start up to but not including its
end — so `[3, 6]` runs at instant 5 and has already finished at instant 6.

Return the largest number of intervals that are running at one and the same
instant.

Equivalently: the smallest size of a pool of interchangeable slots such that
every interval can occupy a slot without ever sharing it with a running
neighbour.

### Example 1

```text
Input: intervals = [[10,40],[20,30],[35,50]]
Output: 2
Explanation: At instant 25 the first two are running. At instant 38 the first
and third are. No instant has three.
```

### Example 2

```text
Input: intervals = [[1,4],[4,7]]
Output: 1
Explanation: The first interval is finished by the time the second begins, so
the two never run together.
```

### Example 3

```text
Input: intervals = [[1,9],[2,6],[4,8],[10,15]]
Output: 3
Explanation: Every instant from 4 up to 6 has the first three running at once.
The fourth interval runs on its own.
```

### Constraints

- `1 <= intervals.length <= 10^4`
- Each interval satisfies `0 <= start_i < end_i <= 10^6`.

## Hints

### Hint 1

The answer is witnessed by a single instant, and the cast of running intervals
only changes at a start or an end. That suggests visiting the intervals in the
order their activity begins.

### Hint 2

Walk them by start. The current interval cares about exactly one fact about the
running ones: the earliest end among them, because that is the first moment the
count can drop.

### Hint 3

A structure that always hands back its smallest element keeps that earliest end
within reach — a min-heap of end times.

### Hint 4

If that smallest end is at most the current start, one interval has finished
and the count goes neither up nor down; otherwise the count grows by one. The
largest count seen is the answer.
