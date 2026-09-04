# Minimum OR Windows

## Description

You are given an array `nums` of non-negative integers, indexed from `0`.
For every index `i`, consider every non-empty subarray that starts at `i` and
extends to some `j >= i`. Among those subarrays, some attain the largest
possible bitwise OR — the OR of the whole suffix `nums[i..n-1]`, since OR
only ever gains bits as a window grows. Find the shortest such subarray and
record its length.

Return an array `answer` where `answer[i]` is the length of the shortest
subarray starting at `i` whose bitwise OR equals the maximum attainable
from `i`.

A subarray is a contiguous, non-empty run of elements within the array.

### Example 1

```text
Input: nums = [1, 2, 4]
Output: [3, 2, 1]
Explanation:
The suffix OR starting at index 0 is 1|2|4 = 7, first reached by [1,2,4],
so the window has length 3.
Starting at index 1 the suffix OR is 2|4 = 6, reached by [2,4] (length 2).
Starting at index 2 the suffix OR is 4, reached by [4] (length 1).
```

### Example 2

```text
Input: nums = [8, 1, 2, 1]
Output: [3, 2, 2, 1]
Explanation:
At index 0 the full suffix OR is 8|1|2|1 = 11, and [8,1,2] is the first
window to reach it (length 3).
At index 1 the suffix OR is 1|2|1 = 3, reached by [1,2] (length 2).
At index 2 the suffix OR is 2|1 = 3, reached by [2,1] (length 2).
At index 3 the window is [1] (length 1).
```

### Example 3

```text
Input: nums = [3, 1, 0, 2]
Output: [1, 3, 2, 1]
Explanation:
At index 0 the maximum OR is 3, and [3] alone already carries it (length 1).
At index 1 the suffix OR is 1|0|2 = 3, first reached by [1,0,2] (length 3).
At index 2 the suffix OR is 0|2 = 2, reached by [0,2] (length 2).
At index 3 the window is [2] (length 1).
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Think about each bit position separately instead of whole numbers.

### Hint 2

For a bit, find the next index at or after `i` whose value has that bit
set, if any.

### Hint 3

The answer at `i` is the greatest such distance over the bits the suffix
OR uses.

### Hint 4

Sweep from right to left to keep every distance current in linear time.
