# Packing In The Most Leaps

## Description

You are given a 0-indexed array `nums` holding `n` integers, along with
an integer `target`. You start out standing on index 0. One leap takes
you from an index `i` to a strictly later index `j` as long as both of
these hold:

- `0 <= i < j < n`
- `-target <= nums[j] - nums[i] <= target`

Travel to the final index `n - 1` while squeezing in as many leaps as
possible. Return that largest possible leap count, or -1 when the last
index cannot be reached at all.

### Example 1

```text
Input: nums = [2,7,3,8,5], target = 4
Output: 2
Explanation: The route 0 → 2 → 4 rides the values 2 → 3 → 5, whose
gaps of 1 and 2 both fit inside 4 — that is 2 leaps. Index 1 sits out
of reach (2 to 7 is a gap of 5), and with it index 3, so no route can
break up the trip further.
```

### Example 2

```text
Input: nums = [0,1,2,3], target = 1
Output: 3
Explanation: Every neighboring pair of values differs by exactly 1, so
the walk 0 → 1 → 2 → 3 is legal one step at a time, giving 3 leaps —
the most any 4-slot route allows.
```

### Example 3

```text
Input: nums = [5,1,9], target = 3
Output: -1
Explanation: The value gaps are 4, 8, and 4 — every one exceeds 3, so
no leap is ever legal and the last index stays out of reach.
```

### Constraints

- `2 <= nums.length == n <= 1000`
- `-10⁹ <= nums[i] <= 10⁹`
- `0 <= target <= 2 * 10⁹`

### Hint 1

Leaps only point forward, so a position's best count can be settled
once and for all from the positions to its left — index order is a
processing order.

### Hint 2

Keep `best[j]`, the largest leap count of any route that ends on index
`j`, with a distinct "never landed here" state. For each `j`, scan the
earlier `i`: any reached `i` whose value gap fits extends to `j` with
`best[i] + 1` leaps, and `best[j]` keeps the strongest offer.

### Hint 3

The answer is `best[n - 1]`, with the "never landed here" state
reported as -1.
