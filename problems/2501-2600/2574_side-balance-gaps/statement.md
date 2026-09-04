# Side Balance Gaps

## Description

For a 0-indexed integer array `nums` of length `n`, picture each index's
balance: the sum of everything to its left versus the sum of everything
to its right. A side with no elements counts as `0`.

Return an integer array `answer` of length `n` where `answer[i]` is the
absolute gap between the two sides at index `i`.

### Example 1

```text
Input: nums = [7,2,9,5,1]
Output: [17,8,3,17,23]
Explanation: The left sums are [0,7,9,18,23] and the right sums are
[17,15,6,1,0], so the gaps are |0 - 17|, |7 - 15|, |9 - 6|, |18 - 1|,
|23 - 0|.
```

### Example 2

```text
Input: nums = [3,3,3]
Output: [6,0,6]
Explanation: The outer indexes each face 3 on one side and 6 on the
other, while the middle index is perfectly balanced.
```

### Example 3

```text
Input: nums = [6]
Output: [0]
Explanation: The only element has nothing on either side, so the gap
is 0.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Only the running prefix matters: the right sum at index `i` is the
grand total minus the left prefix minus `nums[i]` itself.

### Hint 2

One precomputed total plus one forward pass holding the left sum is
enough — per-index rescans of both sides only repeat work.
