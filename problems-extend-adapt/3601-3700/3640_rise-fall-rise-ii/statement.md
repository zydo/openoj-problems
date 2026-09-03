# Rise, Fall, Rise II

## Description

Read a stretch of an array as a trail: climb, descend, then climb once
more. Given an integer array `nums` of length `n`, a contiguous subarray
`nums[l...r]` (with `0 <= l < r < n`) carries this rise-fall-rise shape
when there exist indices `l < p < q < r` such that

- `nums[l...p]` is strictly increasing,
- `nums[p...q]` is strictly decreasing,
- `nums[q...r]` is strictly increasing.

Each of the three stretches needs two elements at minimum, and neighboring
stretches share their joining element — the peak `p` closes the first rise
and opens the fall, while the valley `q` closes the fall and opens the
second rise.

Among all subarrays with this shape, return the largest possible sum of
their values. The input guarantees at least one such subarray exists.

### Example 1

```text
Input: nums = [3,7,1,5,9]
Output: 25
Explanation: Choose l = 0, p = 1, q = 2, r = 4:
- nums[l...p] = [3,7] climbs strictly.
- nums[p...q] = [7,1] falls strictly.
- nums[q...r] = [1,5,9] climbs strictly again.
Every element takes part in the trail: 3 + 7 + 1 + 5 + 9 = 25.
```

### Example 2

```text
Input: nums = [-1,3,-2,0]
Output: 0
Explanation: The whole array works with l = 0, p = 1, q = 2, r = 3:
[-1,3] climbs, [3,-2] falls, and [-2,0] climbs once more, so the sum is
-1 + 3 + -2 + 0 = 0.
```

### Example 3

```text
Input: nums = [10,1,5,3,4]
Output: 13
Explanation: The best trail is l = 1, p = 2, q = 3, r = 4, whose stretches
[1,5], [5,3], and [3,4] sum to 13. The leading 10 cannot join: the shape
opens with a strict rise, and 10 > 1 already breaks the first stretch.
```

### Constraints

- `4 <= n == nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- At least one subarray with the rise-fall-rise shape is guaranteed to
  exist.

## Hints

### Hint 1

Think of the trail as passing through three phases — first rise, fall,
second rise — and scan the array while tracking, per element, the best sum
of a partial trail that ends there and has reached some phase.

### Hint 2

Strictness drives the transitions: compare `nums[i]` with `nums[i-1]`, and
let a phase advance only across a step whose direction that phase allows.
Equal neighbors kill every phase.

### Hint 3

Guard the minimum lengths through what each phase may rest on. The opening
rise may pause on a single element (it still needs room to grow), but the
fall may only open from a finished two-element rise, which also certifies
that the peak and the valley are distinct elements.

### Hint 4

The answer is the best value ever held by the final phase's state — a
trail whose fall has already turned back into the closing rise.
