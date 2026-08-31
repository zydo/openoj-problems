# Equilibrium Index

## Description

You're given an array of integers `nums`. Find its **equilibrium index**:
a position where the sum of every element strictly before it equals the
sum of every element strictly after it.

For an index at either end of the array, the missing side counts as a sum
of `0` — there's nothing before index `0`, and nothing after the last
index, so those sides trivially balance whatever the other side contributes
(they still need to actually equal `0` to qualify).

Return the smallest index that balances this way. If no index does,
return `-1`.

### Example 1

```text
Input: nums = [4,2,3,2,4]
Output: 2
Explanation: At index 2, the left sum is nums[0] + nums[1] = 4 + 2 = 6,
and the right sum is nums[3] + nums[4] = 2 + 4 = 6, so index 2 balances.
```

### Example 2

```text
Input: nums = [1,2,3,4]
Output: -1
Explanation: No index has matching left and right sums.
```

### Example 3

```text
Input: nums = [5,3,-3]
Output: 0
Explanation: At index 0 the left sum is 0 (nothing precedes it), and the
right sum is nums[1] + nums[2] = 3 + -3 = 0, so index 0 balances.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-1000 <= nums[i] <= 1000`

## Hints

### Hint 1

Build an array `leftSum` where `leftSum[i]` holds the sum of every element
before index `i`.

### Hint 2

Build an array `rightSum` where `rightSum[i]` holds the sum of every
element after index `i`.

### Hint 3

Scan indices in order and return the first `i` where `leftSum[i]` equals
`rightSum[i]`. If none matches, return `-1`.
