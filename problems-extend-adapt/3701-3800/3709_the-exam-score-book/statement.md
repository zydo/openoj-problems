# The Exam Score Book

## Description

A student keeps sitting exams and writing each result down in a book:
every entry records the exam's time and the score earned. From time to
time they want a total — the sum of the scores earned inside some
stretch of time.

Implement the `ScoreBook` class:

- `ScoreBook()` initializes the book with no entries.
- `void record(int time, int score)` records a new exam taken at time
  `time` with score `score`.
- `long long windowTotal(int startTime, int endTime)` returns the total
  of the scores of every exam recorded inside the inclusive interval
  `[startTime, endTime]`. If no recorded exam falls inside the
  interval, return `0`.

The calls obey a chronological discipline:

- Every `record` call carries a strictly larger `time` than all earlier
  calls.
- A query never reaches into the future: if the most recent `record`
  used time `t`, then every `windowTotal` call satisfies
  `startTime <= endTime <= t`.

### Example 1

```text
Input:
["ScoreBook", "record", "windowTotal", "record", "windowTotal", "windowTotal", "windowTotal"]
[[], [2, 70], [1, 2], [6, 85], [3, 6], [1, 6], [4, 5]]
Output: [null, null, 70, null, 85, 155, 0]
Explanation:
ScoreBook book = new ScoreBook();
book.record(2, 70);     // an exam at time 2 scores 70.
book.windowTotal(1, 2); // that exam lies in [1, 2]; return 70.
book.record(6, 85);     // an exam at time 6 scores 85.
book.windowTotal(3, 6); // the time-2 exam is outside [3, 6]; return 85.
book.windowTotal(1, 6); // both exams lie inside; return 70 + 85 = 155.
book.windowTotal(4, 5); // nothing was recorded in [4, 5]; return 0.
```

### Example 2

```text
Input:
["ScoreBook", "record", "record", "windowTotal", "windowTotal", "windowTotal"]
[[], [10, 50], [20, 60], [10, 20], [11, 19], [20, 20]]
Output: [null, null, null, 110, 0, 60]
Explanation:
ScoreBook book = new ScoreBook();
book.record(10, 50);      // an exam at time 10 scores 50.
book.record(20, 60);      // an exam at time 20 scores 60.
book.windowTotal(10, 20); // both exams lie inside; return 50 + 60 = 110.
book.windowTotal(11, 19); // neither exam falls inside; return 0.
book.windowTotal(20, 20); // only the time-20 exam lies inside; return 60.
```

### Constraints

- `1 <= time <= 10⁹`
- `1 <= score <= 10⁹`
- `1 <= startTime <= endTime <= t`, where `t` is the `time` of the most
  recent `record` call
- `record` calls are made with strictly increasing `time`
- The first call after `ScoreBook()` is always `record`
- At most `10⁵` calls in total are made to `record` and `windowTotal`

## Hints

### Hint 1

Each `record` can append to two growing arrays: the times, and a
running prefix total of scores — entry `i` of the second array is the
sum of the first `i + 1` scores.

### Hint 2

Answer a query by binary-searching the sorted times for the first entry
at or after `startTime` and the last entry at or before `endTime`; the
answer is the difference of the two flanking prefix totals, or `0` when
the window holds nothing.
