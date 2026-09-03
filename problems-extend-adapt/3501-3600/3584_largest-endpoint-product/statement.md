# Largest Endpoint Product

## Description

You are given an integer array `nums` and an integer `m`.

A subsequence is what remains after deleting any elements (possibly
none) while keeping the order of the survivors. Consider every
subsequence of `nums` with exactly `m` elements, score it by the product
of its first element and its last element, and return the largest score
seen.

### Example 1

```text
Input: nums = [-4,10,-6,7,-8,3], m = 2
Output: 70
Explanation: The subsequence [10, 7] earns the largest endpoint
    product: 10 * 7 = 70.
```

### Example 2

```text
Input: nums = [5,-2,-7,4,9], m = 3
Output: 45
Explanation: The subsequence [5, 4, 9] starts at 5 and ends at 9,
    scoring 5 * 9 = 45 — no size-3 subsequence scores higher.
```

### Example 3

```text
Input: nums = [-3,-7], m = 1
Output: 49
Explanation: A one-element subsequence has the same entry in both
    positions, so [-7] scores (-7) * (-7) = 49, beating [-3]'s 9.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
- `1 <= m <= nums.length`

## Hints

### Hint 1

The middle picks are irrelevant, so a first element at index `i` may
pair with any last element at index `j >= i + m - 1` — the `m - 2`
remaining elements always fit strictly between the two.

### Hint 2

Sweep the first index from right to left. The pool of eligible partners
gains exactly one value per step, and the best product against a fixed
first value always comes from the pool's maximum or its minimum — keep
both current.
