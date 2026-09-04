# Widest Step Around The Ring

## Description

Treat the array `nums` as a ring: its last element sits next to its first.
Over every pair of neighbors on that ring, take the absolute difference of
the two values, and return the largest such difference.

### Example 1

```text
Input: nums = [6,2,9]
Output: 7
Explanation: The neighbor pairs differ by |6-2| = 4, |2-9| = 7, and —
because the array is circular — |9-6| = 3 across the seam. The largest is
7.
```

### Example 2

```text
Input: nums = [40,-40,12,0]
Output: 80
Explanation: The first two elements are neighbors, and |40 - (-40)| = 80
is wider than any other step around the ring.
```

### Example 3

```text
Input: nums = [-8,3,-8,3]
Output: 11
Explanation: Every neighbor on this ring is a -3/3 flip apart — each of
the four steps measures |-8 - 3| = 11.
```

### Constraints

- `2 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

Walk the array once and measure every pair of neighboring positions,
starting with the first two elements.

### Hint 2

Do not forget the step that closes the ring: the pair made of the last
and the first element counts too.
