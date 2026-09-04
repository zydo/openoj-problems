# Arithmetic Subsequence Count

## Description

You are given an integer array `nums`. Count the arithmetic progressions hiding
inside it as subsequences.

A progression here means three or more numbers whose consecutive gaps all
match: `3, 7, 11` (gap 4 throughout), `5, 5, 5` (gap 0), and `9, 4, -1` (gap
-5) all qualify, while `1, 2, 4` does not. A subsequence keeps the left-to-right
order of `nums` but may skip elements freely, so its members need not sit
next to each other.

Two subsequences are different when they pick different positions, even if the
resulting numbers read the same.

Return how many such subsequences `nums` contains. The inputs are built so the
count fits in a 32-bit integer.

### Example 1

```text
Input: nums = [1,2,3,5,7]
Output: 4
Explanation: The qualifying subsequences are [1,2,3], [1,3,5], [3,5,7], and
[1,3,5,7]. Note that [1,3,5] skips 2 — the members need not be adjacent.
```

### Example 2

```text
Input: nums = [4,4,4,4]
Output: 5
Explanation: Any three of the four positions form a progression with gap 0,
and so do all four together: 4 + 1 = 5.
```

### Example 3

```text
Input: nums = [0,-2,-4,1,3]
Output: 1
Explanation: Only [0,-2,-4] works. Values may be negative and gaps may
decrease.
```

### Constraints

- `1 <= nums.length <= 1000`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- The answer fits in a 32-bit integer.

## Hints

### Hint 1

Walking every subsequence is hopeless — there are too many. Ask instead what
an ending position needs to remember: not whole sequences, just a tally per
gap.

### Hint 2

For each position `i`, keep a map from gap `d` to the number of progressions
of length two or more that end at `i` and step by `d`. Pairs are the seed
stock: every pair fixes a gap, and longer progressions grow out of pairs by
repeating the gap.

### Hint 3

Extending a progression that ends at `j` with `nums[i] - nums[j] = d` produces
one finished progression of length three or more — so `dp[j][d]` flows into
the answer right away, and into `dp[i][d]` for further growth. Handling gaps
of zero needs no special case; equal values simply extend each other.
