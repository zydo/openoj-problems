# Maximum Shared Bits After Top-Ups

## Description

You are given an integer array `nums` together with two integers `k` and
`m`.

You may perform at most `k` top-ups. One top-up picks any index `i` and
raises `nums[i]` by 1.

Pick exactly `m` elements of the array — after applying your top-ups — and
take the bitwise AND of the chosen values. Return the largest possible AND
over every way to choose the top-ups and the `m`-element subset.

The bitwise AND of several values has a 1 in every bit position where all
of the values carry a 1.

### Example 1

```text
Input: nums = [5,9], k = 6, m = 2
Output: 10
Explanation: With m = 2 both elements must be chosen. Spend one top-up
raising 9 to 10, and five more raising 5 to 10 — exactly k = 6 in all.
The AND of [10, 10] is 10, and no budget-friendly choice beats it.
```

### Example 2

```text
Input: nums = [4,7,11,13], k = 5, m = 3
Output: 10
Explanation: Choose indices of 11, 13, and 7. Keep 11 as it is, spend one
top-up on 13 to reach 14, and spend three on 7 to reach 10 — 4 of the 5
allowed top-ups. The AND of [11, 14, 10] is 10 (binary 1010), the best
attainable.
```

### Example 3

```text
Input: nums = [2], k = 10, m = 1
Output: 12
Explanation: The single chosen element's AND is the element itself, so
spend all 10 top-ups raising 2 to 12.
```

### Constraints

- `1 <= n == nums.length <= 5 * 10⁴`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`
- `1 <= m <= n`

## Hints

### Hint 1

Build the answer greedily, one bit at a time, from the highest bit down:
a bit is worth taking whenever the budget can still cover it.

### Hint 2

Testing a candidate mask is per-element: the cheapest value at least
nums[i] that carries every candidate bit costs a computable number of
top-ups.

### Hint 3

Top-ups spent on different indices never interact, so the candidate is
affordable exactly when the m smallest per-element costs sum to at most k.

### Hint 4

Keep every feasible bit in the running mask and finish with the mask
itself as the answer.
