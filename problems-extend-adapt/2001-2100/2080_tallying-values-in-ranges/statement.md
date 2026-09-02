# Tallying Values In Ranges

## Description

Design a structure that answers, over and over, how many times a given
number appears inside a given stretch of a fixed array. The stretch is
identified by its inclusive endpoint indices, and the array never
changes after setup.

Implement the `RangeTally` class:

- `RangeTally(int[] arr)` initializes the structure with the 0-indexed
  integer array `arr`.
- `int query(int left, int right, int value)` returns how many entries
  of `arr` between indices `left` and `right` inclusive equal `value`.

### Example 1

```text
Input:
["RangeTally", "query", "query", "query"]
[[[7, 1, 7, 3, 7, 1]], [0, 4, 7], [1, 5, 1], [2, 3, 7]]
Output: [null, 3, 2, 1]
Explanation:
RangeTally tally = new RangeTally([7, 1, 7, 3, 7, 1]);
tally.query(0, 4, 7); // return 3. The value 7 appears at indices 0, 2, and 4.
tally.query(1, 5, 1); // return 2. The value 1 appears at indices 1 and 5.
tally.query(2, 3, 7); // return 1. Only index 2 holds a 7 inside [2, 3].
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `1 <= arr[i], value <= 10⁹`
- `0 <= left <= right < arr.length`
- At most `10⁵` calls in total are made to `query`.

## Hints

### Hint 1

Group the positions where each distinct value occurs, once, at setup —
the positions come out sorted for free.

### Hint 2

A query for `value` in `[left, right]` is then just two binary searches
over that value's position list: how many positions land inside the
range.
