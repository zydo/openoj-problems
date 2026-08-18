# Select Kth Largest

## Description

You are given an integer array `nums` and an integer `k`. Report the value
that would sit in position `k` if `nums` were sorted from largest to
smallest.

Equal values hold separate positions: for `[9, 9, 7]` the two 9s are the
1st and 2nd largest, and 7 is the 3rd.

### Example 1

```text
Input: nums = [7,1,9,3,9,5], k = 3
Output: 7
Explanation: Sorted downward the array reads 9, 9, 7, 5, 3, 1 — the third
value is 7.
```

### Example 2

```text
Input: nums = [-2,-7,-1,-7], k = 2
Output: -2
Explanation: Both -7s rank behind -2, which is second from the top.
```

### Example 3

```text
Input: nums = [4], k = 1
Output: 4
```

### Constraints

- `1 <= k <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

### Follow-up

Full sorting is more work than the question deserves. Can you answer
without ordering everything?

## Hints

### Hint 1

The target is one fixed position of the sorted array — index `n - k` in
ascending order. You need that position's value, not the sorted array.

### Hint 2

Quickselect partitions around a pivot, fixes the pivot at its final sorted
slot, and recurses only into the side still holding the target — linear on
average.

### Hint 3

Alternatively, a min-heap capped at `k` members holds the running top `k`
after one sweep; its root is the answer.

### Hint 4

Whichever route, duplicates occupy ranks like any other value — count them.
