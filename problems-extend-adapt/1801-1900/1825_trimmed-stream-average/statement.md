# Trimmed Stream Average

## Description

Integers arrive one at a time as a stream. After each arrival you may
ask for a trimmed average over the most recent window: copy the last
`m` arrivals, discard the `k` smallest and the `k` largest of them, and
average what is left, rounding down. Until `m` arrivals exist the answer
is defined as `-1`.

Implement the `TrimmedAverage` class:

- `TrimmedAverage(int m, int k)` initializes the structure with an empty
  stream and the two window parameters.
- `void addElement(int num)` appends `num` to the stream.
- `int trimmedAverage()` returns the trimmed average of the last `m`
  elements rounded down to the nearest integer, or `-1` when fewer than
  `m` elements have arrived.

### Example 1

```text
Input:
["TrimmedAverage", "addElement", "addElement", "addElement", "trimmedAverage", "addElement", "trimmedAverage", "addElement", "addElement", "addElement", "trimmedAverage"]
[[4, 1], [7], [2], [8], [], [5], [], [5], [5], [5], []]
Output: [null, null, null, null, -1, null, 6, null, null, null, 5]
Explanation:
TrimmedAverage avg = new TrimmedAverage(4, 1);
avg.addElement(7);        // stream is [7]
avg.addElement(2);        // stream is [7,2]
avg.addElement(8);        // stream is [7,2,8]
avg.trimmedAverage();     // return -1, since m = 4 and only 3 elements have arrived.
avg.addElement(5);        // stream is [7,2,8,5]
avg.trimmedAverage();     // The last 4 elements are [7,2,8,5]; dropping the
                          // smallest and largest leaves [5,8], whose average
                          // is 13/2 = 6.5, rounded down to 6.
avg.addElement(5);        // stream is [7,2,8,5,5]
avg.trimmedAverage();     // The last 4 elements are [2,8,5,5]; trimming
                          // leaves [5,5], so return 5.
avg.addElement(5);        // stream is [7,2,8,5,5,5]
avg.addElement(5);        // stream is [7,2,8,5,5,5,5]
avg.trimmedAverage();     // The last 4 elements are [5,5,5,5]; trimming
                          // leaves [5,5], so return 5.
```

### Constraints

- `3 <= m <= 10⁵`
- `1 < k*2 < m`
- `1 <= num <= 10⁵`
- At most `10⁵` calls are made to `addElement` and `trimmedAverage`.

## Hints

### Hint 1

The window only ever gains one element at its head and loses one at its
tail — maintain the answer incrementally instead of recomputing.

### Hint 2

Three order-statistic structures over the value domain (below, inside,
above the trim zone) let each arrival shift membership in O(log V) and
keep a running sum of the surviving elements.
