# Counting Multisets Within A Sum Range

## Description

Given an array `nums` of non-negative integers and two integers `l` and
`r`, count the multisets that can be assembled from `nums` whose element
sums land in the inclusive window `[l, r]`.

A multiset drawn from `nums` is an unordered selection in which each
distinct value `x` appears anywhere from `0` up to `occ[x]` times, where
`occ[x]` is how often `x` occurs in `nums`. Two multisets count as the
same one exactly when they contain the same values with the same
multiplicities. The empty multiset has sum `0`.

Because the count can be enormous, return it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [0,1,1,2], l = 2, r = 3
Output: 6
Explanation: The qualifying multisets are {2}, {1,1}, {0,2}, {1,2},
{0,1,1}, and {0,1,2} — sums 2 or 3. The single 0 may join or stay out,
which is why each sum-2 shape without it has a partner with it.
```

### Example 2

```text
Input: nums = [3,5], l = 4, r = 4
Output: 0
Explanation: The possible sums are 0 (nothing taken), 3, 5, and 8; none
of them equals 4, so no multiset qualifies.
```

### Example 3

```text
Input: nums = [0,0,2], l = 0, r = 2
Output: 6
Explanation: Three multisets sum to 0 — {}, {0}, {0,0} — and three sum
to 2 — {2}, {0,2}, {0,0,2}. No multiset sums to 1, so the window
[0, 2] catches six in total.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `0 <= nums[i] <= 2 * 10⁴`
- The sum of `nums` does not exceed `2 * 10⁴`.
- `0 <= l <= r <= 2 * 10⁴`

## Hints

### Hint 1

With the total of `nums` capped at `2 * 10⁴`, the array holds at most a
couple of hundred distinct values — process value by value, not element
by element.

### Hint 2

Keep `dp[x]` as the number of distinct multisets whose elements sum to
exactly `x`, built up over the distinct values seen so far.

### Hint 3

Adding a value `v` with `c` available copies lets a multiset take any
count from `0` to `c`, which is a bounded-knapsack transition; sliding a
window over prefix sums of one residue class modulo `v` applies it in
amortized constant time per state.

### Hint 4

Zeros never move a sum, so `cnt[0] + 1` simply multiplies every count;
the answer is then `dp[l] + dp[l+1] + ... + dp[r]`.
