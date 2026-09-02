# Folding Neighbors Under A Product Cap

## Description

You are given an integer array `nums` and an integer `k`.

Repeatedly, you may pick two neighboring entries `x` and `y` whose
product satisfies `x * y <= k` and fold them into one entry holding
`x * y`. For instance, with `k = 5` a single fold can turn
`[1, 2, 2, 3]` into `[1, 4, 3]` or `[2, 2, 3]`, but never into
`[1, 2, 6]`.

Folds may be applied any number of times, in any order. Return the
shortest length `nums` can possibly reach.

### Example 1

```text
Input: nums = [4,2,3,5], k = 10
Output: 3
Explanation: Fold the first pair once: [4,2,3,5] -> [8,3,5]. Now
8 * 3 = 24 and 3 * 5 = 15 both exceed 10, so no fold is left and the
array rests at length 3.
```

### Example 2

```text
Input: nums = [2,2,2,2,2], k = 8
Output: 2
Explanation: Fold left to right: [2,2,2,2,2] -> [4,2,2,2] ->
[8,2,2], then fold the trailing pair 2 * 2 = 4 to reach [8,4]. Now
8 * 4 = 32 exceeds the cap, so 2 is the shortest reachable length.
```

### Example 3

```text
Input: nums = [5,0,9], k = 4
Output: 1
Explanation: The zero folds with either neighbor, because its product
with anything is 0 <= 4, and the folded 0 keeps absorbing the rest
until one entry remains.
```

### Example 4

```text
Input: nums = [1,1,4,1,1], k = 3
Output: 3
Explanation: Neighboring ones fold into each other (1 * 1 = 1 <= 3),
collapsing the array to [1,4,1]; the 4 cannot join either side since
4 * 1 = 4 > 3.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

A single zero folds with any neighbor and the folded value stays zero,
so one zero anywhere drags the whole array down to a lone entry.

### Hint 2

After that, collapse runs of adjacent ones first — with `k >= 1` they
merge freely, and afterwards no two neighbors can both be 1, so every
unfolded pair's product is at least 2.

### Hint 3

Let `dp[i]` be the shortest length reachable from the first `i`
entries. The last entry of a folded result is some block that swallowed
everything from `j` to `i`, giving `dp[i] = min(dp[i], dp[j - 1] + 1)`.

### Hint 4

For a fixed `i`, walk left multiplying entries into a running product
and stop as soon as it passes `k`; every index passed before that is a
valid `j`.

### Hint 5

Because neighboring values are no longer both 1, each step of that
backward walk at least doubles the product, so it lasts at most
`2 * log2(k)` steps — giving `O(n * log k)` overall.
