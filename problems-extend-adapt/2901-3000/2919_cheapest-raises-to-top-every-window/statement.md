# Cheapest Raises To Top Every Window

## Description

You are given a 0-indexed integer array `nums` of length `n` and an
integer `k`.

One raise picks an index `i` and increases `nums[i]` by `1`; you may
perform any number of raises, including none. Call the array `peaked`
when every run of 3 or more consecutive elements contains at least one
value that is `k` or greater.

Return the minimum total number of raises needed to make `nums`
`peaked`.

A run of consecutive elements (a subarray) is any non-empty sequence of
neighboring elements of the array.

### Example 1

```text
Input: nums = [5,1,0,2,7], k = 6
Output: 5
Explanation: Raise index 0 once (5 -> 6) and index 3 four times
(2 -> 6), spending 5 raises to reach [6,1,0,6,7].
Each length-3 window now tops out at 6 or more: [6,1,0] holds 6,
[1,0,6] holds 6, and [0,6,7] holds 7, so every longer run is covered
too.
The window [1,0,2] forces one of its positions up to 6, and the
cheapest single choice there costs 4 (index 3), after which the window
[5,1,0] still needs index 0 raised once — so 4 raises can never
suffice.
Hence the answer is 5.
```

### Example 2

```text
Input: nums = [9,9,9], k = 4
Output: 0
Explanation: The array's only length-3 window already tops out at 9,
which is at least k = 4, so no raise is needed.
Hence the answer is 0.
```

### Example 3

```text
Input: nums = [0,0,0,0], k = 3
Output: 3
Explanation: Raise index 1 three times (0 -> 3), reaching [0,3,0,0].
The two length-3 windows, [0,3,0] and [3,0,0], both contain that 3, so
the array is peaked.
One or two raises leave every element below 3, so no window could
contain a qualifying value.
Hence the answer is 3.
```

### Constraints

- `3 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

Every run of 3 or more elements contains one of the length-3 windows,
and each length-3 window is itself such a run — so the requirement is
exactly that every window of 3 consecutive positions holds a value of
at least `k`.

### Hint 2

Raising an element past `k` buys nothing: the value `k` certifies
precisely the same windows as any larger value, so each position has a
fixed price `max(0, k - nums[i])`.

### Hint 3

Use dynamic programming. Let `dp[i]` be the cheapest set of raised
positions that satisfies every length-3 window inside the prefix ending
at `i`, with position `i` itself raised.

### Hint 4

Position `i` covers the windows that end at `i`, `i + 1`, or `i + 2`,
so the previously raised position must lie among the three before it:
`dp[i] = max(0, k - nums[i]) + min(dp[i-1], dp[i-2], dp[i-3])` for
`i >= 3`, while the first three entries are just their own prices.

### Hint 5

Nothing after the last raised position needs cover, so the answer is
`min(dp[n-1], dp[n-2], dp[n-3])`; only the three most recent states are
ever read, and a single pass with three rolling variables suffices.
