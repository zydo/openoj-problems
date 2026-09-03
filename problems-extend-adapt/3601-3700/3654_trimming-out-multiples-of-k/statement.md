# Trimming Out Multiples Of K

## Description

An array `nums` and an integer `k` are given, and you may erase as much of
the array as you like under one rule: each erasure removes a contiguous
block whose elements add up to a multiple of `k`. Erased blocks close up —
elements that were separated by a removal end up next to each other, so a
later erasure can span territory an earlier one opened.

Any number of erasures may be performed, including zero. Return the
smallest total left in the array once you stop.

### Example 1

```text
Input: nums = [2,4,6,3], k = 6
Output: 3
Explanation: Erase [2,4], whose sum is 6 — a multiple of 6 — leaving
[6,3]. Erasing the lone [6] then leaves [3], and no further block sums to a
multiple of 6, so 3 is the smallest reachable total.
```

### Example 2

```text
Input: nums = [7,3], k = 5
Output: 0
Explanation: The whole array sums to 10, a multiple of 5, so both elements
go at once and nothing survives.
```

### Example 3

```text
Input: nums = [4,2,8,5,6], k = 7
Output: 4
Explanation: The block [2,8,5,6] sums to 21 — three sevens — so erasing it
in one move leaves [4]. The survivor itself is not a multiple of 7, so the
answer is 4.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`
- `1 <= k <= 10⁵`

## Hints

### Hint 1

A block's sum is a multiple of `k` exactly when the prefix sums just
before and just after the block agree modulo `k`.

### Hint 2

Let `dp[i]` be the least total that can remain from the first `i` elements;
each position either keeps its element or ends an erasure.

### Hint 3

For each remainder, remember the smallest `dp[j]` among the prefixes seen
with that remainder — that single value decides the current `dp[i]`.

### Hint 4

Carry the prefix sum along as you scan so no block total is ever
recomputed from its elements.
