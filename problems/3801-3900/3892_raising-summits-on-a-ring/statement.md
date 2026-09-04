# Raising Summits on a Ring

## Description

You are given a circular integer array `nums` of length `n` — the element
after `nums[n - 1]` is `nums[0]`, and the one before `nums[0]` is
`nums[n - 1]`. An index `i` is a summit when `nums[i]` is strictly greater
than both of its two ring neighbours.

A single move picks one element and adds `1` to it, and moves may pile up on
the same element as many times as needed. Return the fewest moves that leave
the ring holding at least `k` summits, or `-1` if no amount of raising can
get there.

### Example 1

```text
Input: nums = [5,1,5,1], k = 1
Output: 0
Explanation: Indices 0 and 2 each hold a 5 flanked by two 1s, so the ring
already carries summits and no move is needed.
```

### Example 2

```text
Input: nums = [7,7,7,7], k = 2
Output: 2
Explanation: Every element ties both neighbours, so each summit costs one
raise. Lifting indices 0 and 2 turns the ring into [8,7,8,7], which has
its two summits — and no summit can be had for less than one raise.
```

### Example 3

```text
Input: nums = [4,1,4,1,4], k = 3
Output: -1
Explanation: Two summits can never sit side by side on a ring, and five
slots fit at most two, so a third is out of reach no matter how many moves
are spent.
```

### Constraints

- `2 <= n == nums.length <= 5000`
- `-10⁵ <= nums[i] <= 10⁵`
- `0 <= k <= n`

## Hints

### Hint 1

A summit's two ring neighbours can never be summits themselves, so they
keep their original values — crowning index `i` costs
`max(0, max(prev, next) + 1 - nums[i])`.

### Hint 2

A ring of `n` positions fits at most `n / 2` (floored) summits; a `k`
beyond that answers `-1` immediately.

### Hint 3

Cut the circle at index 0: either index 0 is crowned, which bars its two
neighbours, or it is left alone and the rest forms an ordinary line. Each
case is a knapsack that tracks how many summits have been paid for so far.
