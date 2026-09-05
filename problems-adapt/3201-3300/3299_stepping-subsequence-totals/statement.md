# Stepping Subsequence Totals

## Description

A subsequence is a stepping chain when picking through it never changes
direction: every step is exactly `+1`, or every step is exactly `-1`.
Its value is the sum of its elements.

For instance, `[3, 4, 5]` steps upward and is worth 12, `[9, 8]` steps
downward and is worth 17, while `[3, 4, 3]` and `[8, 6]` change step
size and are not chains at all. Any single element on its own is a
chain of one.

Given an array of integers `nums`, add up the values of every non-empty
stepping chain that can be picked from it, keeping index order but not
requiring contiguity — and return the total modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [2,3,5,4]
Output: 44
Explanation: The chains are [2], [3], [5], [4], [2,3], [3,4], [5,4]
and [2,3,4], worth 2 + 3 + 5 + 4 + 5 + 7 + 9 + 9 = 44.
```

### Example 2

```text
Input: nums = [4,2,1]
Output: 10
Explanation: Besides the three singletons, only [2,1] steps cleanly;
4 + 2 + 1 + 3 = 10.
```

### Example 3

```text
Input: nums = [7,7,8]
Output: 52
Explanation: Chains are counted by index range, not by spelling: the
two different 7's give two different [7,8] chains, so the total is
7 + 7 + 8 + 15 + 15 = 52.
```

### Constraints

- The array holds between 1 and 10⁵ elements.
- Every element is between 1 and 10⁵.

## Hints

### Hint 1

Listing chains one by one cannot survive 10⁵ elements. Flip the
question around: work out how many chains each element belongs to, then
its value times that count is its share of the answer.

### Hint 2

A chain is pinned down by the value it ends at. Sweep left to right and
keep, per value, how many chains end there and the element-sum those
chains carry. An element of value x extends every chain ending at
x - 1 (rising) or x + 1 (falling) — wherever they started — because the
left-to-right scan already guarantees index order.

### Hint 3

The chains newly ending at x number one more than the bucket they grew
from — the extra one is the singleton [x] — and each extended chain
gains exactly one tail worth x. The singleton lives in both the rising
and falling books, so subtract x once per step to avoid double
counting.
