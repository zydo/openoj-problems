# Fewest Changes to Match Mirror Sums

## Description

You hold an even-length array `nums` and an integer `limit`. One change
replaces a single entry with any integer from `1` to `limit`.

Call the array **mirror-matched** when every entry and its mirror —
position `i` against position `n - 1 - i` — add up to one total shared
by all pairs. In `[3,1,4,2]` both mirrors total `5`.

Return the fewest changes that make `nums` mirror-matched.

### Example 1

```text
Input: nums = [4,2,6,3], limit = 6
Output: 1
Explanation: The mirrors currently total 7 (4 + 3) and 8 (2 + 6).
Rewriting the 6 as a 5 leaves both pairs at 7.
```

### Example 2

```text
Input: nums = [1,3,3,1], limit = 3
Output: 2
Explanation: Rewriting the middle 3 to 1 gives [1,3,1,3], whose mirrors
both total 4. A single change cannot succeed: it moves only one pair,
whose reachable totals are 2 through 4, while the untouched pair sits
at 6 — or vice versa.
```

### Example 3

```text
Input: nums = [2,5,3,5,3,6], limit = 6
Output: 0
Explanation: The mirror pairs (2, 6), (5, 3) and (3, 5) all total 8, so
nothing needs rewriting.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 10⁵`
- `1 <= nums[i] <= limit <= 10⁵`
- `n` is even.

## Hints

### Hint 1

Fix a candidate common total `t`. Each mirrored pair now needs a number
of rewrites you can state exactly: zero, one, or two.

### Hint 2

The answer is the total over pairs, minimized over `t` — and only the
range from `2` to `2·limit` holds candidates worth testing.

### Hint 3

For every pair, the stretches of `t` costing 0, 1 and 2 are contiguous
ranges, so marking them is a range-update job: a difference array plus
one sweep evaluates all totals at once.
