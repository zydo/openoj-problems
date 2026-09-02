# Smallest Average Gap

## Description

You are given a 0-indexed integer array `nums` of length `n`.

Cut the array after index `i`: the left part holds the first `i + 1`
elements and the right part holds the remaining `n - i - 1` elements. The
**average gap** of index `i` is the absolute difference between the left
part's average and the right part's average, where both averages are rounded
down to the nearest integer.

Return the index whose average gap is smallest. If several indices tie,
return the smallest of them.

### Note

- The average of `k` elements is their sum divided by `k`, rounded down.
- An empty right part — at the last index — has average `0`.

### Example 1

```text
Input: nums = [4,2,7,1,3]
Output: 1
Explanation:
- Index 0: |4 / 1 - 13 / 4| = |4 - 3| = 1.
- Index 1: |6 / 2 - 11 / 3| = |3 - 3| = 0.
- Index 2: |13 / 3 - 4 / 2| = |4 - 2| = 2.
- Index 3: |14 / 4 - 3 / 1| = |3 - 3| = 0.
- Index 4: |17 / 5 - 0| = |3 - 0| = 3.
Indices 1 and 3 both reach the minimum gap of 0, so the smallest of them,
1, is returned.
```

### Example 2

```text
Input: nums = [0,0,0]
Output: 0
Explanation:
Every index has an average gap of 0, so index 0 is returned.
```

### Example 3

```text
Input: nums = [9]
Output: 0
Explanation:
With a single element the left part is the whole array and the right part
is empty, so the gap is |9 - 0| = 9 at the only index, 0.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Recomputing both sides from scratch at every index is wasted work — what
quantities could you carry along as the scan advances?

### Hint 2

Keep a running prefix sum: the left average follows directly from it, and
the right part's sum is just the total minus the prefix.
