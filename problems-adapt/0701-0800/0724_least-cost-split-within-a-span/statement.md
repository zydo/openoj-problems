# Least-Cost Split Within a Span

## Description

You are given an integer array `nums` of length `n`, and two positive integers
`k` and `dist`.

A subarray is priced at its first element — the price of `[6, 4, 1]` is `6`.

Cut `nums` into `k` disjoint contiguous subarrays that together cover the whole
array. Writing the cut as `nums[0..i1-1], nums[i1..i2-1], ..., nums[ik-1..n-1]`,
the starts of the second through k-th subarrays must stay bunched: the distance
from the earliest of them to the latest, `ik-1 - i1`, may not exceed `dist`.

Return the smallest total price of a valid cut.

### Example 1

```text
Input: nums = [4, 9, 2, 7, 3, 8], k = 3, dist = 2
Output: 9
Explanation: Cutting after index 1 and after index 3 gives the subarrays
[4, 9], [2, 7], and [3, 8]. The chosen starts are 2 and 4, which are 2 apart —
exactly the allowed span. The total price is 4 + 2 + 3 = 9.
```

### Example 2

```text
Input: nums = [4, 9, 2, 7, 3, 8], k = 3, dist = 1
Output: 13
Explanation: The same array, but the two chosen starts must now be adjacent.
The cheap pairing from Example 1 — the 2 at index 2 with the 3 at index 4 — is
two apart and out of reach. Adjacent pairs cost 4 + 9 + 2 = 15, 4 + 2 + 7 = 13,
4 + 7 + 3 = 14, and 4 + 3 + 8 = 15, so the best cut is [4, 9], [2, 7], [3, 8]
with starts 2 and 3, for a total of 13.
```

### Example 3

```text
Input: nums = [7, 5, 6, 5, 4, 3, 9], k = 4, dist = 3
Output: 19
Explanation: With four subarrays there are three chosen starts besides index 0.
Starting the second subarray at index 3 leaves room for the remaining two
starts at indices 4 and 5, both within the span of 3. The subarrays are
[7, 5, 6], [5], [4], and [3, 9], totaling 7 + 5 + 4 + 3 = 19.
```

### Constraints

- `3 <= n <= 10^5`
- `1 <= nums[i] <= 10^9`
- `3 <= k <= n`
- `k - 2 <= dist <= n - 2`

## Hints

### Hint 1

Index 0 always begins the first subarray, so `nums[0]` is always paid. After
that, only the chosen start positions matter — the pieces between them are
forced.

### Hint 2

Fix the earliest chosen start `i1`. The other `k - 2` starts may be any
distinct positions in `(i1, i1 + dist]`, so the best completion takes the
`k - 2` smallest values in that stretch.

### Hint 3

`i1` sweeps from left to right and the stretch moves with it by one position at
a time, so maintain the window multiset incrementally — two heaps, or an
order-statistics structure — to keep the sum of the `k - 2` smallest cheap to
query.
