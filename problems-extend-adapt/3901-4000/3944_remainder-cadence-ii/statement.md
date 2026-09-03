# Remainder Cadence II

## Description

An array keeps a remainder cadence when two distinct integers `x` and `y`
(with `0 <= x, y < k`) exist such that:

- every element at an even index satisfies `nums[i] % k == x`
- every element at an odd index satisfies `nums[i] % k == y`

In one operation, pick any element of `nums` and raise or lower it by `1`.

Return the minimum number of operations needed to give `nums` a remainder
cadence.

### Example 1

```text
Input: nums = [8,3,6,1], k = 5
Output: 4
Explanation:
    Pick x = 1 for the even indices and y = 3 for the odd ones. The
    element 8 needs two lowerings to become 6, and the element 1 needs
    two raisings to become 3; the evens then read 6, 6 (remainder 1) and
    the odds read 3, 3 (remainder 3), for 4 operations in total.
```

### Example 2

```text
Input: nums = [5,5,5], k = 3
Output: 1
Explanation:
    All three elements leave remainder 2, and the two chosen remainders
    must differ. Lowering the middle element to 4 hands the odd index the
    remainder 1 while the even indices keep 2, at a cost of 1 operation.
```

### Example 3

```text
Input: nums = [10,21,30], k = 2
Output: 0
Explanation:
    With x = 0 and y = 1 the even elements 10 and 30 are already in place
    and the odd element 21 already leaves remainder 1, so nothing has to
    change.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `2 <= k <= 10⁵`

### Hint 1

Only each element's remainder `nums[i] % k` matters — keep two tallies, one
over the even indices and one over the odd ones, and forget the values.

### Hint 2

Steering a remainder `r` to a target `t` costs the shorter trip around the
mod-`k` circle: `min(abs(r - t), k - abs(r - t))`.

### Hint 3

Evaluate every target's per-parity total with prefix sums over a tripled
histogram, then pair each even target with the cheapest odd target other
than itself — the two smallest odd costs are all you need.
