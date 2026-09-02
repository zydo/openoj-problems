# Equal-Sum Splits After One Rewrite

## Description

A split of an array cuts it at a pivot: an index `p` with `1 <= p < n` puts
`nums[0] + nums[1] + ... + nums[p - 1]` on the left and
`nums[p] + nums[p + 1] + ... + nums[n - 1]` on the right, and the split
balances when those two sums are equal. Each cut position that balances counts
as one way to split the array.

You are also given an integer `k`. Before counting, you may pick at most one
element of `nums` and rewrite it to `k`, or skip the rewrite entirely.

Return the largest number of balanced splits that any such choice achieves.

### Example 1

```text
Input: nums = [1,2,4], k = 3
Output: 1
Explanation: Rewriting nums[1] to k gives [1,3,4], whose split after index 2
balances: 1 + 3 == 4.
```

### Example 2

```text
Input: nums = [0,0,0,0], k = 5
Output: 3
Explanation: Leaving the array unchanged is best. Both sides of every split —
after indices 1, 2 and 3 — sum to 0.
```

### Example 3

```text
Input: nums = [5,-3,4,2,6], k = 4
Output: 1
Explanation: Rewriting nums[4] to k gives [5,-3,4,2,4], whose split after
index 3 balances: 5 + (-3) + 4 == 2 + 4.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 10⁵`
- `-10⁵ <= nums[i], k <= 10⁵`

## Hints

### Hint 1

With the array untouched, a split after index `p` balances exactly when
`2 * (nums[0] + ... + nums[p - 1])` equals the grand total, so one running sum
tallies every balanced pivot.

### Hint 2

Picture each split by its imbalance `2 * prefix - total`. Rewriting `nums[i]`
to `k` nudges the imbalance of splits on one side of `i` by `k - nums[i]` and
on the other side by the opposite amount, so a split balances after the
rewrite when its original imbalance was `delta` or `-delta`.

### Hint 3

Sweep the array once while carrying two frequency maps of pivot imbalances —
splits already passed and splits still ahead — and each element's rewrite
candidate costs just two map lookups.
