# Peeling Pairs For The Best Score

## Description

An integer array `nums` sits on the table. While it holds more than two
elements, take one of these actions:

- Peel off the two leftmost elements.
- Peel off the two rightmost elements.
- Peel off the leftmost and rightmost elements.

Each action adds the sum of the peeled pair to a running score, and the
process stops once two or fewer elements remain. Return the largest score
that can be built this way.

### Example 1

```text
Input: nums = [3,1,2]
Output: 5
Explanation: The three opening moves score 3 + 1 = 4 (left pair),
1 + 2 = 3 (right pair), or 3 + 2 = 5 (both ends). Taking both ends is
best, leaving [1] behind for a score of 5.
```

### Example 2

```text
Input: nums = [4,-2,3,1]
Output: 5
Explanation: Exactly one peel happens before two elements remain. The
left pair scores 4 + (-2) = 2, the right pair 3 + 1 = 4, and both ends
4 + 1 = 5 — the best choice, leaving [-2,3] unpeeled.
```

### Example 3

```text
Input: nums = [7]
Output: 0
Explanation: A single element never triggers a peel, so no score
accumulates.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`

## Hints

### Hint 1

Peels only ever trim the ends, so the survivors form one contiguous block:
exactly one element when `n` is odd, exactly two adjacent ones when `n` is
even.

### Hint 2

Every peeled element is scored exactly once, so the final score is the
array's total minus the sum of whatever survives.

### Hint 3

Maximizing the score means minimizing the survivors: the smallest single
element for odd `n`, the adjacent pair with the smallest sum for even `n`.
