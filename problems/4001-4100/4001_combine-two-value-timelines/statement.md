# Combine Two Value Timelines

## Description

You are given two 2D integer arrays `series1` and `series2`, each holding
`[timestamp, value]` pairs sorted by strictly increasing timestamp.

A series only records the timestamps where its value actually changes: at
any other timestamp its effective value is whatever it last recorded at or
after that point — the next entry going forward — or `0` if no later entry
exists.

Build the aggregated series by summing, at every timestamp that appears in
either input, the effective values of both series at that moment. Return the
result as a 2D array of `[timestamp, summedValue]` pairs sorted by strictly
increasing timestamp.

### Example 1

```text
Input: series1 = [[2,4],[6,3]], series2 = [[1,5],[6,2]]
Output: [[1,9],[2,6],[6,5]]
Explanation: At timestamp 1, series1 has no entry, so it looks ahead to
timestamp 2's value 4; series2 reads 5 directly, giving 9. At timestamp 2,
series1 reads 4 directly, and series2 looks ahead to timestamp 6's value 2,
giving 6. At timestamp 6, series1 reads 3 directly and series2 reads 2
directly, giving 5.
```

### Example 2

```text
Input: series1 = [[3,10],[7,1]], series2 = [[5,4]]
Output: [[3,14],[5,5],[7,1]]
Explanation: At timestamp 3, series1 reads 10 directly; series2's only
entry lies ahead at timestamp 5, so its effective value here is 4, giving
14. At timestamp 5, series1 looks ahead to timestamp 7's value 1, and
series2 reads 4 directly, giving 5. At timestamp 7, series1 reads 1
directly, and series2 has nothing left at or after 7, contributing 0,
giving 1.
```

### Example 3

```text
Input: series1 = [[1,9]], series2 = [[1000000000,3]]
Output: [[1,12],[1000000000,3]]
Explanation: At timestamp 1, series1 reads 9 directly, and series2's only
entry sits far ahead at timestamp 1000000000, so that becomes its
effective value here too, giving 12. At timestamp 1000000000, series2
reads 3 directly, and series1 has nothing left at or after this point,
contributing 0.
```

### Constraints

- `1 <= series1.length, series2.length <= 10⁵`
- `series1[i].length == series2[i].length == 2`
- `1 <= series1[i][0], series2[i][0] <= 10⁹`
- `1 <= series1[i][1], series2[i][1] <= 10⁹`
- Each series is sorted in strictly increasing order of timestamp.

## Hints

### Hint 1

The set of timestamps to report is the union of both series' own
timestamps; merging two sorted lists of timestamps is the familiar
merge-sort step.

### Hint 2

Because a series' effective value at a timestamp looks forward to its next
recorded entry, sweeping timestamps from largest to smallest lets each
series carry a single running "current value" instead of searching ahead
every time.

### Hint 3

At each timestamp visited during the right-to-left sweep, refresh the
running value of whichever series has an entry exactly there, then record
the timestamp paired with the sum of both running values.
