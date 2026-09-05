# The Rolling Number Ledger

## Description

Design a ledger that holds numbers as they arrive and can report three
kinds of statistics about the numbers it currently holds.

Implement the `RollingStats` class:

- `RollingStats()` initializes the ledger with no numbers.
- `void addNumber(int number)` records `number` in the ledger.
- `void removeFirstAddedNumber()` removes the number that has been in
  the ledger the longest.
- `int getMean()` returns the floored mean of the numbers currently in
  the ledger.
- `int getMedian()` returns the median of the numbers currently in the
  ledger.
- `int getMode()` returns the mode of the numbers currently in the
  ledger. If several numbers tie for most frequent, return the
  smallest.

Notes:

- The mean is the sum of the recorded numbers divided by how many there
  are.
- The median is the middle number when the recorded numbers are sorted
  in non-decreasing order; if two numbers share the middle, the larger
  of the two is taken.
- The mode is the number that occurs most often.

### Example 1

```text
Input:
["RollingStats", "addNumber", "addNumber", "addNumber", "addNumber", "getMean", "getMedian", "getMode", "removeFirstAddedNumber", "getMode", "getMean"]
[[], [4], [9], [4], [11], [], [], [], [], [], []]
Output: [null, null, null, null, null, 7, 9, 4, null, 4, 8]
Explanation:
RollingStats ledger = new RollingStats();
ledger.addNumber(4);            // the ledger holds [4]
ledger.addNumber(9);            // the ledger holds [4, 9]
ledger.addNumber(4);            // the ledger holds [4, 9, 4]
ledger.addNumber(11);           // the ledger holds [4, 9, 4, 11]
ledger.getMean();               // 28 / 4 = 7
ledger.getMedian();             // sorted: [4, 4, 9, 11]; middles 4 and 9, larger is 9
ledger.getMode();               // 4 occurs twice, more than anything else
ledger.removeFirstAddedNumber(); // the ledger holds [9, 4, 11]
ledger.getMode();               // each of 9, 4, 11 occurs once; smallest is 4
ledger.getMean();               // 24 / 3 = 8
```

### Example 2

```text
Input:
["RollingStats", "addNumber", "addNumber", "addNumber", "addNumber", "getMean", "getMedian", "getMode"]
[[], [2], [6], [4], [10], [], [], []]
Output: [null, null, null, null, null, 5, 6, 2]
Explanation:
RollingStats ledger = new RollingStats();
ledger.addNumber(2);            // the ledger holds [2]
ledger.addNumber(6);            // the ledger holds [2, 6]
ledger.addNumber(4);            // the ledger holds [2, 6, 4]
ledger.addNumber(10);           // the ledger holds [2, 6, 4, 10]
ledger.getMean();               // 22 / 4 = 5.5, floored to 5
ledger.getMedian();             // sorted: [2, 4, 6, 10]; middles 4 and 6, larger is 6
ledger.getMode();               // all occur once; smallest is 2
```

### Constraints

- `1 <= number <= 10⁹`
- At most `10⁵` calls in total are made to `addNumber`,
  `removeFirstAddedNumber`, `getMean`, `getMedian`, and `getMode`.
- `removeFirstAddedNumber`, `getMean`, `getMedian`, and `getMode` are
  only called while the ledger holds at least one number.

## Hints

### Hint 1

Give every statistic a structure it can keep up to date on each add and
remove, rather than recomputing it from scratch.

### Hint 2

The median stays at a heap top if two heaps split the values into a
lower and an upper half; the mode stays at a heap top if entries are
ordered by count, then value. Removals from the middle can be handled
lazily — mark departed values and skip them when they surface.
