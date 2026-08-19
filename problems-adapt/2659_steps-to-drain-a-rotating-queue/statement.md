# Steps to Drain a Rotating Queue

## Description

You are given an integer array `nums` of distinct values. Treat it as a
queue and repeat the following until nothing is left, one step per action:

- If the value at the front is the smallest still present, take it off the
  front.
- Otherwise, move the front value to the back.

Return how many steps pass before the queue is empty.

### Example 1

```text
Input: nums = [2,5,1]
Output: 5

Step | Queue
1    | [5, 1, 2]
2    | [1, 2, 5]
3    | [2, 5]
4    | [5]
5    | []
```

### Example 2

```text
Input: nums = [-3,7,0,4]
Output: 5

Step | Queue
1    | [7, 0, 4]
2    | [0, 4, 7]
3    | [4, 7]
4    | [7]
5    | []
```

### Example 3

```text
Input: nums = [6,8,10]
Output: 3

Step | Queue
1    | [8, 10]
2    | [10]
3    | []
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- Every value in `nums` is distinct.

## Hints

### Hint 1

Values always leave in increasing order, so the whole process is a sequence
of hunts: find where the next-smallest value sits, rotating until it reaches
the front.

### Hint 2

Between one removal and the next, the front only moves forward around a
cycle of the still-present positions. The cost of a removal is how many
survivors lie on that cyclic arc, plus one.

### Hint 3

Survivors keep disappearing while you count them. Which data structure
maintains a running count of remaining elements over any position range, and
finds the k-th survivor without a scan?
