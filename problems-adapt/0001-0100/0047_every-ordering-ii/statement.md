# Every Ordering II

## Description

The ordering task returns, with one loosening: the array `nums` may now hold
the same value more than once. List every distinct way its elements can be
arranged — equal values that merely trade places count as the same ordering
and appear once.

As before, the list is expected back in ascending lexicographic order,
comparing orderings element by element.

### Example 1

```text
Input: nums = [2,2,1]
Output: [[1,2,2],[2,1,2],[2,2,1]]
```

The repeated `2`s make six raw arrangements but only three distinct
orderings; each is listed a single time.

### Example 2

```text
Input: nums = [0,0]
Output: [[0,0]]
```

Swapping two equal values changes nothing, so the pair yields exactly one
ordering.

### Example 3

```text
Input: nums = [-1,2,2]
Output: [[-1,2,2],[2,-1,2],[2,2,-1]]
```

A negative value sits alongside a duplicated pair; the three distinct
orderings are led by whichever value comes first.

### Constraints

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`
