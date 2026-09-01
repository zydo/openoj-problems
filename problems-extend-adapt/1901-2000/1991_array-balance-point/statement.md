# Array Balance Point

## Description

An integer array `nums` has a balance point at index `i` when the
entries strictly left of `i` and the entries strictly right of `i` add
up to the same value:

```text
nums[0] + ... + nums[i-1]  ==  nums[i+1] + ... + nums[len-1]
```

An empty side counts as summing to `0`, so the first and the last index
are legitimate candidates. Return the smallest index that balances the
array, or `-1` when no index does.

### Example 1

```text
Input: nums = [3,-1,4,7,2,4]
Output: 3
Explanation: Left of index `3` the entries total
`3 + (-1) + 4 = 6`; right of it they total `2 + 4 = 6`. The two sides
match, so `3` is a balance point.
```

### Example 2

```text
Input: nums = [0,2,-2,2,-2,0]
Output: 0
Explanation: At index `0` the left side is empty, so it sums to `0`,
and the right side happens to total `0` as well — index `0` balances.
```

### Example 3

```text
Input: nums = [9,-4,-5,7]
Output: 3
Explanation: Index `3` is the last position, so its right side sums to
`0`; the entries before it give `9 + (-4) + (-5) = 0` too.
```

### Example 4

```text
Input: nums = [6,4,9,3,1]
Output: -1
Explanation: No index in the array has equal sums on its two sides.
```

### Constraints

- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

## Hints

### Hint 1

The total sum is fixed. Knowing it, the right-hand sum at any index can
be derived from the left-hand sum alone — no second running total is
needed.

### Hint 2

Sweep left to right, growing the left sum by one entry at a time, and
test each index before adding its own value in.

### Hint 3

Index `i` balances exactly when `left == total - left - nums[i]`, and
the first index that satisfies this is the answer.
