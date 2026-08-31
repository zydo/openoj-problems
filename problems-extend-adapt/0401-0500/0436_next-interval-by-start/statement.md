# Next Interval by Start

## Description

Each interval is a pair `[start, end]` and every `start` is unique. For an
interval `i`, its right interval is the interval `j` whose `start` is the
smallest one at or above `i`'s `end`. An interval may be its own right
interval.

Return an array whose `i`-th entry is the index of the right interval for
interval `i`, or `-1` when none exists.

### Example 1

```text
Input: intervals = [[2,3],[1,4],[3,5]]
Output: [2,-1,-1]
Explanation: Interval 0's end 3 is met by start 3 at index 2. No start
reaches end 4 or end 5.
```

### Example 2

```text
Input: intervals = [[1,1]]
Output: [0]
Explanation: An interval whose own start already reaches its end is its
own right interval.
```

### Example 3

```text
Input: intervals = [[1,2],[2,3],[3,4]]
Output: [1,2,-1]
Explanation: End 2 is met by start 2 at index 1; end 3 by start 3 at
index 2; nothing reaches end 4.
```

### Constraints

- `1 <= intervals.length <= 2 * 10⁴`
- `intervals[i].length == 2`
- `-10⁶ <= start <= end <= 10⁶`
- The start of each interval is unique.
