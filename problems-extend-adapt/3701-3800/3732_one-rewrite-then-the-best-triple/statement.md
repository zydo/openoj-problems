# One Rewrite, Then The Best Triple

## Description

You are given an integer array `nums`.

Exactly one element must be rewritten: pick one index and set its value to
any integer inside the closed interval `[-10⁵, 10⁵]`. Skipping the rewrite
is not an option, though the new value is allowed to equal the old one.

Once that single rewrite is done, choose three elements sitting at three
different indices of the changed array and multiply them.

Return the greatest product such a triple can reach.

### Example 1

```text
Input: nums = [6,-7,1]
Output: 4200000
Explanation: Rewrite the 1 to -100000, giving [6,-7,-100000]. Its three
elements multiply to 6 * (-7) * (-100000) = 4200000, and no rewrite can
push the product higher.
```

### Example 2

```text
Input: nums = [-8,-9,3]
Output: 7200000
Explanation: Rewrite the 3 to 100000, giving [-8,-9,100000]. The triple
(-8) * (-9) * 100000 = 7200000 is the best on offer.
```

### Example 3

```text
Input: nums = [4,-6,0]
Output: 2400000
Explanation: Rewrite the 0 to -100000, giving [4,-6,-100000]; the product
4 * (-6) * (-100000) = 2400000 is maximal.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`

## Hints

### Hint 1

The rewritten slot is worth most when it is driven to an endpoint of its
interval, `+10⁵` or `-10⁵`, with its sign chosen to fit the two untouched
elements it joins. So the answer is `10⁵` times the largest-magnitude
product of any pair of original values — a pair picked for sheer size,
which is not necessarily the two largest values.
