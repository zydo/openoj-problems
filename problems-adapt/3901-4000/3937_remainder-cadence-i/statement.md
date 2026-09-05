# Remainder Cadence I

## Description

You are given an integer array `nums` and an integer `k`.

In one operation, pick any element of `nums` and raise or lower it by `1`.

The array keeps a remainder cadence when two distinct integers `x` and `y`
(with `0 <= x, y < k`) exist such that:

- every element at an even index satisfies `nums[i] % k == x`
- every element at an odd index satisfies `nums[i] % k == y`

Return the minimum number of operations needed to give `nums` a remainder
cadence.

### Example 1

```text
Input: nums = [3,7,3,9], k = 4
Output: 2
Explanation:
    Pick x = 3 for the even indices and y = 1 for the odd ones. The even
    elements already leave remainder 3, and raising 7 twice — to 9 —
    makes every odd element leave remainder 1, so 2 operations suffice.
```

### Example 2

```text
Input: nums = [5], k = 5
Output: 0
Explanation:
    A lone element has no odd indices at all, so any pair of distinct
    remainders already works — the element itself pins down x.
```

### Example 3

```text
Input: nums = [10,10,10], k = 2
Output: 1
Explanation:
    Every element leaves remainder 0, and the two chosen remainders must
    differ. Bumping the middle element to 11 hands the odd index the
    remainder 1 while the even indices keep 0, at a cost of 1 operation.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 10⁹`
- `2 <= k <= 100`

### Hint 1

Only each element's current remainder `nums[i] % k` matters — the values
themselves can be forgotten once reduced.

### Hint 2

Try every distinct pair `(x, y)`; steering one remainder to another costs
the shorter trip around the mod-`k` circle.
