# Equalizing Mirrored Pair Gaps

## Description

An integer array `nums` with an even length `n` is given, together with
an integer `k`.

A rewrite swaps out one element for any single integer between `0` and
`k`, inclusive. Group the array into mirrored pairs — `nums[0]` with
`nums[n - 1]`, `nums[1]` with `nums[n - 2]`, and so on. After any number
of rewrites (possibly zero), every mirrored pair should span the same
gap: some integer `X` must exist with `abs(nums[i] - nums[n - i - 1]) = X`
holding for every `i`.

Return the fewest rewrites that make this possible.

### Example 1

```text
Input: nums = [2,3,4,9,8,7], k = 9
Output: 0
Explanation: The mirrored pairs (2,7), (3,8) and (4,9) each span a gap
of 5 already, so no rewrite is needed.
```

### Example 2

```text
Input: nums = [2,5,3,8,9,7], k = 9
Output: 1
Explanation: Aiming for a shared gap of 5, only the pair (5,9) is off.
Rewriting nums[4] as 0 turns it into (5,0), whose gap is 5, matching
the untouched pairs. One rewrite cannot do better than one.
```

### Example 3

```text
Input: nums = [1,3,2,8,6,9], k = 9
Output: 2
Explanation: Committing to a shared gap of 3, rewrite nums[5] as 4 so
the outer pair (1,4) spans 3, and rewrite nums[2] as 5 so the inner
pair (5,8) spans 3 as well; the middle pair (3,6) already spans 3. No
single shared gap is reachable with fewer than two rewrites.
```

### Constraints

- `2 <= n == nums.length <= 10⁵`
- `n` is even.
- `0 <= nums[i] <= k <= 10⁵`

## Hints

### Hint 1

The shared gap `X` can take at most `k + 1` distinct values, and any
final array is committed to one of them.

### Hint 2

With `X` fixed up front, price each mirrored pair independently: how
many rewrites bring that one pair to a gap of exactly `X`? The answer
is the sum of the cheapest per-pair prices, minimized over `X`.
